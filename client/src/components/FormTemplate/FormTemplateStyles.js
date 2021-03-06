import styled from 'styled-components';
import { Form, Select } from 'antd';
import genGradient from '../../global/gradientStringGenerator';

export const AmazingForm = styled(Form)`
  padding: 4vw 4vw 3vw 5vw;
`;

export default AmazingForm;

export const FormItem = styled(Form.Item)`
  label {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    color: #fbfbfa;
  }

  .ant-form-item-required::before {
    color: #fbfbfa;
    font-family: Nunito, sans-serif;
    font-size: 2em;
    transform: translateY(0.35em);
    background: linear-gradient(to right, #8a2387, #e94057, #f27121);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Submit = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  color: #fbfbfa;
  border-radius: 5px;
  background: linear-gradient(to right, #8a2387, #e94057, #f27121);
  border: none;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;

export const Line = styled.hr`
  border: none;
  background-image: linear-gradient(to right, #8a2387, #e94057, #f27121);
  height: 4px;
  border-radius: 3px;
  width: 39vw;
  text-align: left;
  margin: 0 0 2% 21%;
`;

export const ColorSelect = styled(Select)`
  &&& .hide {
    visibility: hidden !important;
  }
`;

export const GradientView = styled.div`
  margin-top: 4vw;
  width: 80%;
  height: 400px;
  background: ${({ colors, direction }) => genGradient(colors, direction)};
  border: 4px solid transparent;
  border-image: linear-gradient(to left, #8a2387, #e94057, #f27121) 10% stretch;
`;
