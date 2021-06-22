import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../Components/Header/Header";
import "./IndividualApplicant.css";

function IndividualApplicant() {
  const history = useHistory();
  const [dates, setDate] = useState("");
  const [zipCode, setZipCode] = useState(20);
  const [cibil, setCibil] = useState(600);
  const [loan, setLoan] = useState(40000);
  const [months, setMonths] = useState(36);
  const [debtRatio, setDebtRatio] = useState(10);
  const [homeOwnership, setHomeOwnership] = useState("mortgage");
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [mortgage, setMortgage] = useState(3);
  const [creditLine, setCreditLine] = useState(2);
  const [totalCreditLine, setTotalCreditLine] = useState(3);
  const [verificationStatus, setVerificationStatus] = useState(0);
  const [creditUsed, setCreditUsed] = useState(3);

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
                value={dates}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <input
                type="number"
                min="1"
                placeholder="First two digits of zip code"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              />
              <input
                type="number"
                min="600"
                placeholder="Cibil Score"
                value={cibil}
                onChange={(e) => {
                  setCibil(e.target.value);
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
                value={months}
                onChange={(e) => {
                  setMonths(e.target.value);
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
                type="text"
                placeholder="Home Ownership"
                value={homeOwnership}
                onChange={(e) => {
                  setHomeOwnership(e.target.value);
                }}
              />
            </div>
            <div className="individualApplicant__formRight">
              <input
                type="number"
                min="0"
                placeholder="Annual Income"
                value={annualIncome}
                onChange={(e) => {
                  setAnnualIncome(e.target.value);
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
                placeholder="Total open credit lines"
                value={creditLine}
                onChange={(e) => {
                  setCreditLine(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                placeholder="Total credit lines Currently in credit file"
                value={totalCreditLine}
                onChange={(e) => {
                  setTotalCreditLine(e.target.value);
                }}
              />
              <input
                type="number"
                min="0"
                max="2"
                placeholder="Verification Status"
                value={verificationStatus}
                onChange={(e) => {
                  setVerificationStatus(e.target.value);
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
            </div>
          </form>
          <div
            className="individualApplicant__formButton"
            onClick={async () => {
              const inputs = {
                date: dates,
                zipCode: zipCode,
                cibil: cibil,
                loan: loan,
                months: months,
                debtRatio: debtRatio,
                homeOwnership: homeOwnership,
                annualIncome: annualIncome,
                mortgage: mortgage,
                creditLine: creditLine,
                totalCreditLine: totalCreditLine,
                verificationStatus: verificationStatus,
                creditUsed: creditUsed,
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
