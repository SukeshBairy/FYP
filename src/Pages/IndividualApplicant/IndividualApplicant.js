import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../Components/Header/Header";
import "./IndividualApplicant.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 700,
    marginLeft: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function IndividualApplicant() {
  const history = useHistory();
  const [er_credit_open_date, setEr_credit_open_date] = useState("");
  const [code, setCode] = useState();
  const [fico_avg_score, setFico_avg_score] = useState();
  const [loan_amnt, setLoan_amnt] = useState();
  const [term, setTerm] = useState();
  const [dti, setDti] = useState();
  const [home_ownership, setHome_ownership] = useState("");
  const [annual_inc, setAnnual_inc] = useState();
  const [mort_acc, setMort_acc] = useState();
  const [open_acc, setOpen_acc] = useState();
  const [total_acc, setTotal_acc] = useState();
  const [verification_status, setVerification_status] = useState();
  const [revol_util, setRevol_util] = useState();
  const classes = useStyles();

  console.log(term, verification_status, home_ownership);
  return (
    <div className="individualApplicant">
      <Header />
      <div className="individualApplicant__heading">
        <h2>Individual Applicant</h2>
      </div>

      <div className="individualApplicant__main">
        <div className="individualApplicant__mainHeader">
          <div
            className="individualApplicant__mainHome"
            onClick={() => history.push("/")}
          >
            Home
          </div>
          <div className="individualApplicant__mainImage">
            <img src="/images/right__arrow.png" alt="" />
          </div>
          <div className="individualApplicant__mainHeading">
            Predict Individual Loan Approval
          </div>
        </div>

        <div className="individualApplicant__mainForm">
          <h2>
            Please Fill in the details to get your chances of Loan Approval.
          </h2>
          <form className="individualApplicant__form">
            <div className="individualApplicant__formLeft">
              <input
                type="date"
                placeholder="Earliest Credit Line Open Date"
                value={er_credit_open_date}
                onChange={(e) => {
                  setEr_credit_open_date(e.target.value);
                }}
              />
              <input
                type="number"
                min="1"
                placeholder="First two digits of zip code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
              <input
                type="number"
                min="600"
                placeholder="Fico Score"
                value={fico_avg_score}
                onChange={(e) => {
                  setFico_avg_score(e.target.value);
                }}
              />
              <input
                type="number"
                min="1000"
                placeholder="Loan Amount(₹1000>)"
                value={loan_amnt}
                onChange={(e) => {
                  setLoan_amnt(e.target.value);
                }}
              />
              <FormControl className={classes.formControl}>
                <InputLabel id="meal-select-label">Term(in months)</InputLabel>
                <Select
                  labelId="meal-select-label"
                  id="meal-select-label"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                >
                  <MenuItem value={"36"}>36</MenuItem>
                  <MenuItem value={"60"}>60</MenuItem>
                </Select>
              </FormControl>
              <input
                type="number"
                placeholder="Current Debt to Income Ratio(0 to 100)"
                value={dti}
                onChange={(e) => {
                  setDti(e.target.value);
                }}
              />

              <FormControl className={classes.formControl}>
                <InputLabel id="meal-select-label">Home Ownership</InputLabel>
                <Select
                  labelId="meal-select-label"
                  id="meal-select-label"
                  value={home_ownership}
                  onChange={(e) => setHome_ownership(e.target.value)}
                >
                  <MenuItem value={"MORTGAGE"}>MORTGAGE</MenuItem>
                  <MenuItem value={"RENT"}>RENT</MenuItem>
                  <MenuItem value={"OWN"}>OWN</MenuItem>
                  <MenuItem value={"ANY"}>ANY</MenuItem>
                  <MenuItem value={"OTHER"}>OTHER</MenuItem>
                  <MenuItem value={"NONE"}>NONE</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="individualApplicant__formRight">
              <input
                type="number"
                min="0"
                placeholder="Annual Income"
                value={annual_inc}
                onChange={(e) => {
                  setAnnual_inc(e.target.value);
                }}
              />
              <input
                type="number"
                min="1"
                placeholder="Number of mortgage Accounts"
                value={mort_acc}
                onChange={(e) => {
                  setMort_acc(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Total open credit lines"
                value={open_acc}
                onChange={(e) => {
                  setOpen_acc(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Total credit lines Currently in credit file"
                value={total_acc}
                onChange={(e) => {
                  setTotal_acc(e.target.value);
                }}
              />
              <FormControl className={classes.formControl}>
                <InputLabel id="meal-select-label">
                  Verification Status
                </InputLabel>
                <Select
                  labelId="meal-select-label"
                  id="meal-select-label"
                  value={verification_status}
                  onChange={(e) => setVerification_status(e.target.value)}
                >
                  <MenuItem value={"0"}>0</MenuItem>
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                </Select>
              </FormControl>
              <input
                type="number"
                min="0"
                placeholder="Credit used relative to all available revolving credit"
                value={revol_util}
                onChange={(e) => {
                  setRevol_util(e.target.value);
                }}
              />
            </div>
          </form>
          <div
            className="individualApplicant__formButton"
            onClick={async () => {
              const inputs = {
                er_credit_open_date: er_credit_open_date,
                code: code,
                fico_avg_score: fico_avg_score,
                loan_amnt: loan_amnt,
                term: term,
                dti: dti,
                home_ownership: home_ownership,
                annual_inc: annual_inc,
                mort_acc: mort_acc,
                open_acc: open_acc,
                total_acc: total_acc,
                verification_status: verification_status,
                revol_util: revol_util,
              };
              const response = await fetch("/individual", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
              });
              console.log(JSON.stringify(inputs));
              if (response.ok) {
                console.log("it worked");
              }
            }}
          >
            MAKE PREDICTION
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualApplicant;
