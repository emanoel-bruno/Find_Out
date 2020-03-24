import React, {Component} from 'react';
import {TabState, AppState}  from '../../state';
import { updateTab } from '../../actions/tab';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {Button} from '@react-md/button'
import Grid from './grid';
import { Text } from '@react-md/typography';
import { Avatar } from '@react-md/avatar';
import scssVariables from '@react-md/avatar/dist/scssVariables';

interface PropsFromState{
    tab:TabState;
    username:string;
}

interface PropsFromDispatch {
updateTab: typeof updateTab;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps;

class UserWidget extends Component<AllProps, never>{
    COLORS: string[];
    color: any;
    constructor(props:AllProps){
        super(props);
        this.COLORS = Object.keys(scssVariables['rmd-avatar-colors']);
        this.color = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
    }
    render(){
        if (this.props.username)
          return (
            <Grid
              horizontal="center"
              vertical="middle"
              rows={3}
              columns={1}
              gap={1}
              itemsHorizontal="center"
              itemsVertical="middle"
              fullHeight={true}
            >
              <Avatar color={this.color} key="username">
                {this.props.username.trimLeft().charAt(0)}
              </Avatar>
              <Text transform="capitalize" weight="medium">
                {this.props.username}
              </Text>
              <Button
                className="t-thite"
                theme="warning"
                themeType="flat"
                onClick={(): void => {
                  this.props.history.push('/home');
                }}
              >
                Logout
              </Button>
            </Grid>
          );
        else
          return (
            <Grid
              className="space-between"
              horizontal="center"
              vertical="middle"
              columns={2}
              rows={1}
            >
              <Button
                theme="clear"
                themeType="flat"
                onClick={(): void => {
                  this.props.updateTab('LOGIN_DIALOG');
                }}
              >
                Login
              </Button>
              <Button
                theme="clear"
                themeType="flat"
                onClick={(): void => {
                  this.props.updateTab('SIGN_DIALOG');
                }}
              >
                Sign In
              </Button>
            </Grid>
          );
    }
}

const mapStateToProps = ({ user, tab }: AppState) => ({
    tab: tab,
    username: user.name
});


const mapDispatchToProps = {
    updateTab
  };
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserWidget)
  );
