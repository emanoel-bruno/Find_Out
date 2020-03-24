/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RouteComponentProps, withRouter } from 'react-router-dom';
import React, { ReactNode } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Text } from '@react-md/typography';
import { Form, TextField, Password } from '@react-md/form';
import { Divider } from '@react-md/divider';
import { Button } from '@react-md/button';
import { updateUser } from '../../actions/user';
import { updateTab } from '../../actions/tab';
import '../../common.scss';
import { notify } from 'react-notify-toast';
import Grid from '../layout/grid';
import { AppState } from '../../state';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';

interface PropsFromState {
  setUser: string;
  visible:boolean;
}
interface PropsFromDispatch {
  updateUser: typeof updateUser;
  updateTab: typeof updateTab;
}
type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps;

export type SignUpState = {
  email: string;
  name: string;
  password: string;
  loading: boolean;
};

class SignUp extends React.Component<AllProps, SignUpState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      loading: false,
    };
    console.log(this.state);
  }

  render(): ReactNode {
    return (
      <Dialog
        onClose={() => {
          this.handleCancel();
        }}
        aria-labelledby="Dialog"
        open={this.props.visible}
      >
        <DialogContent className="m-1">
          <Text
            className="m-0"
            type="headline-4"
            align="left"
            color="theme-primary"
          >
            Join Us
          </Text>
          <Divider />
          <Form
            onSubmit={() => {
              this.handleSubmit();
            }}
            className="sign-form"
          >
            <TextField
              id="input-name"
              key="name"
              minLength={4}
              type="text"
              label="Name"
              required
              theme="underline"
              value={this.state.name}
              onChange={(val): void => {
                this.handleChange('name', val.target.value);
              }}
            />
            <TextField
              id="input-email"
              key="email"
              type="email"
              label="Email"
              theme="underline"
              required
              value={this.state.email}
              onChange={(val): void => {
                this.handleChange('email', val.target.value);
              }}
            />
            <Password
              id="password"
              label="Password"
              theme="underline"
              required
              onChange={(val): void => {
                this.handleChange('password', val.target.value);
              }}
              value={this.state.password}
            />
            <Grid
              className="mt-2"
              horizontal="center"
              vertical="middle"
              columns={2}
              rows={1}
              gap={1}
              fullWidth={false}
              fullHeight={false}
            >
              <Button
                className="t-white"
                themeType="contained"
                theme="primary"
                type="submit"
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  this.handleCancel();
                }}
                themeType="contained"
                theme="error"
                type="reset"
              >
                Cancel
              </Button>
            </Grid>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }

  handleCancel(): void {
    this.props.updateTab('MAIN_CONTENT');
    this.setState({
      name: '',
      email: '',
      password: ''
    });

  }

  handleSubmit(): void {
    axios
      .post(this.props.setUser, {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
      .then(response => {
        notify.show('User Created', 'success', 4000);
        if (response.data.authToken) this.props.updateUser(response.data);
      });
  }

  handleChange(type: string, val: string): void {
    switch (type) {
      case 'name':
        this.setState({ name: val });
        break;
      case 'email':
        this.setState({ email: val });
        break;
      case 'password':
        this.setState({ password: val });
        break;
    }
  }
}

const mapStateToProps = ({ api, tab }: AppState) => ({
  setUser: api.setUser,
});

const mapDispatchToProps = {
  updateUser,
  updateTab
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
