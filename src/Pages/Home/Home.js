import React from "react";
import { useHistory } from "react-router";
import Header from "../../Components/Header/Header";
import "./Home.css";

function Home() {
  const history = useHistory();

  return (
    <div className="home">
      <Header />
      <div className="home__buttons">
        <div
          className="home__button"
          onClick={() => history.push("/individual-applicant")}
        >
          INDIVIDUAL APPLICANT
        </div>
        <div
          className="home__button"
          onClick={() => history.push("/joint-applicant")}
        >
          JOINT APPLICANT
        </div>
      </div>
    </div>
  );
}

export default Home;
