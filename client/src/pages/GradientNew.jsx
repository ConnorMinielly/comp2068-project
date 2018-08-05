import React, { Component } from 'react';
import { Input, Button } from 'antd';
import FormItem, {
  Background,
  AmazingForm as Form,
  Submit,
  Line,
  ColorSelect,
} from './GradientNew/GradientNewStyle';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

class GradientNew extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  scrollDown = (to) => {
    this.parallax.scrollTo(to);
  };

  validateColors = (rule, value, callback) => {
    if (!value.every(val => /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(val))) callback(new Error());
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Navigation currentTab={1} />
        <Background>
          <Form onSubmit={this.handleSubmit} layout="horizontal">
            <FormItem label="Name" colon={false} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
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
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
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
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
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
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
            >
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: 'Please Describe This Wonderful Creation.',
                  },
                ],
              })(
                <Input placeholder="E.G. I was walking in the autumn woods three years ago when..." />,
              )}
            </FormItem>
            <Line />
            <FormItem label="Colors" colon={false} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              {getFieldDecorator('colors', {
                rules: [
                  {
                    required: true,
                    message: 'Please Enter Only Valid Hex Codes!',
                    validator: this.validateColors,
                  },
                ],
              })(
                <ColorSelect
                  mode="tags"
                  style={{ width: '100%' }}
                  onChange={this.handleColorSelect}
                  tokenSeparators={[',']}
                  dropdownStyle={{ visibility: 'hidden' }}
                />,
              )}
            </FormItem>
            <FormItem wrapperCol={{ span: 14, offset: 4 }}>
              <Submit type="primary" htmlType="submit">
                Create Gradient
              </Submit>
            </FormItem>
          </Form>
        </Background>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Form.create()(GradientNew);
