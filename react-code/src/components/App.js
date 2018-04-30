import React, { Component } from 'react';
import Navbar from './Navbar';
import Image from '../Image.png';
// import logo from '../logo.svg';
// import '../App.css';

class App extends Component {
  render() {
    return (
      <Navbar Image={Image} />
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
