import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Login path="/" />
    </Router>
  );
}

export default App;
