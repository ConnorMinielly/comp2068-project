import React from 'react';
import { Icon } from 'antd';
import MadeBy from './FooterStyle';

const Footer = () => (
  <div>
    <MadeBy>
      Made With
      {' '}
      <Icon type="heart-o" />
      {' '}
And
      {' '}
      <Icon type="coffee" />
      {' '}
By Connor Minielly
    </MadeBy>
  </div>
);

export default Footer;
