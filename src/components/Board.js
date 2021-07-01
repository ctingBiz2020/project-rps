import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPaper, selectRock, selectScissors } from "../actions/selection";
import Picture from "./Picture";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
      <Container>
        <Row>
          <h2>ScoreBoard</h2>
          <p>W - T - L</p>
          <p className="score">
            {this.state.score.win} - {this.state.score.tie} -{" "}
            {this.state.score.lose}
          </p>
        </Row>
        <Row>
          <Col md="auto">
            <div>
              <Picture value={this.state.player} />
              <Button
                onClick={() => this.getResultPost(rock)}
                className="btn-rock"
              >
                Rock
              </Button>
              <Button
                onClick={() => this.getResultPost(paper)}
                className="btn-paper"
              >
                Paper
              </Button>
              <Button
                onClick={() => this.getResultPost(scissors)}
                className="btn-scissors"
              >
                Scissors
              </Button>
            </div>
          </Col>
          <Col></Col>
          <Col md="auto">
            <Picture value={this.state.computer} />
          </Col>
        </Row>
      </Container>
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
