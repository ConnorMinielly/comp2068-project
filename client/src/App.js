import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import ReactImage from './react.png';

class App extends Component {
  state = { message: '' };

  componentDidMount() {
    axios.get('/api/message').then((res) => {
      this.setState({ message: res.data.message });
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {message ? (
          <h1>
            Hello
            {<br />}
            {message}
          </h1>
        ) : (
          <h1>
Loading.. please wait! No.
          </h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}

export default App;
