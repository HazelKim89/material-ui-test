import React, { Component } from 'react';
import './App.css';
import { Container, Section , SideNav, SideNavItem, Row, Col } from 'react-materialize'
import 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Container>
            <SideNav>
              <SideNavItem>
                SideNav-fixed
            </SideNavItem>
            </SideNav>
          </Container>
        </header>
        <main>
          <Section className="no-pad-bot">
            <Container >
              <h1 className="header">Header</h1>
            </Container>
          </Section>
        </main>
      </div>
    );
  }
}

export default App;
