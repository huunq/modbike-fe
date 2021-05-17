import { navigate } from "@reach/router";
import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../components/core/Logo";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-auto align-middle miFn-h-screen">
        <div className="w-full my-auto text-center">
          <div className="mb-5">
            <h2>Welcome to</h2>
            <h2>MODBIKE</h2>
          </div>
          <Logo />
          <div onClick={() => navigate("/borrow")} className="borrow p-5 my-5">
            <h3>Tap Here</h3>
            <h3>for Borrow Bike</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
