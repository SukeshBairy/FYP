import React from "react";
import "./Graph.css";
import FitnessCenterSharpIcon from "@material-ui/icons/FitnessCenterSharp";

function Graph({ name }) {
  return (
    <div className="graph">
      <FitnessCenterSharpIcon
        style={{
          color: "orangered",
          marginLeft: "7%",
          height: "30px",
          width: "30px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
}

export default Graph;
