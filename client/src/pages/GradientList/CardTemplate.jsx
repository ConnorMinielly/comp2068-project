import React from 'react';
import { Icon, Popconfirm, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { GradientView, GradientCard as Card } from './GradientListStyles';
import genGradient from '../../global/gradientStringGenerator';

const CardTemplate = (props) => {
  const {
    gradient, handleGradientClick, handleShow, handleEdit,
  } = props;
  message.config({
    top: '10%',
    maxCount: 1,
    duration: 1,
  });
  return (
    <Card
      cover={(
        <CopyToClipboard
          text={genGradient(gradient.gradientSpecs.colors, gradient.gradientSpecs.direction)}
          onCopy={() => message.success('Gradient CSS Copied To Clipboard!')}
        >
          <GradientView
            colors={gradient.gradientSpecs.colors}
            direction={gradient.gradientSpecs.direction}
            onClick={handleGradientClick}
            style={{ cursor: 'pointer' }}
          />
        </CopyToClipboard>
)}
      actions={[
        <Icon type="eye-o" onClick={() => handleShow(gradient)} />,
        <Icon type="edit" onClick={() => handleEdit(gradient)} />,
        <Popconfirm
          placement="bottom"
          title="Are You Sure You Want To Delete This?"
          onConfirm={() => props.handleDelete(gradient._id)}
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
};

export default CardTemplate;
