import * as constants from "./constants";
import * as actions from "./selection";

it("create an action to select rock", () => {
  const rock = 0;

  const expectedAction = { type: constants.SELECT_ROCK, rock };

  expect(actions.selectRock(rock)).toEqual(expectedAction);
});

it("create an action to select paper", () => {
  const paper = 1;

  const expectedAction = { type: constants.SELECT_PAPER, paper };

  expect(actions.selectPaper(paper)).toEqual(expectedAction);
});

it("create an action to select scissors", () => {
  const scissors = 2;

  const expectedAction = { type: constants.SELECT_SCISSORS, scissors };

  expect(actions.selectScissors(scissors)).toEqual(expectedAction);
});
