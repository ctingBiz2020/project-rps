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

  resultRock = () => {
    this.setState(this.player = 0)
    let computer = Math.floor(Math.random() * 3);

    this.setState((prevState) => {
      let score = Object.assign({}, prevState.score);
      switch (computer) {
        case 0:
          score.tie++;
          break;
        case 1:
          score.lose++;
          break;
        case 2:
          score.win++;
          break;
        default:
          return { score };
      }
      return { score };
    });
  };

  resultPaper = () => {
    let computer = Math.floor(Math.random() * 3);

    this.setState((prevState) => {
      let score = Object.assign({}, prevState.score);
      switch (computer) {
        case 0:
          score.win++;
          break;
        case 1:
          score.tie++;
          break;
        case 2:
          score.lose++;
          break;
        default:
          return { score };
      }
      return { score };
    });
  };

  resultScissors = () => {
    let computer = Math.floor(Math.random() * 3);

    this.setState((prevState) => {
      let score = Object.assign({}, prevState.score);
      switch (computer) {
        case 0:
          score.lose++;
          break;
        case 1:
          score.win++;
          break;
        case 2:
          score.tie++;
          break;
        default:
          return { score };
      }
      return { score };
    });
  };

  render() {
    return (
      <div>
        <h2>ScoreBoard</h2>
        <p>W - T - L</p>
        <p className="score">
          {this.state.score.win} - {this.state.score.tie} -{" "}
          {this.state.score.lose}
        </p>
        <button onClick={this.resultRock} className="btn-rock">
          Rock
        </button>
        <button onClick={this.resultPaper} className="btn-paper">
          Paper
        </button>
        <button onClick={this.resultScissors} className="btn-scissors">
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
