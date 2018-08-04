import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import GradientList from './pages/GradientList';

class App extends Component {
  state = { message: '' };

  componentDidMount() {
    // axios.get('/api/message').then((res) => {
    //   this.setState({ message: res.data.message });
    // });
  }

  render() {
    const { message } = this.state;
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gradients" exact component={GradientList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
