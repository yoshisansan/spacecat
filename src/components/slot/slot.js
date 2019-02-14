import React, { Component } from 'react';
import styled from 'styled-components';

const Slot = styled.img`
`

export default class MyComponent extends Component {
  render() {
    return (
      <Slot>
        <img src={require('../img/slot.png')} alt="スロット" />
      </Slot>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
