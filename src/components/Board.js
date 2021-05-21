import React, { Component } from "react";
import Player from "./Player";
import "./cssFolder/BoardStyle.css";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playOne: 1,
      playTwo: 0,
      roundCount: 1,
    };
  }

  render() {
    const { playOne, playTwo, roundCount } = this.state;
    return (
      <div className="background row">
        <div className="column">
          <Player status={playOne} />
        </div>
        <div className="column">
          <p>This is the boards Round {roundCount}</p>
        </div>
        <div className="column">
          <Player status={playTwo} />
        </div>
      </div>
    );
  }
}

export default Board;
