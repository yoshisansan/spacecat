import React, { Component } from 'react';

import Header from './components/Header/Header';
import Getgif from './components/Giphy/Giphy';
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

  @media only screen and (max-width: 768px)  {
    width: 70%;
  }
`
const Button = styled.button`

  margin-bottom: ${props => props.AdjustBottom === "ON" ? '19rem' : '0'};

  width: 70%;
  max-width: 50rem;
  text-align: cetner;
  margin-top: 4rem;
  margin-left: 2rem;
  cursor: pointer;
  background-color: #343d46;
  border: none;

  @media only screen and (max-width: 323px) {
    margin-left: 1rem;
    width: 22rem;
  }

  @media only screen and (min-widht: 324px) and (max-width: 767px) {
    width: 26rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 35rem;
  }
`

const SwitchType = ["ON","STOP"];
let SwitchCount = 0;
// 時間が余ったらGiphyのところをマリオカートのハテナボックスみたいにしたい

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { spaceCat: [],
        slotSwitch: [],
        ShareDisplay: []
    };
  }
  getSwitch = event => {
    if(SwitchCount > 1){
      SwitchCount = 0;
    }
    this.setState({slotSwitch: SwitchType[SwitchCount]});
    console.log(SwitchType[SwitchCount]);
    SwitchCount++;
  }

  render() {

    return(
    <React.Fragment>
      <Wrapper>
        <Header />
        <Getgif slotSwitch={this.state.slotSwitch}/>
        <Button onClick={this.getSwitch} AdjustBottom={this.state.slotSwitch}>
          <Slot />
        </Button>
        <Twitter ShareDisplay = {this.state.slotSwitch} />
        <Hukidashi />
      </Wrapper>
        <Footer />
    </React.Fragment>
    );
  }
}


export default App;
