import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import GradientList from './pages/GradientList';
import GradientNew from './pages/GradientNew';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gradients" exact component={GradientList} />
      <Route path="/gradients/new" exact component={GradientNew} />
    </Switch>
  </Layout>
);

export default App;
