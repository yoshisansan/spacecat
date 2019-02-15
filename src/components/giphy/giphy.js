import React, { Component } from 'react';
import styled from 'styled-components';
import Neko from './spacecat.jpg';

const Img = styled.img`
    width: 100%;
    border: solid 1.3rem #000;
    border-radius: 3rem;

    @media only screen and (max-width: 1026px)  {
      img {

      }
    }
`

export default class Giphy extends Component {
  render() {
    return (
        <Img src={Neko} alt="宇宙猫" />
    );
  }
}
