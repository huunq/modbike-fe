import React, { useState } from "react";
import { apiBikeBorrow, apiFetchBikeById } from "../../api/bikes";
import Button from "../../components/core/Button";
import QrReader from "react-qr-reader";
import Bikes from "../admin/Bikes";
import { navigate } from "@reach/router";
import dayjs from "dayjs";
import Cookies from "js-cookie";

export default function Borrow() {
  const [bikeId, setBikeId] = useState("");
  const [bike, setBike] = useState();

  const handleSubmit = async () => {
    try {
      const { data } = await apiFetchBikeById(bikeId);
      console.log(data);
      setBike(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleScan = (data) => {
    if (data) {
      setBikeId(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const handleReq = async () => {
    const time = dayjs().format();
    const data = {
      bike_id: bikeId,
      student_id: Cookies.get("auth"),
      start_date: time,
      finish_date: "",
      return_ontime: false,
    };
    try {
      const result = await apiBikeBorrow(bikeId, data);
      if (result.status === 200) {
        navigate("/home");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleZero = () => {
    setBikeId();
    setBike();
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-auto align-middle miFn-h-screen">
        <div className="w-full my-auto text-center">
          {!bike ? (
            <div>
              <input
                type="text"
                className="form-control my-3"
                placeholder="BIKE ID"
                onChange={(e) => setBikeId(e.target.value)}
              />
              <Button text="Borrow a bike" onClick={() => handleSubmit()} />
              <div className="my-3">
                <div className="row ">
                  <div className="col-5">
                    <hr />
                  </div>
                  <div className="col-2" style={{ color: "#9D9D9D" }}>
                    OR
                  </div>
                  <div className="col-5">
                    <hr />
                  </div>
                </div>
              </div>
              <div>
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ) : (
            <div>
              <h2>Bike ID: {bike.bike_name}</h2>
              <h3>ที่อยู่: {bike.branch_name}</h3>
              <h5>ประเภท: {bike.bike_type_name}</h5>
              <Button text="ยืนยันการยืม" onClick={() => handleReq()} />
              <Button text="ย้อนกลับ" onClick={() => handleZero()} />
            </div>
          )}
          {/* <div className="mb-5">
            <h2>Welcome to</h2>
            <h2>MODBIKE</h2>
          </div> */}
          {/* <Logo /> */}
          {/* <div onClick={() => navigate("/borrow")} className="borrow p-5 my-5">
            <h3>Tap Here</h3>
            <h3>for Borrow Bike</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}
