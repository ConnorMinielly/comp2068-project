import React from 'react';
import { Input, Select, Tag } from 'antd';
import AmazingForm, {
  FormItem, Submit, Line, ColorSelect,
} from './FormTemplateStyles';

class FormTemplate extends React.Component {
  state = {
    show: this.props.show,
    edit: this.props.edit,
  };

  render() {
    const { currentGradient, formLayout } = this.props;
    const { show, edit } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { handleSubmit, handleColorChange, handleDirectionChange } = this.props.actions;
    return (
      <React.Fragment>
        <AmazingForm
          className="GradientForm"
          onSubmit={e => handleSubmit(e, this.props.form)}
          layout="horizontal"
        >
          <FormItem label="Name" colon={false} {...formLayout}>
            {!show ? (
              getFieldDecorator('name', {
                initialValue: edit ? currentGradient.name : '',
                rules: [
                  {
                    required: true,
                    message: 'Please Enter A Name For The Gradient.',
                  },
                ],
              })(<Input placeholder="E.G. Fatuous Lazers" />)
            ) : (
              <Input readOnly value={currentGradient.name} />
            )}
          </FormItem>
          <FormItem label="Creator" colon={false} {...formLayout}>
            {!show ? (
              getFieldDecorator('creator', {
                initialValue: edit ? currentGradient.creator : '',
                rules: [
                  {
                    required: true,
                    message: 'Please Enter Identify Yourself, Great Creator!',
                  },
                ],
              })(<Input placeholder="E.G. Bill Clinton" />)
            ) : (
              <Input readOnly value={currentGradient.creator} />
            )}
          </FormItem>
          <FormItem label="Use Case" colon={false} {...formLayout}>
            {!show ? (
              getFieldDecorator('usecase', {
                initialValue: edit ? currentGradient.usecase : '',
                rules: [
                  {
                    required: true,
                    message: 'What Should This Gradient Be Used For?',
                  },
                ],
              })(<Input placeholder="E.G. Its for houses!" />)
            ) : (
              <Input readOnly value={currentGradient.usecase} />
            )}
          </FormItem>
          <FormItem label="Description" colon={false} {...formLayout}>
            {!show ? (
              getFieldDecorator('description', {
                initialValue: edit ? currentGradient.description : '',
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
              )
            ) : (
              <Input.TextArea
                readOnly
                autosize={{ minRows: 1, maxRows: 5 }}
                value={currentGradient.description}
              />
            )}
          </FormItem>
          {!show && !edit && <Line />}
          <FormItem label="Colors" colon={false} {...formLayout}>
            {!show
              ? getFieldDecorator('colors', {
                initialValue: edit ? currentGradient.gradientSpecs.colors : [],
                rules: [
                  {
                    required: true,
                    message: 'Please Enter At Least 2 Valid Hex Codes!',
                    pattern: /^(#(?:[0-9a-fA-F]{3}){1,2},?)(#(?:[0-9a-fA-F]{3}){1,2},?)+$/i,
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
              )
              : currentGradient.gradientSpecs.colors.map(color => (
                <Tag color={color}>
                  {color}
                </Tag>
              ))}
          </FormItem>
          <FormItem label="Direction" colon={false} {...formLayout}>
            {!show ? (
              getFieldDecorator('direction', {
                initialValue: edit ? currentGradient.gradientSpecs.direction : 'right',
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
                  defaultActiveFirstOption
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
              )
            ) : (
              <Tag>
                {currentGradient.gradientSpecs.direction}
              </Tag>
            )}
          </FormItem>
          {!show && (
            <FormItem
              wrapperCol={{ span: formLayout.wrapperCol.span, offset: formLayout.labelCol.span }}
            >
              <Submit type="primary" htmlType="submit">
                {edit ? 'Update Gradient' : 'Create Gradient' }
              </Submit>
            </FormItem>
          )}
        </AmazingForm>
      </React.Fragment>
    );
  }
}

export default AmazingForm.create()(FormTemplate);
