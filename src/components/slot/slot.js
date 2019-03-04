import React, { Component } from 'react';
import styled from 'styled-components';
import SlotOff from './antenaOff.png';
import SlotOn from './antenaOn.png';

const Slotter = styled.img`


  animation: float 2s ease-in-out infinite;


  @keyframes float {
    0% { transform:translateY(0) }
    50% { transform:translateY(-1rem) }
    100% { transform:translateY(0) }
  `



export default class Slot extends Component {

  render() {
    const Slots = this.props.Slots === "ON" ? SlotOn : SlotOff;
    return (
      <Slotter SlotStyle={this.props.Slots} src={Slots} alt="slot" />
    );
  }
}
