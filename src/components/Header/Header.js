import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.div`

  margin: 0 atuo;

    .title{
    color: white;
    font-size: 13rem;
    white-space:nowrap;

  }

  @media only screen and (max-width: 1024px)  {
    .title{
      font-size: 9rem;
    }
  }

`

export default class Header extends Component {

  render() {
    return(
       <HeaderTitle><h1 className="title">宇宙猫</h1></HeaderTitle>
    );
  }
}
