import React, { Component } from 'react';
import axios from 'axios';
import Background from './GradientList/GradientListStyles';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

class GradientList extends Component {
  state = {
    gradients: [],
  };

  componentDidMount = () => {
    axios.get('/api/').then((res) => {
      console.log(res.data);
      // this.setState({gradients: res.data});
    });
  };

  scrollDown = (to) => {
    this.parallax.scrollTo(to);
  };

  render() {
    return (
      <React.Fragment>
        <Navigation currentTab={2} />
        <Background />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GradientList;
