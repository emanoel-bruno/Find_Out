import { withRouter } from 'react-router-dom';
import React, { ReactNode } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, CardContent } from '@react-md/card';
import { Text } from '@react-md/typography';
import { Form, TextField, Password } from '@react-md/form';
import { Divider } from '@react-md/divider';
import { Button } from '@react-md/button';
import { updateUser } from '../../actions/user';
import '../../common.scss';
import { notify } from 'react-notify-toast';
import Grid from '../layout/grid';
import { AppState } from '../../state';

interface PropsFromState {
  setUser: string;
}
interface PropsFromDispatch {
  updateUser: typeof updateUser;
}
type AllProps = PropsFromState & PropsFromDispatch;

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
      loading: false
    };
  }

  render(): ReactNode {
    return (
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
    );
  }

  handleCancel(): void {
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
        console.log(JSON.stringify(response));
        notify.show('User Created', 'success', 4000);
        this.props.updateUser(response.data);
      })
      .catch(error => {
        console.log(error);
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

const mapStateToProps = ({ api }: AppState) => ({
  setUser: api.setUser
});

const mapDispatchToProps = {
  updateUser
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
