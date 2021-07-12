import React, { useState } from "react";
import { useHistory } from "react-router";
import Attributes from "../../Components/Attributes/Attributes";
import Graph from "../../Components/Graph/Graph";
import Header from "../../Components/Header/Header";
import Modal from "react-awesome-modal";
import CloseIcon from "@material-ui/icons/Close";
import AccessibilityNewSharpIcon from "@material-ui/icons/AccessibilityNewSharp";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import "./Home.css";
import AboutUs from "../../Components/AboutUs/AboutUs";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function Home() {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="home">
      <Header />
      <div className="home__page">
        <img src="/Images/digital-money.jpg" alt="" />
        <h3>KNOW YOUR ELIGIBILITY, GET SMART</h3>
        <h2>
          EASY WITH YOUR <span>LOANS</span>
        </h2>
        <div className="home__pagebutton" onClick={() => openModal()}>
          Predict / Analysis
        </div>
        <Modal
          visible={visible}
          width="80%"
          height="300"
          effect="fadeInUp"
          onClickaway={() => closeModal()}
        >
          <div className="home_decider">
            <div
              className="modal__individual"
              onClick={() => history.push("/individual-applicant")}
            >
              <div className="modal__individualImg">
                {" "}
                <AccessibilityNewSharpIcon style={{ color: "orangered" }} />
              </div>
              <h3>INDIVIDUAL APPLICANT</h3>
            </div>
            <div
              className="modal__joint"
              onClick={() => history.push("/joint-applicant")}
            >
              <div className="modal__jointImg">
                {" "}
                <div>
                  <AccessibilityNewSharpIcon style={{ color: "orangered" }} />
                  <AccessibilityNewSharpIcon style={{ color: "orangered" }} />
                </div>
              </div>
              <h3>JOINT APPLICANT</h3>
            </div>
          </div>
          <div className="modal__closeButton" onClick={() => closeModal()}>
            {" "}
            <CloseIcon />
          </div>
        </Modal>
      </div>
      <div className="home__predict">
        <div className="predict__heading">
          <h3>
            <span>CHOOSE</span> PROGRAM
          </h3>
          <img src="/Images/line-dec.png" alt="" />
          <p>
            Visual Studio Code is a source-code editor made by Microsoft for
            Windows, Linux and macOS. Features include support for debugging,
            syntax highlighting, intelligent code completion, snippets, code
            refactoring, and embedded Git. React is a free and open-source
            front-end JavaScript library for building user interfaces or UI
            components. It is maintained by Facebook and a community of
            individual developers and companies. React can be used as a base in
            the development of single-page or mobile applications.
          </p>
        </div>
        <div className="home__attributes">
          <div className="attribute__left">
            <Attributes
              className="attribute"
              img={<MonetizationOnIcon />}
              // img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAkFBMVEUAAAABAQH////5+fkUFBT19fXw8PDz8/P6+vpHR0fq6urn5+ceHh7Y2NhgYGDg4OCtra3Hx8fS0tLCwsLFxcW6urrT09Pd3d20tLSXl5erq6u8vLxsbGxycnKkpKRBQUE7OztOTk5ZWVkzMzMYGBgBAxGIiIglJSVLS0t9fX2dnZ0EBxssLCyFhYWYmJgJEC1KdgtUAAAE+klEQVR4nO3a6XaiShiFYazEIRpkHpQ4pg8ZTpK+/7vrYvigQI0yKeB+f/RamCylHrGKlC39J6EoSFCQoCBBQYKCBAUJChLU/7c+gdYECervrU+gNUGCggSFtYOCBAUJChIUJChIULjHpCCBEEIIIYQQQgghhBBCqIcNuh8kKEAkQSIJEBQkkgBBQSIJEBQkKEAkQYICRBIkKEhQkEgCBAUJChJJgKAgQQEiCRIUJChIJEGCAgQFCQoSSWUgGuBogXBxiSNXRu6Bg9/IHEYHmV9oxdV2fujP/ipz/Md3rfVTZqBvrvomDtW1PHWXjkySLCs5kl41jz/Lj74Rfv4iD6fLG1Ocl3hT/QyMpRmepu3Ft9R3lA9RYjaTR+PvdPDSdJoebBnjFAbbpRIfjOkjZt+WorCEby74exi8r+lTaLZsiseKLW2V0WsqMZsJEpMH5osSkjTiB5L50faLIifhGo/837W+TUe+Uxbr2SYrIS34RZE8kJWwFbaxBIkNk6Wv79XHrmsSg6wEP3De58qP8GFQZC4xPCXBtFc20wWJJ/7BmDPGFt2SWJj8cK4Z6dAGsuw4ji1IzH79dDCNTwwT8dMxZE+S5LB96yWWn+vH9NDTPEvT5+mHYaWsVyt39iIMfCqPhv7JGVPnVxYTJb7ZxHCCh6816KOdlXj2v30/keBL5sLylnthmAv1S5LeXT99xHUtdZ9ZRV1xFV3z57E0cWJZOcPpuv03FJkOb4PSR3NPOcj9inhw+HPp1hDFJfJ3lIPoKDey/IvkDw7vUuscVKkKStxzz68HbY+1+a2na/brmRw998Mhfh2RWLlBlmV5nmEYpqkF6TzbtmU5XEGVoFnQlDeKGo+HvIewCY9dp0lY+KrB64/H4/BsghObhqcYnCs/Zyc4d9sOBqKHQzL56AzP4wMNxvt5ROJFXaqqmmgEHEbEEXrokUcAIpJEKKQSuEQyCU51oEkSPV/8AjR6AogEQgLBQEQwQwRS4MNdLi6TMLMSdmkJtpSer9yf0z1S0kqtKKEIEtMDiWFegl8Q62pzWFOVlZCrSNx67RQqIXFqnoDEeYkTE2ZvJZy7k7h4nji3iEICEpDorQRmzFpW0Tu/n+jrnRXutov8LXqBxEP3JYza/irvmUT5nZq+SeQmimISrew3CfWkROFbK4GCSzy2sOISVRcPvno8TDJdunOZ28CkHcxgCzPZwxR2cYVNzMNdTNrLFbcxj+5jrtxEIUXIzZXZze0pjT0d9yXjrKXszvaQXLJb20oWJLer657a2/7Kf2PxHrXLtT/X/BqdPYv8acejyX9bsq00z9xXLVjiWtLtJLzwo53LTtMzaUJmOAfE02IwL0ZTQTg38slxuVyHfQb9/CzC0v8n0T4J5fyiIq4j6SJy8luwo8sHrR5nJW5GIbn6QdrRzPQaiC+D6EKgKyG8FIRrIXc1LPyw9kpgorhakKAgQUGCKizRWwpIxBWHgETfKSARVwYCEpC4DwpIxJWDgESfKSARVxYCEv2lgERceQhI9JUCEnFVIPpFAYm4ahCQ6CFFVQhI9I6iOgQk+kYBibg6IHpBUQ8EJHpEURcEJHpDUR9E1ykgEVcnRKcp6oWARA8o6oboLgUk4uqH6ChFExCdpGgGAhIdpmgKonMUzUF0jKJJiE5RNAsBiQ5SNA3RGYrmIRBCCCGEEEIIIYQQQgihG/cPgeNH1oylU1QAAAAASUVORK5CYII="
              heading="Data Cleaning"
              paragraph="the process of fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a dataset. If data is incorrect, outcomes and algorithms are unreliable, even though they may look correct."
              link="https://www.kaggle.com/learn/data-cleaning"
            />
            <Attributes
              // img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAkFBMVEUAAAABAQH////5+fkUFBT19fXw8PDz8/P6+vpHR0fq6urn5+ceHh7Y2NhgYGDg4OCtra3Hx8fS0tLCwsLFxcW6urrT09Pd3d20tLSXl5erq6u8vLxsbGxycnKkpKRBQUE7OztOTk5ZWVkzMzMYGBgBAxGIiIglJSVLS0t9fX2dnZ0EBxssLCyFhYWYmJgJEC1KdgtUAAAE+klEQVR4nO3a6XaiShiFYazEIRpkHpQ4pg8ZTpK+/7vrYvigQI0yKeB+f/RamCylHrGKlC39J6EoSFCQoCBBQYKCBAUJChLU/7c+gdYECervrU+gNUGCggSFtYOCBAUJChIUJChIULjHpCCBEEIIIYQQQgghhBBCqIcNuh8kKEAkQSIJEBQkkgBBQSIJEBQkKEAkQYICRBIkKEhQkEgCBAUJChJJgKAgQQEiCRIUJChIJEGCAgQFCQoSSWUgGuBogXBxiSNXRu6Bg9/IHEYHmV9oxdV2fujP/ipz/Md3rfVTZqBvrvomDtW1PHWXjkySLCs5kl41jz/Lj74Rfv4iD6fLG1Ocl3hT/QyMpRmepu3Ft9R3lA9RYjaTR+PvdPDSdJoebBnjFAbbpRIfjOkjZt+WorCEby74exi8r+lTaLZsiseKLW2V0WsqMZsJEpMH5osSkjTiB5L50faLIifhGo/837W+TUe+Uxbr2SYrIS34RZE8kJWwFbaxBIkNk6Wv79XHrmsSg6wEP3De58qP8GFQZC4xPCXBtFc20wWJJ/7BmDPGFt2SWJj8cK4Z6dAGsuw4ji1IzH79dDCNTwwT8dMxZE+S5LB96yWWn+vH9NDTPEvT5+mHYaWsVyt39iIMfCqPhv7JGVPnVxYTJb7ZxHCCh6816KOdlXj2v30/keBL5sLylnthmAv1S5LeXT99xHUtdZ9ZRV1xFV3z57E0cWJZOcPpuv03FJkOb4PSR3NPOcj9inhw+HPp1hDFJfJ3lIPoKDey/IvkDw7vUuscVKkKStxzz68HbY+1+a2na/brmRw998Mhfh2RWLlBlmV5nmEYpqkF6TzbtmU5XEGVoFnQlDeKGo+HvIewCY9dp0lY+KrB64/H4/BsghObhqcYnCs/Zyc4d9sOBqKHQzL56AzP4wMNxvt5ROJFXaqqmmgEHEbEEXrokUcAIpJEKKQSuEQyCU51oEkSPV/8AjR6AogEQgLBQEQwQwRS4MNdLi6TMLMSdmkJtpSer9yf0z1S0kqtKKEIEtMDiWFegl8Q62pzWFOVlZCrSNx67RQqIXFqnoDEeYkTE2ZvJZy7k7h4nji3iEICEpDorQRmzFpW0Tu/n+jrnRXutov8LXqBxEP3JYza/irvmUT5nZq+SeQmimISrew3CfWkROFbK4GCSzy2sOISVRcPvno8TDJdunOZ28CkHcxgCzPZwxR2cYVNzMNdTNrLFbcxj+5jrtxEIUXIzZXZze0pjT0d9yXjrKXszvaQXLJb20oWJLer657a2/7Kf2PxHrXLtT/X/BqdPYv8acejyX9bsq00z9xXLVjiWtLtJLzwo53LTtMzaUJmOAfE02IwL0ZTQTg38slxuVyHfQb9/CzC0v8n0T4J5fyiIq4j6SJy8luwo8sHrR5nJW5GIbn6QdrRzPQaiC+D6EKgKyG8FIRrIXc1LPyw9kpgorhakKAgQUGCKizRWwpIxBWHgETfKSARVwYCEpC4DwpIxJWDgESfKSARVxYCEv2lgERceQhI9JUCEnFVIPpFAYm4ahCQ6CFFVQhI9I6iOgQk+kYBibg6IHpBUQ8EJHpEURcEJHpDUR9E1ykgEVcnRKcp6oWARA8o6oboLgUk4uqH6ChFExCdpGgGAhIdpmgKonMUzUF0jKJJiE5RNAsBiQ5SNA3RGYrmIRBCCCGEEEIIIYQQQgihG/cPgeNH1oylU1QAAAAASUVORK5CYII="
              img={<MonetizationOnIcon />}
              heading="Data Scaling"
              paragraph="feature scaling (also known as data normalization) is the method used to standardize the range of features of data. Since, the range of values of data may vary widely, it becomes a necessary step in data preprocessing while using machine learning algorithms."
              link="https://subscription.packtpub.com/book/big_data_and_business_intelligence/9781785889622/3/ch03lvl1sec24/data-scaling-and-normalization"
            />
          </div>
          <div className="attribute__right">
            <Attributes
              img={<MonetizationOnIcon />}
              // img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAkFBMVEUAAAABAQH////5+fkUFBT19fXw8PDz8/P6+vpHR0fq6urn5+ceHh7Y2NhgYGDg4OCtra3Hx8fS0tLCwsLFxcW6urrT09Pd3d20tLSXl5erq6u8vLxsbGxycnKkpKRBQUE7OztOTk5ZWVkzMzMYGBgBAxGIiIglJSVLS0t9fX2dnZ0EBxssLCyFhYWYmJgJEC1KdgtUAAAE+klEQVR4nO3a6XaiShiFYazEIRpkHpQ4pg8ZTpK+/7vrYvigQI0yKeB+f/RamCylHrGKlC39J6EoSFCQoCBBQYKCBAUJChLU/7c+gdYECervrU+gNUGCggSFtYOCBAUJChIUJChIULjHpCCBEEIIIYQQQgghhBBCqIcNuh8kKEAkQSIJEBQkkgBBQSIJEBQkKEAkQYICRBIkKEhQkEgCBAUJChJJgKAgQQEiCRIUJChIJEGCAgQFCQoSSWUgGuBogXBxiSNXRu6Bg9/IHEYHmV9oxdV2fujP/ipz/Md3rfVTZqBvrvomDtW1PHWXjkySLCs5kl41jz/Lj74Rfv4iD6fLG1Ocl3hT/QyMpRmepu3Ft9R3lA9RYjaTR+PvdPDSdJoebBnjFAbbpRIfjOkjZt+WorCEby74exi8r+lTaLZsiseKLW2V0WsqMZsJEpMH5osSkjTiB5L50faLIifhGo/837W+TUe+Uxbr2SYrIS34RZE8kJWwFbaxBIkNk6Wv79XHrmsSg6wEP3De58qP8GFQZC4xPCXBtFc20wWJJ/7BmDPGFt2SWJj8cK4Z6dAGsuw4ji1IzH79dDCNTwwT8dMxZE+S5LB96yWWn+vH9NDTPEvT5+mHYaWsVyt39iIMfCqPhv7JGVPnVxYTJb7ZxHCCh6816KOdlXj2v30/keBL5sLylnthmAv1S5LeXT99xHUtdZ9ZRV1xFV3z57E0cWJZOcPpuv03FJkOb4PSR3NPOcj9inhw+HPp1hDFJfJ3lIPoKDey/IvkDw7vUuscVKkKStxzz68HbY+1+a2na/brmRw998Mhfh2RWLlBlmV5nmEYpqkF6TzbtmU5XEGVoFnQlDeKGo+HvIewCY9dp0lY+KrB64/H4/BsghObhqcYnCs/Zyc4d9sOBqKHQzL56AzP4wMNxvt5ROJFXaqqmmgEHEbEEXrokUcAIpJEKKQSuEQyCU51oEkSPV/8AjR6AogEQgLBQEQwQwRS4MNdLi6TMLMSdmkJtpSer9yf0z1S0kqtKKEIEtMDiWFegl8Q62pzWFOVlZCrSNx67RQqIXFqnoDEeYkTE2ZvJZy7k7h4nji3iEICEpDorQRmzFpW0Tu/n+jrnRXutov8LXqBxEP3JYza/irvmUT5nZq+SeQmimISrew3CfWkROFbK4GCSzy2sOISVRcPvno8TDJdunOZ28CkHcxgCzPZwxR2cYVNzMNdTNrLFbcxj+5jrtxEIUXIzZXZze0pjT0d9yXjrKXszvaQXLJb20oWJLer657a2/7Kf2PxHrXLtT/X/BqdPYv8acejyX9bsq00z9xXLVjiWtLtJLzwo53LTtMzaUJmOAfE02IwL0ZTQTg38slxuVyHfQb9/CzC0v8n0T4J5fyiIq4j6SJy8luwo8sHrR5nJW5GIbn6QdrRzPQaiC+D6EKgKyG8FIRrIXc1LPyw9kpgorhakKAgQUGCKizRWwpIxBWHgETfKSARVwYCEpC4DwpIxJWDgESfKSARVxYCEv2lgERceQhI9JUCEnFVIPpFAYm4ahCQ6CFFVQhI9I6iOgQk+kYBibg6IHpBUQ8EJHpEURcEJHpDUR9E1ykgEVcnRKcp6oWARA8o6oboLgUk4uqH6ChFExCdpGgGAhIdpmgKonMUzUF0jKJJiE5RNAsBiQ5SNA3RGYrmIRBCCCGEEEIIIYQQQgihG/cPgeNH1oylU1QAAAAASUVORK5CYII="
              heading="Model Selection"
              paragraph="the task of selecting a statistical model from a set of candidate models, given data. ... Model selection may also refer to the problem of selecting a few representative models from a large set of computational models for the purpose of decision making or optimization under uncertainty."
              link="https://machinelearningmastery.com/a-gentle-introduction-to-model-selection-for-machine-learning/"
            />
            <Attributes
              img={<MonetizationOnIcon />}
              // img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAkFBMVEUAAAABAQH////5+fkUFBT19fXw8PDz8/P6+vpHR0fq6urn5+ceHh7Y2NhgYGDg4OCtra3Hx8fS0tLCwsLFxcW6urrT09Pd3d20tLSXl5erq6u8vLxsbGxycnKkpKRBQUE7OztOTk5ZWVkzMzMYGBgBAxGIiIglJSVLS0t9fX2dnZ0EBxssLCyFhYWYmJgJEC1KdgtUAAAE+klEQVR4nO3a6XaiShiFYazEIRpkHpQ4pg8ZTpK+/7vrYvigQI0yKeB+f/RamCylHrGKlC39J6EoSFCQoCBBQYKCBAUJChLU/7c+gdYECervrU+gNUGCggSFtYOCBAUJChIUJChIULjHpCCBEEIIIYQQQgghhBBCqIcNuh8kKEAkQSIJEBQkkgBBQSIJEBQkKEAkQYICRBIkKEhQkEgCBAUJChJJgKAgQQEiCRIUJChIJEGCAgQFCQoSSWUgGuBogXBxiSNXRu6Bg9/IHEYHmV9oxdV2fujP/ipz/Md3rfVTZqBvrvomDtW1PHWXjkySLCs5kl41jz/Lj74Rfv4iD6fLG1Ocl3hT/QyMpRmepu3Ft9R3lA9RYjaTR+PvdPDSdJoebBnjFAbbpRIfjOkjZt+WorCEby74exi8r+lTaLZsiseKLW2V0WsqMZsJEpMH5osSkjTiB5L50faLIifhGo/837W+TUe+Uxbr2SYrIS34RZE8kJWwFbaxBIkNk6Wv79XHrmsSg6wEP3De58qP8GFQZC4xPCXBtFc20wWJJ/7BmDPGFt2SWJj8cK4Z6dAGsuw4ji1IzH79dDCNTwwT8dMxZE+S5LB96yWWn+vH9NDTPEvT5+mHYaWsVyt39iIMfCqPhv7JGVPnVxYTJb7ZxHCCh6816KOdlXj2v30/keBL5sLylnthmAv1S5LeXT99xHUtdZ9ZRV1xFV3z57E0cWJZOcPpuv03FJkOb4PSR3NPOcj9inhw+HPp1hDFJfJ3lIPoKDey/IvkDw7vUuscVKkKStxzz68HbY+1+a2na/brmRw998Mhfh2RWLlBlmV5nmEYpqkF6TzbtmU5XEGVoFnQlDeKGo+HvIewCY9dp0lY+KrB64/H4/BsghObhqcYnCs/Zyc4d9sOBqKHQzL56AzP4wMNxvt5ROJFXaqqmmgEHEbEEXrokUcAIpJEKKQSuEQyCU51oEkSPV/8AjR6AogEQgLBQEQwQwRS4MNdLi6TMLMSdmkJtpSer9yf0z1S0kqtKKEIEtMDiWFegl8Q62pzWFOVlZCrSNx67RQqIXFqnoDEeYkTE2ZvJZy7k7h4nji3iEICEpDorQRmzFpW0Tu/n+jrnRXutov8LXqBxEP3JYza/irvmUT5nZq+SeQmimISrew3CfWkROFbK4GCSzy2sOISVRcPvno8TDJdunOZ28CkHcxgCzPZwxR2cYVNzMNdTNrLFbcxj+5jrtxEIUXIzZXZze0pjT0d9yXjrKXszvaQXLJb20oWJLer657a2/7Kf2PxHrXLtT/X/BqdPYv8acejyX9bsq00z9xXLVjiWtLtJLzwo53LTtMzaUJmOAfE02IwL0ZTQTg38slxuVyHfQb9/CzC0v8n0T4J5fyiIq4j6SJy8luwo8sHrR5nJW5GIbn6QdrRzPQaiC+D6EKgKyG8FIRrIXc1LPyw9kpgorhakKAgQUGCKizRWwpIxBWHgETfKSARVwYCEpC4DwpIxJWDgESfKSARVxYCEv2lgERceQhI9JUCEnFVIPpFAYm4ahCQ6CFFVQhI9I6iOgQk+kYBibg6IHpBUQ8EJHpEURcEJHpDUR9E1ykgEVcnRKcp6oWARA8o6oboLgUk4uqH6ChFExCdpGgGAhIdpmgKonMUzUF0jKJJiE5RNAsBiQ5SNA3RGYrmIRBCCCGEEEIIIYQQQgihG/cPgeNH1oylU1QAAAAASUVORK5CYII="
              heading="Model Tuning"
              paragraph="it is usually a trial-and-error process by which you change some hyperparameters (for example, the number of trees in a tree-based algorithm or the value of alpha in a linear algorithm), run the algorithm on the data again, then compare its performance on your validation set in order to determine which set of hyperparameters results in the most accurate model."
              link="https://www.analyticsvidhya.com/blog/2021/04/evaluating-machine-learning-models-hyperparameter-tuning/"
            />
            <Attributes
              img={<MonetizationOnIcon />}
              // img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAkFBMVEUAAAABAQH////5+fkUFBT19fXw8PDz8/P6+vpHR0fq6urn5+ceHh7Y2NhgYGDg4OCtra3Hx8fS0tLCwsLFxcW6urrT09Pd3d20tLSXl5erq6u8vLxsbGxycnKkpKRBQUE7OztOTk5ZWVkzMzMYGBgBAxGIiIglJSVLS0t9fX2dnZ0EBxssLCyFhYWYmJgJEC1KdgtUAAAE+klEQVR4nO3a6XaiShiFYazEIRpkHpQ4pg8ZTpK+/7vrYvigQI0yKeB+f/RamCylHrGKlC39J6EoSFCQoCBBQYKCBAUJChLU/7c+gdYECervrU+gNUGCggSFtYOCBAUJChIUJChIULjHpCCBEEIIIYQQQgghhBBCqIcNuh8kKEAkQSIJEBQkkgBBQSIJEBQkKEAkQYICRBIkKEhQkEgCBAUJChJJgKAgQQEiCRIUJChIJEGCAgQFCQoSSWUgGuBogXBxiSNXRu6Bg9/IHEYHmV9oxdV2fujP/ipz/Md3rfVTZqBvrvomDtW1PHWXjkySLCs5kl41jz/Lj74Rfv4iD6fLG1Ocl3hT/QyMpRmepu3Ft9R3lA9RYjaTR+PvdPDSdJoebBnjFAbbpRIfjOkjZt+WorCEby74exi8r+lTaLZsiseKLW2V0WsqMZsJEpMH5osSkjTiB5L50faLIifhGo/837W+TUe+Uxbr2SYrIS34RZE8kJWwFbaxBIkNk6Wv79XHrmsSg6wEP3De58qP8GFQZC4xPCXBtFc20wWJJ/7BmDPGFt2SWJj8cK4Z6dAGsuw4ji1IzH79dDCNTwwT8dMxZE+S5LB96yWWn+vH9NDTPEvT5+mHYaWsVyt39iIMfCqPhv7JGVPnVxYTJb7ZxHCCh6816KOdlXj2v30/keBL5sLylnthmAv1S5LeXT99xHUtdZ9ZRV1xFV3z57E0cWJZOcPpuv03FJkOb4PSR3NPOcj9inhw+HPp1hDFJfJ3lIPoKDey/IvkDw7vUuscVKkKStxzz68HbY+1+a2na/brmRw998Mhfh2RWLlBlmV5nmEYpqkF6TzbtmU5XEGVoFnQlDeKGo+HvIewCY9dp0lY+KrB64/H4/BsghObhqcYnCs/Zyc4d9sOBqKHQzL56AzP4wMNxvt5ROJFXaqqmmgEHEbEEXrokUcAIpJEKKQSuEQyCU51oEkSPV/8AjR6AogEQgLBQEQwQwRS4MNdLi6TMLMSdmkJtpSer9yf0z1S0kqtKKEIEtMDiWFegl8Q62pzWFOVlZCrSNx67RQqIXFqnoDEeYkTE2ZvJZy7k7h4nji3iEICEpDorQRmzFpW0Tu/n+jrnRXutov8LXqBxEP3JYza/irvmUT5nZq+SeQmimISrew3CfWkROFbK4GCSzy2sOISVRcPvno8TDJdunOZ28CkHcxgCzPZwxR2cYVNzMNdTNrLFbcxj+5jrtxEIUXIzZXZze0pjT0d9yXjrKXszvaQXLJb20oWJLer657a2/7Kf2PxHrXLtT/X/BqdPYv8acejyX9bsq00z9xXLVjiWtLtJLzwo53LTtMzaUJmOAfE02IwL0ZTQTg38slxuVyHfQb9/CzC0v8n0T4J5fyiIq4j6SJy8luwo8sHrR5nJW5GIbn6QdrRzPQaiC+D6EKgKyG8FIRrIXc1LPyw9kpgorhakKAgQUGCKizRWwpIxBWHgETfKSARVwYCEpC4DwpIxJWDgESfKSARVxYCEv2lgERceQhI9JUCEnFVIPpFAYm4ahCQ6CFFVQhI9I6iOgQk+kYBibg6IHpBUQ8EJHpEURcEJHpDUR9E1ykgEVcnRKcp6oWARA8o6oboLgUk4uqH6ChFExCdpGgGAhIdpmgKonMUzUF0jKJJiE5RNAsBiQ5SNA3RGYrmIRBCCCGEEEIIIYQQQgihG/cPgeNH1oylU1QAAAAASUVORK5CYII="
              heading="Model Validation"
              paragraph="the process by which model outputs are (systematically) compared to independent real-world observations to judge the quantitative and qualitative correspondence with reality. In statistics, model validation is the task of confirming that the outputs of a statistical model are acceptable with respect to the real data-generating process."
              link="https://www.kaggle.com/dansbecker/model-validation"
            />
          </div>
        </div>

        <div className="home__visual">
          <div className="visual__left">
            <Graph name="Graph 1" />
            <Graph name="Graph 2" />
            <Graph name="Graph 3" />
            <Graph name="Graph 4" />
            <div className="visual__button1">Learn More</div>
          </div>
          <div className="visual__right">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>First Graph</h3>
            <p>
              Visual Studio Code is a source-code editor made by Microsoft for
              Windows, Linux and macOS. Features include support for debugging,
              syntax highlighting, intelligent code completion, snippets, code
              refactoring, and embedded Git
            </p>
            <div className="visual__button2">Learn More</div>
          </div>
        </div>
      </div>
      <div className="aboutUs__coders">
        <AboutUs
          name="Supreeth Athreyas"
          img="/Images/Supreeth.jfif"
          paragraph="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a"
        />
        <AboutUs
          name="Thanmai B K"
          img="/Images/thanmai.jpeg"
          paragraph="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a"
        />
        <AboutUs
          name="Varshini Kashyap"
          img="/Images/varshini.jfif"
          paragraph="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a"
        />
        <AboutUs
          name="Sukesh S Bairy"
          img="/Images/Sukesh.jfif"
          paragraph="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a"
        />
      </div>
    </div>
  );
}

export default Home;
