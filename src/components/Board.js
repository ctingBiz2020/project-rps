import React, { Component } from "react";
import Player from "./Player";
import "./cssFolder/BoardStyle.css";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playOne: 1,
      playTwo: 0,
      roundCount: 2,
    };
  }

  render() {
    return (
      <div className="background row">
        <div className="column">
          <Player status={this.state.playOne} />
        </div>
        <div className="column">
          <p>This is the boards Round {this.state.roundCount}</p>
        </div>
        <div className="column">
          <Player status={this.state.playTwo} />
        </div>
      </div>
    );
  }
}

export default Board;
