import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Header.css";

function Header() {
  const history = useHistory();

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__logo">
        <img src="/images/logo.svg" alt="" onClick={logoutOfApp} />
      </div>
      <div className="header__options">
        <div className="header__optionsHome" onClick={() => history.push("/")}>
          HOME
        </div>
        <div className="header__optionsPredict">PREDICT</div>
        <div className="header__optionsVisualize">VISUALIZE</div>
        <div className="header__optionsInsights">INSIGHTS</div>
        <div className="header__optionsContact">CONTACT</div>
      </div>
    </div>
  );
}

export default Header;
