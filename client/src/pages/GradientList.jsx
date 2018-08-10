import React, { Component } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import Background, { Cardbox } from './GradientList/GradientListStyles';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import CardTemplate from './GradientList/CardTemplate';
import GradientShow from './GradientList/GradientShow';
import FormItem, {
  AmazingForm as Form,
  Submit,
  Line,
  ColorSelect,
} from './GradientNew/GradientNewStyle';

class GradientList extends Component {
  state = {
    selected: {},
    gradients: [],
    show: false,
  };

  componentDidMount = () => {
    this.updateList();
  };

  showModal = (gradient) => {
    this.setState({ selected: gradient }, () => this.setState({
      show: true,
    }));
  };

  handleOk = (e) => {
    this.setState({
      show: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      show: false,
    });
  };

  updateList = () => {
    axios.get('/gradients_api').then((res) => {
      this.setState({ gradients: res.data });
    });
  };

  handleDelete = (id) => {
    `${host}/`
    axios.post(`/gradients_api/${id}/delete`).then(() => this.updateList());
  };

  handleSubmit = () => {
    console.log('hello');
  };

  render() {
    return (
      <React.Fragment>
        <Navigation currentTab={2} />
        <Background>
          <Modal
            visible={this.state.show}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            cancelButtonProps={{ style: { visibility: 'hidden' } }}
          >
            <GradientShow selected={this.state.selected} />
          </Modal>
          <Cardbox>
            {this.state.gradients.map(gradient => (
              <CardTemplate
                key={gradient._id}
                gradient={gradient}
                handleDelete={this.handleDelete}
                handleShow={this.showModal}
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
