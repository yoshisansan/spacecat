import React, { Component } from 'react';
import styled from 'styled-components';

const TwitterBtn = styled.div`

    text-align: center;
    margin: 0 auto;
    margin-top: 8rem;
    width: 60%;


      p {
        background-color: #55acee;
        height: 7rem;
        color: #fff;
        line-height: 7rem;
        border-radius: 2rem;
        justify-content: center;
        letter-spacing: 0.2rem;
        font-size: 3.5rem;
        display:inline-block;
        padding: 0 1rem;
        white-space:nowrap;
      }

      span {
        padding-right: 0.8rem;
      }

      @media only screen and (max-width: 1024px)  {
        p {
          font-size: 2rem;
          white-space:nowrap;
        }

      }



`

export default class Twitter extends Component {
  render() {
    return (
      <TwitterBtn><p><span className="fab fa-twitter"></span>宇宙猫を解放する</p></TwitterBtn>
    );
  }
}
