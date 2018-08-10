import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import FormItem, {
  Background,
  AmazingForm as Form,
  Submit,
  Line,
  ColorSelect,
  GradientView,
} from './GradientNew/GradientNewStyle';
import FormTemplate from '../components/FormTemplate/FormTemplate';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

class GradientNew extends Component {
  state = {
    colors: [],
    direction: '',
  };

  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((errors, values) => {
      if (!errors) {
        console.log('Received values of form: ', values);
        axios
          .post('/gradients_api', { values })
          .then(() => this.props.history.push('/gradients'))
          .catch(() => message.error('Creation Failed!'));
      } else console.log(errors);
    });
  };

  handleColorChange = (val) => {
    this.setState({ colors: val });
  };

  handleDirectionChange = (val) => {
    this.setState({ direction: val });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { handleSubmit, handleColorChange, handleDirectionChange } = this;
    return (
      <React.Fragment>
        <Navigation currentTab={1} />
        <Background>
          <Row>
            <Col span={14}>
              <FormTemplate
                components={{
                  FormItem,
                  Background,
                  Form,
                  Submit,
                  Line,
                  ColorSelect,
                }}
                actions={{ handleSubmit, handleColorChange, handleDirectionChange }}
              />
            </Col>
            <Col span={10}>
              <GradientView direction={this.state.direction} colors={this.state.colors} />
            </Col>
          </Row>
        </Background>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Form.create()(GradientNew));
