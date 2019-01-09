import React, { Component } from 'react';
import './App.css';
import { Container, Section , SideNav, SideNavItem, Row, Col, Button } from 'react-materialize'
import 'react-materialize'
import TestCompo from './Test.js'
import MainCompo from './MainMovement.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCompo />
      </div>
    );
  }
}



export default App;
