import React, { useCallback, useContext, useEffect, useState } from "react";
// import Logo from "../components/core/Logo";
// import BtnNext from "../components/core/BtnNext";
// import BtnRigis from "../components/core/BtnBack";
import { navigate } from "@reach/router";
import { Helmet } from "react-helmet";
import Button from "../components/core/Button";
import Logo from "../components/core/Logo";
import { apiFecthLogin } from "../api/login";
// import Cookies from "js-cookie";
// import { apiFetchUserByUserId } from "../api/users";
// import Loading from "../components/core/Loading";
// import { storesContext } from "../context";

export default function Login() {
  //   const { authenticationStore } = useContext(storesContext);

  //   const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  //   const [isNotSigned, setIsNotSigned] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   function onAuthen() {
  //     setIsCheckingAuth(false);
  //     setIsNotSigned(false);
  //   }

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      const users = await apiFecthLogin(data);
      console.log(users);
    } catch (e) {
      console.log(e);
    }
  };

  //   const checkAuth = useCallback(async () => {
  //     try {
  //       if (Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME)) {
  //         await authenticationStore.me();
  //         if (authenticationStore.currentUser) {
  //           const usr = await apiFetchUserByUserId(
  //             authenticationStore.currentUserId
  //           );
  //           if (usr.data.role_id !== "3") {
  //             navigate("/admin");
  //           } else {
  //             if (!usr.data.is_member) {
  //               navigate("/wait");
  //             } else {
  //               navigate("/home");
  //             }
  //           }
  //           onAuthen();

  //           setIsCheckingAuth(false);
  //           return;
  //         }
  //       }

  //       setIsNotSigned(true);
  //       setIsCheckingAuth(false);
  //     } catch (error) {
  //       console.error(error);
  //       setIsNotSigned(true);
  //       setIsCheckingAuth(false);
  //     }
  //   }, [authenticationStore]);

  //   useEffect(() => {
  //     checkAuth();
  //   }, [checkAuth]);

  //   if (isCheckingAuth) {
  //     return <Loading />;
  //   }
  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>MODBIKE</title>
      </Helmet>

      <div className="flex flex-1 overflow-auto align-middle min-h-screen">
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
        </div>
      </div>
    </div>
  );
}
