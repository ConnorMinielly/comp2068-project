import React, { Component } from 'react';
import axios from 'axios';
import { Icon, Popconfirm } from 'antd';
import { GradientView, GradientCard as Card } from './GradientListStyles';

class CardTemplate extends Component {
  state = {
    tmp: '',
  };

  render() {
    const { gradient } = this.props;
    return (
      <Card
        cover={(
          <GradientView
            colors={gradient.gradientSpecs.colors}
            direction={gradient.gradientSpecs.direction}
          />
)}
        actions={[
          <Icon type="eye-o" />,
          <Icon type="edit" />,
          <Popconfirm
            placement="bottom"
            title="Are You Sure You Want To Delete This?"
            onConfirm={() => this.props.handleDelete(gradient._id)}
            okText="Yes"
            cancelText="No"
            icon={<Icon type="edit" style={{ color: 'red' }} />}
          >
            <Icon type="delete" />
          </Popconfirm>,
        ]}
      >
        <Card.Meta title={gradient.name} description={gradient.usecase} />
      </Card>
    );
  }
}

export default CardTemplate;
