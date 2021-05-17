import React from "react";
import { Helmet } from "react-helmet";
import HeadersProfile from "./core/HeadersProfile";
// import { storesContext } from "../context";
// import Cookies from "js-cookie";

// import Sidebar from "./Sidebar";
// import Loading from "./core/Loading";
// import { navigate } from "@reach/router";

export default function ProfileMainLayout(props) {
  const { component: Child } = props;

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
  //           if (usr.data.role_id === "3") {
  //             navigate("/nopermission");
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

  //   if (isNotSigned) {
  //     return navigate(
  //       "https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://ksf.sit.kmutt.ac.th/checking&state=ksf_login"
  //     );
  //   }
  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>MODBIKE</title>
      </Helmet>
      <HeadersProfile />

      <div className="max-w-screen-xl min-h-screen">
        {/* <Sidebar
            currentTab={props.currentTab}
            currentSubTab={props.currentSubTab}
          /> */}
        <div className="flex">
          <Child {...props} />
        </div>
      </div>
    </div>
  );
}
