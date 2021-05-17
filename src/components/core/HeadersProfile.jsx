import React, { useCallback, useEffect, useState } from "react";
import { navigate } from "@reach/router";

import { AccountCircle } from "@material-ui/icons";

import Loading from "./Loading";

export default function HeadersProfile() {
  //   const [isFetch, setIsFetch] = useState(false);
  const [user, setUser] = useState({
    f_name: "Ryomen",
    l_name: "Sukuna",
    student_id: 60130500106,
    faculty: "School of Information Technology",
    is_canuse: true,
  });
  //   // const { authenticationStore } = useContext(storesContext);

  //   const fetchData = useCallback(async () => {
  //     setIsFetch(true);
  //     const data = await apiFetchUser(authenticationStore.currentUserId);
  //     setUser(data);
  //     setIsFetch(false);
  //   }, []);

  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchData]);

  //   if (isFetch) {
  //     return (
  //       <div className="flex flex-col flex-1 min-h-screen">
  //         <Loading />
  //       </div>
  //     );
  //   }

  return (
    <div className="Profile-header min-w-full py-2">
      <div className="w-1/3 justify-items-center text-center align-middle my-auto">
        <AccountCircle
          style={{ width: "36px", height: "36px" }}
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="w-2/3 flex flex-col">
        <p className="font-head w-full">{user.f_name + "  " + user.l_name}</p>
        <p className="font-normal w-full">{user.student_id}</p>
        <p className="font-small w-full">{user.faculty}</p>
        <p className="font-small w-full">
          Staus: {user.is_canuse ? "Normal" : "Ban"}
        </p>
      </div>
    </div>
  );
}
