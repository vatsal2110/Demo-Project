import React from "react";
import Graph from "./Graph";

function Balance() {
  return (
    <div className="balance">
      <div className="balanceheader">
        <p className="balanceheading">Balance</p>
        <p className="balanceduration">
          Monthly
          <img
            className="balancecon"
            src="https://lh3.googleusercontent.com/proxy/Eg7d9VZvgFpoyOum1NU6Nh3wkcFbYq1odBs4jo5iOYQRVNvU_aro1xMjBTSJN3wbFx8yggODiRxhGnwzUJLq9ndbwvHEoKn5_nBZbU3klj0"
          ></img>
        </p>
      </div>
      <hr></hr>
      <div className="balanceitems">
        <div className="bitem1">
          <p className="bitemheading">Earnings</p>
          <p className="stats">
            43.41%<span class="bitembutton"> +2.5% </span>
          </p>
        </div>
        <div className="bitem2">
          <p className="bitemheading">Sales Value</p>
          <p className="stats">
            $95,422<span class="bitembutton"> +13.5% </span>
          </p>
        </div>
      </div>
      <Graph />
    </div>
  );
}

export default Balance;
