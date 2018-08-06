import styled from 'styled-components';
import { Card } from 'antd';
import genGradient from '../../global/gradientStringGenerator';

const Background = styled.div`
  height: calc(100vh - 8vw);
  background: #001529;
  line-height: 1;
`;

export default Background;

export const Cardbox = styled.div`
  padding: 3vw;
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
  .ant-card-meta-title {
    color: #001529;
    font-family: Nunito, sans-serif;
  }
`;
