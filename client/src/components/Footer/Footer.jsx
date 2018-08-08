import React from 'react';
import { Icon } from 'antd';
import MadeBy, { Background } from './FooterStyle';

const Footer = () => (
  <Background>
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
  </Background>
);

export default Footer;
