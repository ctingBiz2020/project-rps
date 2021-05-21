import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import NavBar from "../NavBarComp";

//Unit Test
test("NavBar rendering test", () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper.contains("Rock-Paper-Scissors")).toEqual(true);
});

//Intergation Test
test("Click the 1 player link to change the board with computer", () => {
  expect();
});

test("Click the 2 player link to change the board with Plater 2", () => {
  expect();
});
