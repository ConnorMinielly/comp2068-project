import React, { Component } from 'react';
import {
  Form, Row, Col, message,
} from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Background, GradientView } from './GradientNew/GradientNewStyle';
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
    const formLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
    return (
      <React.Fragment>
        <Navigation currentTab={1} />
        <Background>
          <Row>
            <Col span={14}>
              <FormTemplate
                actions={{ handleSubmit, handleColorChange, handleDirectionChange }}
                formLayout={formLayout}
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
