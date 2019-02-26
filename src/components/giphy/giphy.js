import React, { Component } from 'react';
import Getgif from './Getgif';

// import axios from 'axios';

export default class Giphy extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Getgif slotSwitch={this.props.slotSwitch} />
      </div>
    );
  }
}
