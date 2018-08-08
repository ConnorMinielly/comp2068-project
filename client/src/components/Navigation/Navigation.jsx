import React, { Component } from 'react';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import StyledMenu, { StyledMenuItem as MenuItem } from './NavigationStyle';

class Navigation extends Component {
  handleRoute = (route) => {
    const { history } = this.props;
    history.push(route);
  };

  render() {
    return (
      <header>
        <StyledMenu selectedKeys={[String(this.props.currentTab)]} mode="horizontal">
          <MenuItem key="0" onClick={() => this.handleRoute('/')}>
            <Icon type="star" />
            Home
          </MenuItem>
          <MenuItem key="1" onClick={() => this.handleRoute('/gradients/new')}>
            <Icon type="plus-circle" />
            New Gradient
          </MenuItem>
          <MenuItem key="2" onClick={() => this.handleRoute('/gradients')}>
            <Icon type="appstore" />
            Check Bucket
          </MenuItem>
        </StyledMenu>
      </header>
    );
  }
}

export default withRouter(Navigation);
