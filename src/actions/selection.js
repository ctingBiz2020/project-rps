import * as constants from "./constants";

export const selectRock = (rock) => {
  return {
    type: constants.SELECT_ROCK,
    rock,
  };
};

export const selectPaper = (paper) => {
  return {
    type: constants.SELECT_PAPER,
    paper,
  };
};

export const selectScissors = (scissors) => {
  return {
    type: constants.SELECT_SCISSORS,
    scissors,
  };
};
