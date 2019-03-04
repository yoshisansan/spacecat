import React, { Component } from 'react';
import styled from 'styled-components';
import Vita from './Vita.jpg';
import axios from 'axios';

let count = 0;

const Img = styled.img`
    width: 40rem;
    height: 40rem;
    cursor: pointer;

    margin-top: 1.5rem;
    border: solid 1.1rem #000;
    border-radius: 3rem;

    @media only screen and (max-width: 1024px)  {
      width: 30rem;
      height: 30rem;

    }

    @media only screen and (max-width: 728px)  {
      width: 21rem;
      height: 21rem;
    }
`

export default class Getgif extends Component {
  constructor(props){
    super(props);
    this.state = { gifUrlList: Vita };
  }


  componentDidMount() {
  // this.giphyApi();
}

  render(){
    // const switchOn = this.props.slotSwitch === "ON" ? true : false;
    const switchOn = this.props.slotSwitch;
    this.SwitchFlag(switchOn);
    return(
      <Img src={this.state.gifUrlList} />
    );
  }

  // this.GoSlot();

  SwitchFlag = (switchOn) => {

    if(switchOn === "ON"){
      if(count < 1 ){
        console.log("GO!");
        this.giphyApi();
        count++;
      }
    }
      // else if(this.props.slotSwitch === "STOP"){
      //   clearTimeout(this.TimeGo)
      //   console.log("STOPメソッド発動");
      // }

  }

  giphyApi() {
  const search = "space cat";
  const key = "P8jSOBEO7BzFdCudvpCKNzqqwIJXNsrY";
  const limit = 15;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  axios.get(url).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);

//Promiseか何かで順番に処理できるようにしたい

      // this.setState({ gifUrlList: imageUrlList });
      // console.log(imageUrlList);
      this.remove(imageUrlList);
    });
  }

  // clearTimeout(this.TimeGo);

  remove(imageUrlList) {
  const removeImgs = [
    "https://media2.giphy.com/media/l0HlBwaMKwzEhTYkw/giphy-downsized.gif",
    "https://media3.giphy.com/media/l0MYtF4MaHlhEL7SE/giphy-tumblr.gif",
    "https://media3.giphy.com/media/EwmemLDMpTXsQ/giphy-downsized.gif",
    "https://media1.giphy.com/media/l41lR5ubKJShtkGdy/giphy-downsized.gif",
    "https://media3.giphy.com/media/oRIDteeHx0EKc/giphy-tumblr.gif",
    "https://media2.giphy.com/media/zkMri4yiJ3Mdy/giphy-downsized.gif",
    "https://media0.giphy.com/media/12OQNpEK2wWVfa/giphy-downsized.gif",
    "https://media1.giphy.com/media/hpQwBtms5D8dy/giphy-downsized.gif",
    "https://media2.giphy.com/media/I8eorWE0QuYYU/giphy-downsized.gif",
    "https://media0.giphy.com/media/1yMfs1NsNIAItbpXzO/giphy.gif",
    "https://media1.giphy.com/media/apl3NlB6WU3xm/giphy-downsized.gif",
    "https://media1.giphy.com/media/3jAlmwsFKrrnq/giphy-downsized.gif",
    "https://media1.giphy.com/media/RbE9Wj1DX19hS/giphy.gif",
    "https://media1.giphy.com/media/7oQ30c54ssxsk/giphy-downsized.gif",
    "https://media0.giphy.com/media/sKuNA4J7OXr7W/giphy-downsized.gif",
    "https://media0.giphy.com/media/l2JHRoOcvuKUMSXGo/giphy.gif",
    "https://media3.giphy.com/media/xT0BKEksASgc4OJGxy/giphy-tumblr.gif",
    "https://media0.giphy.com/media/iaDA7cK3aNvOM/giphy-downsized.gif",
    "https://media3.giphy.com/media/26ybuLs1DPvugDQsw/giphy-downsized.gif",
    "https://media2.giphy.com/media/3o7WIskynGiaNFdpgQ/giphy-downsized.gif"
  ];

  for (let i = 0; i < removeImgs.length; i++) {
    imageUrlList = imageUrlList.filter(Item => Item !== removeImgs[i]);
  }
  // this.setState({ gifUrlList: imageUrlList });
  this.TimeGo(imageUrlList);
}

  //眺めると楽しいからゆっくりモードのボタンも設置したい

  TimeGo(list) {
    setTimeout(() => {

      if(this.props.slotSwitch === "STOP"){
        clearTimeout(this.TimeGo);
        console.log("STOPメソッド発動");
        count = 0;
        return;
      }

      const random = Math.floor(Math.random() * list.length);
      this.setState({ gifUrlList: list[random] });
      console.log(list[random]);

      this.TimeGo(list);
    }, 700);
  }

}
