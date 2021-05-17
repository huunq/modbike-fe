import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import Login from "./pages/Login";
import UserMainLayout from "./components/UserMainLayout";
import ProfileMainLayout from "./components/ProfileMainLayout";
import Home from "./pages/users/Home";
import Borrow from "./pages/users/Borrow";
import Profile from "./pages/users/Profile";
import History from "./pages/users/History";

function App() {
  return (
    <Router>
      <Login path="/" />
      <UserMainLayout component={Home} path="/home" />
      <UserMainLayout component={Borrow} path="/borrow" />

      <ProfileMainLayout component={Profile} path="/profile" />
      <ProfileMainLayout component={History} path="/history" />
    </Router>
  );
}

export default App;
