import React, { Component } from 'react';
import Background, { Nav, Foot } from './GradientList/GradientListStyles';

class GradientList extends Component {
  scrollDown = (to) => {
    this.parallax.scrollTo(to);
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Background>
          <Foot />
        </Background>
      </React.Fragment>
    );
  }
}

export default GradientList;
