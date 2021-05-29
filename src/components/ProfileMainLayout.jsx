import { navigate } from "@reach/router";
import Cookies from "js-cookie";
import React, { useCallback, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { apiFetchMe } from "../api/login";
import HeadersProfile from "./core/HeadersProfile";
import Loading from "./core/Loading";

export default function ProfileMainLayout(props) {
  const { component: Child } = props;

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      if (Cookies.get("auth")) {
        const { data } = await apiFetchMe(Cookies.get("auth"));
        if (data.is_admin) {
          navigate("/admin/users");
        }
      } else {
        setIsNotSigned(true);
      }
      setIsCheckingAuth(false);
    } catch (error) {
      console.error(error);
      setIsNotSigned(true);
      setIsCheckingAuth(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <Loading />;
  }

  if (isNotSigned) {
    return navigate("/");
  }
  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>MODBIKE</title>
      </Helmet>
      <HeadersProfile />

      <div className="max-w-screen-xl min-h-screen">
        <div className="flex">
          <Child {...props} />
        </div>
      </div>
    </div>
  );
}
