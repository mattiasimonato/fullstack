import React, { Component } from 'react';
import './App.css';

import List from './list';
import Form from './form';


class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
