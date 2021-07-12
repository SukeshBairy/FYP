import React from "react";
import "./Attributes.css";
import { Link } from "react-router-dom";

function Attributes({ img, heading, paragraph, link }) {
  return (
    <div className="attributes">
      <div className="attribute__left">
        <div
          style={{
            height: "70px",
            width: "70px",
            color: "orangered",
            marginRight: "-30px",
          }}
        >
          {img}
        </div>
      </div>
      <div className="attribute__right">
        {" "}
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <a href={link}>DISCOVER MORE</a>
      </div>
    </div>
  );
}

export default Attributes;
