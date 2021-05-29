import React, { useState } from "react";

import { navigate } from "@reach/router";
import { Helmet } from "react-helmet";
import Button from "../components/core/Button";
import Logo from "../components/core/Logo";
import { apiFecthLogin } from "../api/login";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = async () => {
    const body = {
      username: username,
      password: password,
    };

    try {
      const { data } = await apiFecthLogin(body);
      if (data.message === "complete") {
        Cookies.set("auth", data.user.username);
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
      setErrorText("Username or password wrong");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>MODBIKE</title>
      </Helmet>

      <div className="flex flex-1 overflow-auto align-middle min-h-screen px-5">
        <div
          className="w-0 lg:w-2/3"
          style={{
            backgroundImage: `url('/image/LoginWallpaper.png')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full lg:w-1/3 my-auto">
          <Logo />
          <h3 className="text-center mod-bike-home">MODBIKE</h3>
          <div className="my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="my-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button text="Login" onClick={() => handleLogin()} />
          <span>
            Login first time ? <a href="/register">Register</a>
          </span>
          <p className="text-red-600 text-center">{errorText}</p>
        </div>
      </div>
    </div>
  );
}
