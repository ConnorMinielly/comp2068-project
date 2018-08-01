import { Icon, Menu } from 'antd';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
  position: relative;
  font-size: 5vw;
  float: left;
  line-height: 5vw;
  padding-left: 2vw;
  background: linear-gradient(to left, #12c2e9, #c471ed, #f64f59);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export default StyledIcon;

export const StyledMenu = styled(Menu)`
  font-size: 2vw;
  height: 6vw;
  padding-left: 10vw;
  line-height: 6vw;
  &&&&& .ant-menu-item-selected {
    background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
    .gradient-font {
      background: linear-gradient(to left, #0f2027, #203a43, #2c5364);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &:hover {
    border-bottom: 2px solid linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
  }
`;

export const StyledMenuItem = styled(Menu.Item)``;
