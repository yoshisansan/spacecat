/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';

const Neko = styled.img`
    width: 30rem;
    border: solid 1.3rem #000;
    border-radius: 3rem;
`

export default class Giphy extends Component {
  render() {
    return (
        <Neko><img src={require('https://media1.giphy.com/media/RrIdGcnknHD0c/200.webp?cid=3640f6095c60480d6a2e70572e6f0d5c')} alt="宇宙猫" /></Neko>
    );
  }
}
