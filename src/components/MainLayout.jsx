import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";
import Cookies from "js-cookie";

import Loading from "./core/Loading";
import { navigate } from "@reach/router";
import { apiFetchMe } from "../api/login";

export default function MainLayout(props) {
  const { component: Child } = props;

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      if (Cookies.get("auth")) {
        const { data } = await apiFetchMe(Cookies.get("auth"));
        if (!data.is_admin) {
          navigate("/home");
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

      <div className="flex flex-1 overflow-auto">
        <Sidebar
          currentTab={props.currentTab}
          currentSubTab={props.currentSubTab}
        />
        <div className="flex flex-1">
          <Child {...props} />
        </div>
      </div>
    </div>
  );
}
