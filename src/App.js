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
import MainLayout from "./components/MainLayout";
import Users from "./pages/admin/Users";
import Bikes from "./pages/admin/Bikes";
import Register from "./pages/Register";
import BikeCreate from "./pages/admin/BikeCreate";
import BikeEdit from "./pages/admin/BikeEdit";

function App() {
  return (
    <Router>
      <Login path="/" />
      <Register path="/register" />
      <UserMainLayout component={Home} path="/home" />
      <UserMainLayout component={Borrow} path="/borrow" />

      <ProfileMainLayout component={Profile} path="/profile" />
      <ProfileMainLayout component={History} path="/history" />

      <MainLayout component={Users} path="/admin/users" />
      <MainLayout component={Bikes} path="/admin/bikes" />
      <MainLayout component={BikeCreate} path="/admin/bikes/create" />
      <MainLayout component={BikeEdit} path="/admin/bikes/:id/edit" />
    </Router>
  );
}

export default App;
