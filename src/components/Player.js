import React, { Component } from "react";
import ButtonComp from "./ButtonComp";
import "./cssFolder/PlayerStyle.css";
import blankPic from "../image/blank.jpg";

class Player extends Component {
  constructor(props) {
    super(props);

    this.imageHandler = this.imageHandler.bind(this);
    this.state = {
      imageUrl: blankPic,
      choice: "blank",
    };
  }

  imageHandler(data, pic) {
    console.log(data);
    this.setState({
      choice: data,
      imageUrl: pic,
    });
  }

  render() {
    const { imageUrl, choice } = this.state;
    if (this.props.status === 0) {
      return (
        <div className="player">
          <h3 id="title">Computer</h3>
        </div>
      );
    } else {
      return (
        <div className="player">
          <h3 id="title">Player 1</h3>
          <img src={imageUrl} alt={choice} id="picture"></img>
          <ButtonComp selection={this.imageHandler} />
        </div>
      );
    }
  }
}

export default Player;
