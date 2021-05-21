import React from "react";
import rockPic from "../image/rock.jpg";
import paperPic from "../image/paper.jpg";
import scissorsPic from "../image/scissors.jpg";
import "./cssFolder/ButtonStyle.css";

function ButtonComp(props) { 
  return (
    <React.Fragment>
      <div className="buttonPrime">
        <button id="rock" onClick={() => props.selection("Rock", rockPic)}>
          Rock
        </button>
        <button id="paper" onClick={() => props.selection("Paper", paperPic)}>
          Paper
        </button>
        <button
          id="scissors"
          onClick={() => props.selection("Scissors", scissorsPic)}
        >
          Scissors
        </button>
      </div>
    </React.Fragment>
  );
}

export default ButtonComp;
