import React, { Component } from 'react';
import styled from 'styled-components';
import CatComment from './hukidashi-comment.png';

const NyanCat = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    color: white;
    font-weight: bold;
    align-items: center;
    width: 70%;
    margin:0 auto;
    padding: 5rem 0;
        `

const Radius = styled.div`
border-radius: 50% 50%;
background-color: #fff;
width: 120px;
height: 120px;
overflow: hidden;
margin-left: 2rem;

  img {
    width: 120px;
    height: 120px;
    transform: scale(1.5);
  }
`

export default class MyComponent extends Component {
  render() {
    return (
      <NyanCat>
        <Radius>
          <img src="https://media0.giphy.com/media/7NIECetwh3na0/giphy.gif?cid=3640f6095c604a15685877462eeab496" alt="NyanCat"/>
        </Radius>
        <img src={CatComment} alt="地球ヲ宇宙猫デ支配セヨ"/>
      </NyanCat>
    );
  }
}
