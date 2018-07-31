import React, { Component } from 'react';
import { Icon } from 'antd';

class Navigation extends Component {
  state = {
    tmp: 'thing',
  };

  render() {
    const { tmp } = this.state;
    return (
      <div>
        <h1>
          <Icon type="smile" />
          PAGE CONTENT WEEEEE!
          {tmp}
        </h1>
      </div>
    );
  }
}

export default Navigation;
