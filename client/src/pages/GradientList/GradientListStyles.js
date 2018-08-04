import styled from 'styled-components';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Background = styled.div`
  height: 100vh;
  background: #001529;
  line-height: 1;
`;

export default Background;

export const Nav = styled(Navigation)`
  & {
    position: sticky;
    top: 0px;
  }
`;

export const Foot = styled(Footer)``;
