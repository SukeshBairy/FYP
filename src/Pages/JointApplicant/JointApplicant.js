import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../../Components/Header/Header";
import "./JointApplicant.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    marginLeft: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function JointApplicant() {
  const history = useHistory();

  const [er_credit_open_date, setEr_credit_open_date] = useState();
  const [fico_avg_score, setFico_avg_score] = useState();
  const [sec_fico_avg_score, setSec_fico_avg_score] = useState();
  const [loan_amnt, setLoan_amnt] = useState();
  const [term, setTerm] = useState();
  const [home_ownership, setHome_ownership] = useState();
  const [annual_inc, setAnnual_inc] = useState();
  const [sec_annual_inc, setSec_annual_inc] = useState();
  const [total_bal_il, setTotal_bal_il] = useState();
  const [dti_joint, setDti_joint] = useState();
  const [sec_app_mort_acc, setSec_app_mort_acc] = useState();
  const [sec_app_revol_util, setSec_app_revol_util] = useState();
  const [sec_app_inq_last_6mths, setSec_app_inq_last_6mths] = useState();
  const classes = useStyles();
  return (
    <div className="jointApplicant">
      <Header />
      <div className="jointApplicant__heading">
        <h2>Joint Applicant</h2>
      </div>

      <div className="jointApplicant__main">
        <div className="jointApplicant__mainHeader">
          <div
            className="jointApplicant__mainHome"
            onClick={() => history.push("/")}
          >
            Home
          </div>
          <div className="jointApplicant__mainImage">
            <img src="/images/right__arrow.png" alt="" />
          </div>
          <div className="jointApplicant__mainHeading">
            Predict Joint Individual Loan Approval
          </div>
        </div>

        <div className="jointApplicant__mainForm">
          <h2>
            Please Fill in the details to get your chances of Loan Approval.
          </h2>
          <form className="jointApplicant__form">
            <div className="jointApplicant__formLeft">
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
                min="0"
                placeholder="Current Balance Owed on installment accounts"
                value={total_bal_il}
                onChange={(e) => {
                  setTotal_bal_il(e.target.value);
                }}
              />
            </div>
            <div className="jointApplicant__formRight">
              <input
                type="number"
                min="600"
                placeholder="Fico Score"
                value={sec_fico_avg_score}
                onChange={(e) => {
                  setSec_fico_avg_score(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Annual Income"
                value={sec_annual_inc}
                onChange={(e) => {
                  setSec_annual_inc(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Current Debt to Income Ratio(0 to 100)"
                value={dti_joint}
                onChange={(e) => {
                  setDti_joint(e.target.value);
                }}
              />
              <input
                type="number"
                min="1"
                placeholder="Number of mortgage Accounts"
                value={sec_app_mort_acc}
                onChange={(e) => {
                  setSec_app_mort_acc(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Credit used relative to all available revolving credit"
                value={sec_app_revol_util}
                onChange={(e) => {
                  setSec_app_revol_util(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Credit Inquiries in last 6 months:
                "
                value={sec_app_inq_last_6mths}
                onChange={(e) => {
                  setSec_app_inq_last_6mths(e.target.value);
                }}
              />
            </div>
          </form>
          <div
            className="jointApplicant__formButton"
            onClick={async () => {
              const inputs = {
                total_bal_il: total_bal_il,
                fico_avg_score: fico_avg_score,
                sec_fico_avg_score: sec_fico_avg_score,
                loan_amnt: loan_amnt,
                term: term,
                dti_joint: dti_joint,
                home_ownership: home_ownership,
                annual_inc: annual_inc,
                sec_annual_inc: sec_annual_inc,
                sec_app_mort_acc: sec_app_mort_acc,
                er_credit_open_date: er_credit_open_date,
                sec_app_revol_util: sec_app_revol_util,
                sec_app_inq_last_6mths: sec_app_inq_last_6mths,
              };
              const response = await fetch("/joint", {
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

export default JointApplicant;
