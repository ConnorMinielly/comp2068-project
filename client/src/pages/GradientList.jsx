import React, { Component } from 'react';
import axios from 'axios';
import Background, { Cardbox } from './GradientList/GradientListStyles';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import CardTemplate from './GradientList/GradientTemplate';

class GradientList extends Component {
  state = {
    gradients: [],
  };

  componentDidMount = () => {
    this.updateList();
  };

  updateList = () => {
    axios.get('/gradients_api').then((res) => {
      console.log(res);
      this.setState({ gradients: res.data });
    });
  };

  handleDelete = (id) => {
    axios.post(`/gradients_api/${id}/delete`).then(() => this.updateList());
  };

  render() {
    return (
      <React.Fragment>
        <Navigation currentTab={2} />
        <Background>
          <Cardbox>
            {this.state.gradients.map(gradient => (
              <CardTemplate
                key={gradient._id}
                gradient={gradient}
                handleDelete={this.handleDelete}
              />
            ))}
          </Cardbox>
        </Background>
        <Footer />
      </React.Fragment>
    );
  }
}

export default GradientList;
