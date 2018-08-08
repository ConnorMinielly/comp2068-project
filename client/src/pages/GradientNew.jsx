import React, { Component } from 'react';
import {
  Input, Row, Col, Select, message,
} from 'antd';
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
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

class GradientNew extends Component {
  state = {
    colors: [],
    direction: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        console.log('Received values of form: ', values);
        axios
          .post('/gradients_api', { values })
          .then(() => this.props.history.push('/gradients'))
          .catch(() => message.error('Creation Failed!'));
      } else console.log(errors);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Navigation currentTab={1} />
        <Background>
          <Row>
            <Col span={14}>
              <Form onSubmit={this.handleSubmit} layout="horizontal">
                <FormItem
                  label="Name"
                  colon={false}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                >
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: 'Please Enter A Name For The Gradient.',
                      },
                    ],
                  })(<Input placeholder="E.G. Fatuous Lazers" />)}
                </FormItem>
                <FormItem
                  label="Creator"
                  colon={false}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                >
                  {getFieldDecorator('creator', {
                    rules: [
                      {
                        required: true,
                        message: 'Please Enter Identify Yourself, Great Creator!',
                      },
                    ],
                  })(<Input placeholder="E.G. Bill Clinton" />)}
                </FormItem>
                <FormItem
                  label="Use Case"
                  colon={false}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                >
                  {getFieldDecorator('usecase', {
                    rules: [
                      {
                        required: true,
                        message: 'What Should This Gradient Be Used For?',
                      },
                    ],
                  })(<Input placeholder="E.G. Its for houses!" />)}
                </FormItem>
                <FormItem
                  label="Description"
                  colon={false}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                >
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'Please Describe This Wonderful Creation.',
                      },
                    ],
                  })(
                    <Input.TextArea
                      placeholder="E.G. I was walking in the autumn woods three years ago when..."
                      autosize={{ minRows: 1, maxRows: 5 }}
                    />,
                  )}
                </FormItem>
                <Line />
                <FormItem
                  label="Colors"
                  colon={false}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                >
                  {getFieldDecorator('colors', {
                    rules: [
                      {
                        required: true,
                        message: 'Please Enter Only Valid Hex Codes!',
                        pattern: /^(#(?:[0-9a-fA-F]{3}){1,2},?)(#(?:[0-9a-fA-F]{3}){1,2},?)*$/i,
                      },
                    ],
                  })(
                    <ColorSelect
                      maxTagCount={4}
                      placeholder="#FFFFFF"
                      mode="tags"
                      style={{ width: '100%' }}
                      tokenSeparators={[',']}
                      dropdownStyle={{ visibility: 'hidden' }}
                      onChange={e => this.setState({ colors: e })}
                    />,
                  )}
                </FormItem>
                <FormItem
                  label="Direction"
                  colon={false}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                >
                  {getFieldDecorator('direction', {
                    rules: [
                      {
                        required: true,
                        message: 'Please Select a Direction!',
                      },
                    ],
                  })(
                    <Select
                      initialValue="right"
                      placeholder="Right"
                      onChange={value => this.setState({ direction: value })}
                    >
                      <Select.Option value="right">
Right
                      </Select.Option>
                      <Select.Option value="left">
Left
                      </Select.Option>
                      <Select.Option value="top">
Top
                      </Select.Option>
                      <Select.Option value="bottom">
Bottom
                      </Select.Option>
                    </Select>,
                  )}
                </FormItem>
                <FormItem wrapperCol={{ span: 19, offset: 5 }}>
                  <Submit type="primary" htmlType="submit">
                    Create Gradient
                  </Submit>
                </FormItem>
              </Form>
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
