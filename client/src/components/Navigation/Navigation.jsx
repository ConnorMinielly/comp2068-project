import React, { Component } from 'react';
import { Icon } from 'antd';
import StyledIcon, { StyledMenu as Menu, StyledMenuItem as MenuItem } from './NavigationStyle';

class Navigation extends Component {
  state = {
    currentTab: '1',
  };

  handleClick = (e) => {
    this.setState({ currentTab: e.key });
  };

  render() {
    const { currentTab } = this.state;
    return (
      <header>
        <div>
          <StyledIcon type="star" />
        </div>
        <Menu theme="dark" selectedKeys={[currentTab]} mode="horizontal" onClick={this.handleClick}>
          <MenuItem key="1">
            <span className="gradient-font">
              <Icon type="home" />
              Home
            </span>
          </MenuItem>
          <MenuItem key="2">
            <span className="gradient-font">
              <Icon type="smile" />
              Smile
            </span>
          </MenuItem>
        </Menu>
      </header>
    );
  }
}

export default Navigation;
