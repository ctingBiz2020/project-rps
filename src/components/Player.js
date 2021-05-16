import React, { Component } from "react";
import ButtonComp from "./ButtonComp";
import "./cssFolder/PlayerStyle.css";

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winCount: 0,
      picture: [],
    };
  }

  render() {
    if (this.props.status === 0) {
      return (
        <div className="player">
          <h3>Computer</h3>
        </div>
      );
    } else {
      return (
        <div className="player">
          <h3>Player 1</h3>
          <ButtonComp />
        </div>
      );
    }
  }
}

export default Player;
