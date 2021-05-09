import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import UserMainLayout from "./components/UserMainLayout";

function App() {
  return (
    <Router>
      <UserMainLayout component={Login} path="/" />
      {/* <Login path="/" /> */}
    </Router>
  );
}

export default App;
