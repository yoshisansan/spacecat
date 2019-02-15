import React, { Component } from 'react';
import styled from 'styled-components';

const TwitterBtn = styled.p`
      text-align: center;
      margin-top: 8rem;
      background-color: #55acee;
      height: 7rem;
      width: 40rem;
      color: #fff;
      line-height: 7rem;
      border-radius: 2rem;
      justify-content: center;
      letter-spacing: 0.2rem;
      font-size: 3.5rem;
      display:inline-block;

      span {
        padding-right: 0.8rem;
      }
`

export default class Twitter extends Component {
  render() {
    return (
      <TwitterBtn><span className="fab fa-twitter"></span>宇宙猫を解放する</TwitterBtn>
    );
  }
}
