import React, { Component } from 'react';
import styled from 'styled-components';
import SlotLogo from './slot.png';

const Slotter = styled.img`
    width: 70%;
    max-width: 50rem;
    text-align: cetner;
    margin-top: 4rem;
    margin-left: 2rem;

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

export default class Slot extends Component {
  render() {
    return (
      <Slotter src={SlotLogo} alt="slot" />
    );
  }
}
