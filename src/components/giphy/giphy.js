import React, { Component } from 'react';
import styled from 'styled-components';

import Getgif from './Getgif';

import Neko from './spacecat.jpg';

// import axios from 'axios';


const Img = styled.img`
    width: 100%;
    border: solid 1.3rem #000;
    border-radius: 3rem;

    @media only screen and (min-width: 1278px)  {
      width: 80%;
    }
`

export default class Giphy extends Component {
  render() {
    return (
      <div>
        <Getgif />
      </div>
    );
  }
}
