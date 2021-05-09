import React, { useCallback, useContext, useEffect, useState } from "react";
// import Logo from "../components/core/Logo";
// import BtnNext from "../components/core/BtnNext";
// import BtnRigis from "../components/core/BtnBack";
import { navigate } from "@reach/router";
import { Helmet } from "react-helmet";
import Button from "../components/core/Button";
// import Cookies from "js-cookie";
// import { apiFetchUserByUserId } from "../api/users";
// import Loading from "../components/core/Loading";
// import { storesContext } from "../context";

export default function Login() {
  //   const { authenticationStore } = useContext(storesContext);

  //   const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  //   const [isNotSigned, setIsNotSigned] = useState(false);

  //   function onAuthen() {
  //     setIsCheckingAuth(false);
  //     setIsNotSigned(false);
  //   }

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

      <div className="flex flex-1 overflow-auto">
        <div
          className="w-0 lg:w-2/3"
          style={{
            backgroundImage: `url('/image/LoginWallpaper.png')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full lg:w-1/3 px-2">
          {/* <Logo /> */}
          <h1>HELLO</h1>
          <Button
            text="Login via SSO"
            onClick={() =>
              navigate(
                `https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://ksf.sit.kmutt.ac.th/checking&state=ksf_login`
              )
            }
          />
          <Button
            text="Register via SSO"
            onClick={() =>
              navigate(
                `https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://ksf.sit.kmutt.ac.th/checking&state=ksf_register`
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
