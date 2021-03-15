import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainPage_container" id="home">
      <h1>BODVAR'S BAKERY</h1>
      <p>A BRAWLHALLA THEMED CLOUD BAKERY</p>
      <a
        href="https://www.instagram.com/bodvar_bakes/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="mainPage_btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <span>Order Now</span>
          </Button>
        </div>
      </a>
    </div>
  );
}

export default MainPage;
