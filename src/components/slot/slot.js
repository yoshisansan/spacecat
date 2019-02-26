import React, { Component } from 'react';
import styled from 'styled-components';
import SlotLogo from './slot.png';

const Slotter = styled.img`

`



export default class Slot extends Component {
  render() {
    return (
      <Slotter src={SlotLogo} alt="slot" />
    );
  }
}
