import React, { Component } from 'react';

import Header from './components/Header/Header';
import Giphy from './components/Giphy/Giphy';
import Slot from './components/Slot/Slot';
import Twitter from './components/Twitter/Twitter';
import Hukidashi from './components/Hukidashi/Hukidashi';
import Footer from './components/Footer/Footer';

import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 60%;
`

// 時間が余ったらGiphyのところをマリオカートのハテナボックスみたいにしたい

class App extends Component {

  render() {

    return(
    <React.Fragment>
      <Wrapper>
        <Header />
        <Giphy />
        <Slot />
        <Twitter />
        <Hukidashi />
      </Wrapper>
        <Footer />
    </React.Fragment>
    );
  }
}


export default App;
