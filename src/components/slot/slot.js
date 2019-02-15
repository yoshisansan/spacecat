import React, { Component } from 'react';
import styled from 'styled-components';
import SlotLogo from './slot.png';

const Slotter = styled.img`
    width: 80%;
    margin-top: 5rem;
    padding-left: 5rem;
`

export default class Slot extends Component {
  render() {
    return (
      <Slotter src={SlotLogo} alt="slot" />
    );
  }
}
