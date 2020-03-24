/* eslint-disable no-invalid-this */
import { Button } from '@react-md/button';
import { FontIcon } from '@react-md/icon';
import { DropdownMenu } from '@react-md/menu';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { updateTab } from '../../actions/tab';
import '../../common.scss';
import { AppState } from '../../state';
import UserWidget from './userWidget';
export type NavItemMenu = {
  name: string;
  nodes: Array<NavItem>;
};

interface NavItemProps {
  to: string;
  tab: string | 'none';
  children?: ReactNode | NavItemMenu | string | any;
  type: 'Button' | 'User' | 'Menu';
}
interface PropsFromState {
  username: string;
}
interface PropsFromDispatch {
  updateTab: typeof updateTab;
}
type AllProps = NavItemProps &
  PropsFromDispatch &
  PropsFromState &
  RouteComponentProps;

class NavItem extends Component<AllProps, never> {
  constructor(props: AllProps) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case 'Button':
        return (
          <Button
            className={
              this.props.tab != 'none'
                ? 'm-1 d-block nav-subButton'
                : 'nav-button'
            }
            theme="clear"
            themeType="flat"
            onClick={(): void => {
              this.props.history.push(this.props.to);
              if (this.props.tab != 'none') this.props.updateTab(this.props.tab);
            }}
          >
            {this.props.children + this.props.tab}
          </Button>
        );
      case 'User':
            return <UserWidget></UserWidget>
      case 'Menu':
        if (this.props.children)
          return (
            <DropdownMenu
              id={`position-right-center-${this.props.to}`}
              key={'center'}
              anchor={{
                x: 'right',
                y: 'center'
              }}
              items={this.props.children.nodes}
              menuLabel={this.props.children.name}
              theme="clear"
              themeType="flat"
              dropdownIcon={<FontIcon>arrow_drop_down</FontIcon>}
              className="drop-down-button"
            >
              <span className="span-dropdown">{this.props.children.name}</span>
            </DropdownMenu>
          );
        else return 'Menu Invalido';
    }
  }
}

const mapStateToProps = ({ user }: AppState) => ({
  username: user.name
});

const mapDispatchToProps = {
  updateTab
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavItem)
);
