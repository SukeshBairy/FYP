import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../../Components/Header/Header";
import "./JointApplicant.css";

function JointApplicant() {
  const history = useHistory();

  const [creditLine, setCreditLine] = useState();
  const [cibil1, setCibil1] = useState();
  const [cibil2, setCibil2] = useState();
  const [loan, setLoan] = useState();
  const [term, setTerm] = useState();
  const [homeOwnership, setHomeOwnership] = useState();
  const [annualIncome1, setAnnualIncome1] = useState();
  const [annualIncome2, setAnnualIncome2] = useState();
  const [currentBalance, setCurrentBalance] = useState();
  const [debtRatio, setDebtRatio] = useState();
  const [mortgage, setMortgage] = useState();
  const [creditUsed, setCreditUsed] = useState();
  const [creditInquires, setCreditInquires] = useState();

  return (
    <div className="jointApplicant">
      <Header />
      <div className="jointApplicant__heading">
        <h2>Join Applicant</h2>
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
                value={creditLine}
                onChange={(e) => {
                  setCreditLine(e.target.value);
                }}
              />
              <input
                type="number"
                min="600"
                placeholder="Cibil Score"
                value={cibil1}
                onChange={(e) => {
                  setCibil1(e.target.value);
                }}
              />
              <input
                type="number"
                min="1000"
                placeholder="Loan Amount(₹1000>)"
                value={loan}
                onChange={(e) => {
                  setLoan(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Term(in months)"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Home Ownership"
                value={homeOwnership}
                onChange={(e) => {
                  setHomeOwnership(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Annual Income"
                value={annualIncome1}
                onChange={(e) => {
                  setAnnualIncome1(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Current Balance Owed on installment accounts"
                value={currentBalance}
                onChange={(e) => {
                  setCurrentBalance(e.target.value);
                }}
              />
            </div>
            <div className="jointApplicant__formRight">
              <input
                type="number"
                min="600"
                placeholder="Cibil Score"
                value={cibil2}
                onChange={(e) => {
                  setCibil2(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Annual Income"
                value={annualIncome2}
                onChange={(e) => {
                  setAnnualIncome2(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Current Debt to Income Ratio(0 to 100)"
                value={debtRatio}
                onChange={(e) => {
                  setDebtRatio(e.target.value);
                }}
              />
              <input
                type="number"
                min="1"
                placeholder="Number of mortgage Accounts"
                value={mortgage}
                onChange={(e) => {
                  setMortgage(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Credit used relative to all available revolving credit"
                value={creditUsed}
                onChange={(e) => {
                  setCreditUsed(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Credit Inquiries in last 6 months:
                "
                value={creditInquires}
                onChange={(e) => {
                  setCreditInquires(e.target.value);
                }}
              />
            </div>
          </form>
          <div
            className="jointApplicant__formButton"
            onClick={async () => {
              const inputs = {
                currentBalance: currentBalance,
                cibil1: cibil1,
                cibil2: cibil2,
                loan: loan,
                term: term,
                debtRatio: debtRatio,
                homeOwnership: homeOwnership,
                annualIncome1: annualIncome1,
                annualIncome2: annualIncome2,
                mortgage: mortgage,
                creditLine: creditLine,
                creditUsed: creditUsed,
                creditInquires: creditInquires,
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
