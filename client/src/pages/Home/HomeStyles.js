import styled from 'styled-components';
import { Parallax } from 'react-spring';

const Background = styled(Parallax.Layer)`
  height: 100vh;
  width: 100vw;
  background: ${({ offset }) => (offset === 0 ? 'linear-gradient(to right, #8a2387, #e94057, #f27121);' : '#001529;')}
  line-height: 1;
`;

export default Background;

export const Title = styled.h1`
  text-align: center;
  font-size: 6vw;
  font-family: Nunito, sans-serif;
  font-weight: bold;
  color: #fbfbfa;
  margin: 0;
  margin-top: 10vh;
`;

export const Line = styled.hr`
  border: 4px solid #fbfbfa;
  border-radius: 4px;
  width: 40vw;
`;

export const SubTitle = styled.h2`
  font-family: Nunito, sans-serif;
  font-size: 2vw;
  color: #fbfbfa;
  text-align: center;
`;

export const SwingingBucket = styled.img`
  display: block;
  height: 30vh;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  animation-name: swinging;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 5s;

  @keyframes swinging {
    0% {
      transform: translate(0%, 0%) rotate(2deg);
    }
    25% {
      transform: translate(5%, 0%) rotate(-5deg);
    }
    50% {
      transform: translate(-5%, 0%) rotate(4deg);
    }
    75% {
      transform: translate(5%, 0%) rotate(-5deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(2deg);
    }
  }
`;

export const FloatingBucket = styled.img`
  display: block;
  height: 25vh;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  animation-name: floating;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 5s;
  animation-delay: ${() => Math.floor(Math.random() * -10 - 1)}s;

  @keyframes floating {
    0% {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(0%, 5%);
    }
    50% {
      transform: translate(0%, -5%);
    }
    75% {
      transform: translate(0%, 5%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
`;

export const ButtonText = styled.p`
  margin-top: 1vh;
  font-size: 2em;
  color: #fbfbfa;
  text-align: center;
`;
