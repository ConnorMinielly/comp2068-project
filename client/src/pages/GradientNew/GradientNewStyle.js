import styled from 'styled-components';
import {
  Form, Input, Button, Select,
} from 'antd';

export const AmazingForm = styled(Form)`
  padding: 5vw;
`;

export const Background = styled.div`
  min-height: calc(100vh - 8vw);
  height: fit-content(100%);
  background: #001529;
  line-height: 1;
`;

const FormItem = styled(Form.Item)`
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

export default FormItem;

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
  border: 3px solid #fbfbfa;
  border-color: linear-gradient(to right, #8a2387, #e94057, #f27121);
  border-radius: 3px;
  width: 50vw;
  text-align: left;
  margin: 0 0 3vh 16.7%;
`;

export const ColorSelect = styled(Select)`
  &&& .hide {
    visibility: hidden !important;
  }
`;
