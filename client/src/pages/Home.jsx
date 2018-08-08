import React, { Component } from 'react';
import { Parallax } from 'react-spring';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Background, {
  Title,
  SubTitle,
  SwingingBucket,
  FloatingBucket,
  Line,
  ButtonText,
} from './Home/HomeStyles';
import NewGradient from '../assets/New_Gradient.svg';
import Bucket from '../assets/Gradient_Bucket.svg';
import CheckBucket from '../assets/Check_Bucket.svg';

const Spalsh = ({ offset, scroll }) => (
  <React.Fragment>
    <Background offset={offset} speed={1} factor={2.5} />
    <Parallax.Layer offset={offset} speed={1}>
      <Title>
Gradient Bucket
      </Title>
      <Line />
      <SubTitle>
Click the Bucket To Get The Scoop!
      </SubTitle>
    </Parallax.Layer>
    <Parallax.Layer offset={offset + 0.35} speed={-1}>
      <SwingingBucket src={Bucket} alt="Gradient Bucket" onClick={() => scroll(1)} />
    </Parallax.Layer>
  </React.Fragment>
);

const Main = withRouter(({ offset, handleRoute, history }) => (
  <React.Fragment>
    <Background offset={offset} speed={2} />
    <Parallax.Layer offset={offset} speed={2}>
      <Navigation currentTab={0} />
    </Parallax.Layer>
    <Parallax.Layer offset={offset + 0.2} speed={1}>
      <Row style={{ marginLeft: '15vw', marginRight: '15vw' }}>
        <Col span={12}>
          <FloatingBucket
            src={NewGradient}
            alt="New Gradient"
            onClick={() => handleRoute(history, '/gradients/new')}
          />
          <ButtonText>
Create New Gradient
          </ButtonText>
        </Col>
        <Col span={12}>
          <FloatingBucket
            src={CheckBucket}
            alt="Check Bucket"
            onClick={() => handleRoute(history, '/gradients')}
          />
          <ButtonText>
View Bucketed Gradients
          </ButtonText>
        </Col>
      </Row>
    </Parallax.Layer>
    <Parallax.Layer offset={offset + 0.9} speed={0.5}>
      <Footer />
    </Parallax.Layer>
  </React.Fragment>
));

class Home extends Component {
  scrollDown = (to) => {
    this.parallax.scrollTo(to);
  };

  handleRoute = (history, location) => {
    history.push(location);
  };

  render() {
    return (
      <Parallax scrolling={false} ref={ref => (this.parallax = ref)} pages={2}>
        <Spalsh offset={0} scroll={this.scrollDown} />
        <Main offset={1} handleRoute={this.handleRoute} />
      </Parallax>
    );
  }
}

export default Home;
