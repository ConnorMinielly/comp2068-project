import React, { Component } from 'react';
import axios from 'axios';
import { message } from 'antd';
import Background, { Cardbox, ShowModal } from './GradientList/GradientListStyles';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import CardTemplate from './GradientList/CardTemplate';
import FormTemplate from '../components/FormTemplate/FormTemplate';

class GradientList extends Component {
  state = {
    selected: {},
    gradients: [],
    show: false,
    editMode: false,
    colors: [],
    direction: '',
  };

  handleColorChange = (val) => {
    this.setState({ colors: val });
  };

  handleDirectionChange = (val) => {
    this.setState({ direction: val });
  };

  componentDidMount = () => {
    this.updateList();
  };

  handleShow = (gradient) => {
    this.setState(
      {
        selected: gradient,
        colors: gradient.gradientSpecs.colors,
        direction: gradient.gradientSpecs.direction,
      },
      () => this.setState({
        show: true,
      }),
    );
  };

  handleCancel = () => {
    this.setState({
      editMode: false,
      show: false,
    });
  };

  updateList = () => {
    axios.get('/gradients_api').then((res) => {
      this.setState({ gradients: res.data });
    });
  };

  handleDelete = (id) => {
    axios.post(`/gradients_api/${id}/delete`).then(() => this.updateList());
  };

  handleEdit = (gradient) => {
    this.setState(
      {
        selected: gradient,
        colors: gradient.gradientSpecs.colors,
        direction: gradient.gradientSpecs.direction,
      },
      () => this.setState({
        editMode: true,
        show: true,
      }),
    );
  };

  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((errors, values) => {
      if (!errors) {
        axios
          .post(`/gradients_api/${this.state.selected._id}`, values)
          .then(() => this.setState(
            {
              editMode: false,
              show: false,
            },
            () => this.updateList(),
          ))
          .catch(() => message.error('Creation Failed!'));
      }
    });
  };

  render() {
    const {
      selected, editMode, colors, direction,
    } = this.state;
    const { handleSubmit, handleColorChange, handleDirectionChange } = this;
    const formLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    return (
      <React.Fragment>
        <Navigation currentTab={2} />
        <Background>
          {selected.gradientSpecs !== undefined && (
            <ShowModal
              visible={this.state.show}
              onCancel={this.handleCancel}
              cancelButtonProps={{ style: { visibility: 'hidden' } }}
              okButtonProps={{ style: { visibility: 'hidden' } }}
              colors={colors}
              direction={direction}
              centered
              destroyOnClose
            >
              <FormTemplate
                edit={editMode}
                show={!editMode}
                currentGradient={selected}
                actions={{ handleSubmit, handleColorChange, handleDirectionChange }}
                formLayout={formLayout}
              />
            </ShowModal>
          )}
          <Cardbox>
            {this.state.gradients.map(gradient => (
              <CardTemplate
                key={gradient._id}
                gradient={gradient}
                handleDelete={this.handleDelete}
                handleShow={this.handleShow}
                handleEdit={this.handleEdit}
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
