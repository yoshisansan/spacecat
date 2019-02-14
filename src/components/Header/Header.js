import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  color: white;
  font-size: 10rem;
  position: relative;
  top: 0;
`

export default class Header extends Component {

  render() {
    return(
       <HeaderTitle>宇宙猫</HeaderTitle>
    )
  }
}
