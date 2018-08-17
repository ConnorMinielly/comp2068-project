import styled from 'styled-components';
import { Card, Modal } from 'antd';
import genGradient from '../../global/gradientStringGenerator';

const Background = styled.div`
  min-height: calc(100vh - 8vw);
  height: fit-content(100%);
  background: #001529;
  line-height: 1;
`;

export default Background;

export const Cardbox = styled.div`
  padding: 3vw;
  margin-top: -4vh;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const GradientView = styled.div`
  height: 20vh;
  background: ${({ colors, direction }) => genGradient(colors, direction)};
`;

export const GradientCard = styled(Card)`
  width: 15vw;
  margin-top: 3vh;
  .ant-card-meta-title {
    color: #001529;
    font-family: Nunito, sans-serif;
  }
`;

export const ShowModal = styled(Modal)`
  .ant-modal-content {
    background: ${({ colors, direction }) =>
      colors !== undefined && genGradient(colors, direction)};
  }
  .ant-modal-footer {
    border: none;
    height: 1px;
    padding: 0;
    margin: 0;
  }

  .GradientForm {
    padding: 2vw 1vw 0vw 0vw;
  }
`;
