import React, { Component } from 'react';

import Header from './components/Header/Header';
import Giphy from './components/giphy/giphy';

import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 50%;
`

class App extends Component {

  render() {

    return(
      <Wrapper>
        <Header />
        <Giphy />
      </Wrapper>
    );
  }
}


export default App;
