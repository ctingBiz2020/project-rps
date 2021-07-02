import selectionReducer from "./selection";
import * as constants from "../actions/constants";

describe("selectionReducer", () => {
  it("select Rock", () => {
    let rock = 0;
    expect(selectionReducer(undefined, { type: constants.SELECT_ROCK, rock }));
  });
});
