import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';

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
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
