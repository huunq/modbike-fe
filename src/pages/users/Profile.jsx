import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { navigate } from "@reach/router";
import Button from "../../components/core/Button";
import Cookies from "js-cookie";

export default function Profile() {
  const handleLogout = () => {
    Cookies.remove("auth");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="w-full min-h-screen">
        <div
          className="historyButton flex justify-between px-4 py-2"
          onClick={() => navigate("/history")}
        >
          <p style={{ fontSize: "18px" }}>History</p>
          <ArrowForwardIosIcon style={{ color: "#9d9d9d9e" }} />
        </div>
        <div className="mt-10 mb-0 mx-3">
          <Button text="Log Out" onClick={() => handleLogout()} />
        </div>
      </div>
    </>
  );
}
