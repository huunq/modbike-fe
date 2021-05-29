import { navigate } from "@reach/router";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { apiFetchMe } from "../api/login";
import Headers from "./core/Headers";
import Loading from "./core/Loading";

export default function UserMainLayout(props) {
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
      <Headers />

      <div className="max-w-screen-xl mx-auto min-h-screen">
        <div className="flex flex-1">
          <Child {...props} />
        </div>
      </div>
    </div>
  );
}
