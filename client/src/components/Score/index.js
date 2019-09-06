import React from "react";
import "./style.css";

function Score(props) {

    return (
        <div>
            <div id="userScoreDisplay">
                <p>Score: {props.userScore}</p>
            </div>
            <div id="userTopScoreDisplay">
                <p>Top Score: {props.userTopScore}</p>
            </div>
        </div>

    );


}

export default Score;

