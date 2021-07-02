import React from "react";
import "./Picture.css";
import rock from "../image/rock.jpg";
import paper from "../image/paper.jpg";
import scissor from "../image/scissors.jpg";
import blank from "../image/blank.jpg";

function Picture(props) {
  let replace;
  //console.log(this.props.value);
  switch (props.value) {
    case 0:
      replace = <img className="pic" src={rock} alt="Rock" rounded></img>;
      break;
    case 1:
      replace = <img className="pic" src={paper} alt="Paper" rounded></img>;
      break;
    case 2:
      replace = <img className="pic" src={scissor} alt="Scissor" rounded></img>;
      break;
    default:
      replace = <img className="pic" src={blank} alt="Blank" rounded></img>;
  }
  return <div id="pic">{replace}</div>;
}

export default Picture;

/*
Use functional componenet to render image 
based on switch cases

render the image with src from cases

*/
