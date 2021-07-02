import React from "react";
import { shallow } from "enzyme";
import { Board } from "./Board";

describe("Board", () => {
  let board = shallow(<Board />);

  it("renders properly", () => {
    expect(board).toMatchSnapshot();
  });

  it("initialize the score with zeros", () => {
    expect(board.state()).toEqual({ score: { win: 0, lose: 0, tie: 0 } });
  });

  describe("when select Rock", () => {
    const testValue = jest.fn();
    testValue
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2);

    beforeEach(() => {
      board.find(".btn-rock").simulate("click");
    });

    it("tie with the computer when it select Rock", () => {
      expect(board.find(".score").text()).toEqual("0 - 1 - 0");
    });
  });
});
