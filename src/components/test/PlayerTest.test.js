import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ButtonComp from "../ButtonComp.js";
configure({ adapter: new Adapter() });
import Player from "../Player.js";

describe("Player Component Test", () => {
  test("render Computer when prop value is 0", () => {
    //set the value of the props
    const value = 0;
    const wrapper = shallow(<Player status={value} />);

    //console.log(wrapper.debug());
    /* shallow() function creates an instance of the component
        to see what it render we can console log the variable "wrapper"
     */

    //assert the value and return expected result
    expect(wrapper.find("#title").text()).toContain("Computer");
  });

  test("render Player 1 when prop value is 1", () => {
    const value = 1;
    const wrapper = shallow(<Player status={value} />);

    expect(wrapper.find("#title").text()).toContain("Player 1");
  });

  test("render buttons when prop value is 1", () => {
    const value = 1;
    const wrapper = shallow(<Player status={value} />);

    expect(wrapper.exists(<ButtonComp />));
  });
});

describe("Functionality of Player Component intergrate with Button Component", () => {
  test("display Rock when you click on Rock button", () => {
    let value = 1;
    const wrapper = mount(<Player status={value} />);

    wrapper.find("#rock").simulate("click");
    console.log(wrapper.debug());
    expect(wrapper.find("img").prop("alt")).toEqual("Rock");
  });

  test("display Paper when you click on Paper button", () => {
    let value = 1;
    const wrapper = mount(<Player status={value} />);

    wrapper.find("#paper").simulate("click");
    console.log(wrapper.debug());
    expect(wrapper.find("img").prop("alt")).toEqual("Paper");
  });

  test("display Scissors when you click on Scissors button", () => {
    let value = 1;
    const wrapper = mount(<Player status={value} />);

    wrapper.find("#scissors").simulate("click");
    console.log(wrapper.debug());
    expect(wrapper.find("img").prop("alt")).toEqual("Scissors");
  });
});
