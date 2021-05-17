import React from "react";
import { navigate } from "@reach/router";

import { AccountCircle } from "@material-ui/icons";

export default function Headers() {
  return (
    <div className="App-header">
      <div className="row">
        <div className="col-6 text-center">
          <AccountCircle
            style={{ width: "36px", height: "36px" }}
            onClick={() => navigate("/profile")}
          />
        </div>
        <div className="col-6">
          <h2>MODEBIKE</h2>
        </div>
      </div>
    </div>
  );
}
