import { Menu } from 'antd';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  font-size: 1.5vw;
  height: 4vw;
  line-height: 4vw;
  &&&&& .ant-menu-item-selected {
    background: linear-gradient(to bottom, #c33764, #1d2671);
    border: none;
    color: #fbfbfa;
    &:hover {
      -webkit-text-fill-color: #fbfbfa;
    }
  }

  &&& .ant-menu-item {
    border: none;
    transition: none;
  }

  .ant-menu-item:hover {
    border: none;
    transition: none;
    background: linear-gradient(to right, #c33764, #1d2671);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default StyledMenu;

export const StyledMenuItem = styled(Menu.Item)``;
