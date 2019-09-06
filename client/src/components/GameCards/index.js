import React from "react";
import "./style.css";

function GameCards(props) {
  return (
    <div className="row">
      <div className="col-lg-3">
      {/* <div className="img-container"> */}
        <img onClick={() => props.clickTracker(props.id)} alt={props.name} src={props.image} />
      </div>



      </div>
    // </div>
  );
}

export default GameCards;
