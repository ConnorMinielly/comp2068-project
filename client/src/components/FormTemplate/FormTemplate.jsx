import React from 'react';
import { Form as AntForm, Input, Select } from 'antd';

const FormTemplate = (props) => {
  const { getFieldDecorator } = props.form;
  const {
    FormItem, Form, Submit, Line, ColorSelect,
  } = props.components;
  const { handleSubmit, handleColorChange, handleDirectionChange } = props.actions;

  return (
    <React.Fragment>
      <Form onSubmit={e => handleSubmit(e, props.form)} layout="horizontal">
        <FormItem label="Name" colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please Enter A Name For The Gradient.',
              },
            ],
          })(<Input placeholder="E.G. Fatuous Lazers" />)}
        </FormItem>
        <FormItem label="Creator" colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
          {getFieldDecorator('creator', {
            rules: [
              {
                required: true,
                message: 'Please Enter Identify Yourself, Great Creator!',
              },
            ],
          })(<Input placeholder="E.G. Bill Clinton" />)}
        </FormItem>
        <FormItem label="Use Case" colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
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
        <FormItem label="Colors" colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
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
              onChange={val => handleColorChange && handleColorChange(val)}
            />,
          )}
        </FormItem>
        <FormItem label="Direction" colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
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
              onChange={val => handleDirectionChange && handleDirectionChange(val)}
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
    </React.Fragment>
  );
};

export default AntForm.create()(FormTemplate);
