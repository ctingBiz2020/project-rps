import React from "react";
import rock from "../image/rock.jpg";
import paper from "../image/paper.jpg";
import scissor from "../image/scissors.jpg";
import blank from "../image/blank.jpg";

function Picture(props) {
  let replace;
  //console.log(this.props.value);
  switch (props.value) {
    case 0:
      replace = <img src={rock} alt="Rock"></img>;
      break;
    case 1:
      replace = <img src={paper} alt="Paper"></img>;
      break;
    case 2:
      replace = <img src={scissor} alt="Scissor"></img>;
      break;
    default:
      replace = <img src={blank} alt="Blank"></img>;
  }
  return <div>{replace}</div>;
}

export default Picture;

/*
Use functional componenet to render image 
based on switch cases

render the image with src from cases

*/
