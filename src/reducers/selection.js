import * as constants from '../actions/constants'

const selection = (state = 0, action) => {
  let selection;

  switch(action.type) {
    case constants.SELECT_ROCK:
      selection = action.SELECT_ROCK;
      break;
    case constants.SELECT_PAPER:
      selection = action.SELECT_PAPER;
      break;
    case constants.SELECT_SCISSORS:
      selection = action.SELECT_SCISSORS;
      break;
    default:
      selection = state;
  }

  return selection;
}

export default selection;