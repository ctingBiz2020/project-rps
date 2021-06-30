import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPaper, selectRock, selectScissors } from "../actions/selection";

export class Board extends Component {
  constructor() {
    super();

    this.state = {
      score: {
        win: 0,
        lose: 0,
        tie: 0,
      },
      player: 4,
      computer: 4,
    };
  }

  getResultPost = (value) => {
    this.setState(
      {
        player: value,
      },
      () => {
        axios.post("http://localhost:8080/computer", this.state).then((res) => {
          this.setState(res.data);
        });
      }
    );
  };

  render() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;

    return (
      <div>
        <h2>ScoreBoard</h2>
        <p>W - T - L</p>
        <p className="score">
          {this.state.score.win} - {this.state.score.tie} -{" "}
          {this.state.score.lose}
        </p>
        <button onClick={() => this.getResultPost(rock)} className="btn-rock">
          Rock
        </button>
        <button onClick={() => this.getResultPost(paper)} className="btn-paper">
          Paper
        </button>
        <button
          onClick={() => this.getResultPost(scissors)}
          className="btn-scissors"
        >
          Scissors
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      score: state.score,
    };
  },
  { selectPaper, selectRock, selectScissors }
)(Board);
