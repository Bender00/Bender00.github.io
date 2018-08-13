import React, { Component } from 'react';
// import './App.scss';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
