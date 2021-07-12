import React from "react";
import "./AboutUs.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function AboutUs({ name, img, paragraph }) {
  return (
    <div className="aboutUs">
      <div className="aboutUs__content">
        <img src={img} alt="" />
        <h4>Coder</h4>
        <h3>{name}</h3>
        <p>{paragraph}</p>
        <div className="aboutUs__links">
          <FacebookIcon
            className="icon"
            style={{
              marginLeft: "5px",
              color: "gray",
              height: "25px",
              width: "20px",
              cursor: "pointer",
            }}
          />
          <TwitterIcon
            className="icon"
            style={{
              marginLeft: "5px",
              color: "gray",
              height: "25px",
              width: "20px",
              cursor: "pointer",
            }}
          />
          <GitHubIcon
            className="icon"
            style={{
              marginLeft: "5px",
              color: "gray",
              height: "25px",
              width: "20px",
              cursor: "pointer",
            }}
          />
          <LinkedInIcon
            className="icon"
            style={{
              marginLeft: "5px",
              color: "gray",
              height: "25px",
              width: "20px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
