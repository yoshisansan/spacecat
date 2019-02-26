import React, { Component } from 'react';
import styled from 'styled-components';

const TwitterBtn = styled.div`

    display: ${props => props.Display === "ON" ? 'none' : 'inline-block'};
    // display: ${props => props.Display === "ON" || 'undefine' ? 'none' : 'inline-block'};

    width: 40rem;
    text-align: center;
    margin: 6rem auto;
    background-color: #55acee;
    border-radius: 2rem;

      p {
        height: 7rem;
        color: #fff;
        line-height: 7rem;

        justify-content: center;
        letter-spacing: 0.2rem;
        font-size: 3rem;
        display:inline-block;
        padding: 0 1rem;
        white-space:nowrap;
      }

      span {
        padding-right: 0.8rem;
      }


      @media only screen and (max-width: 323px) {
        margin: 6rem auto;
        width: 20rem;

        p {
          font-size: 1.7rem;
        }

      }

      @media only screen and (min-width: 324px) and (max-width: 767px) {
        margin: 6rem auto;
        width: 25rem;

        p {
          font-size: 2.2rem;
        }

      }

      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 35rem;


        }
`

export default class Twitter extends Component {


  render() {
    return (
      <TwitterBtn Display={this.props.ShareDisplay}><p><span className="fab fa-twitter"></span>宇宙猫を解放する</p></TwitterBtn>
    );
  }
}
