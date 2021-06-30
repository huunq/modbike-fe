import React, { useState, useCallback, useEffect } from "react";
import ConfirmModal from "../../components/core/ConfirmModal";
import CreateSuccessModal from "../../components/core/CreateSuccessModal";
import ErrorModal from "../../components/core/ErrorModal";
import Input from "../../components/core/Input";
import _ from "lodash";
import Loading from "../../components/core/Loading";
import { Field, Form, Formik } from "formik";
import EditHeader from "../../components/core/EditHeader";
import Select from "react-select";
import { navigate } from "@reach/router";
import {
  apiBikeDeleteById,
  apiBikeEditById,
  apiBikeTypes,
  apiBranch,
  apiFetchBikeById,
} from "../../api/bikes";

export default function BikeEdit(props) {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [bike, setBike] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [bikeTypes, setBikeTypes] = useState();
  const [branchId, setBranchId] = useState();

  const [typeId, setTypeId] = useState();
  const [bID, setBID] = useState();

  const [b_name, setB_name] = useState("");
  const [b_detail, setB_detail] = useState("");
  const [b_eq, setB_eq] = useState("");

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const bikeType = await apiBikeTypes();
    const branchs = await apiBranch();

    const { data } = await apiFetchBikeById(props.id);

    const temp = {
      bike_name: data.bike_name,
      bike_type_id: parseInt(data.bike_type_id),
      detail: data.detail,
      bike_eq: data.bike_eq,
      branch_id: parseInt(data.branch_id),
      bike_pic: data.bike_pic,
    };

    setBID(data.branch_id);
    setTypeId(data.bike_type_id);

    const mt = [];
    _.map(bikeType.data, (data, i) => {
      mt.push({
        value: data.bike_type_id,
        label: data.bike_type_name,
      });
    });
    setBikeTypes(mt);

    const mb = [];

    _.map(branchs.data, (data, i) => {
      mb.push({
        value: data.branch_id,
        label: data.branch_name,
      });
    });
    setBranchId(mb);
    setB_name(data.bike_name);
    setB_detail(data.detail);
    setB_eq(data.bike_eq);

    setBike(temp);
    setIsFetch(false);
  }, [props]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }

  const handleSubmit = async (data) => {
    const temp = {
      bike_name: b_name,
      bike_type_id: typeId,
      detail: b_detail,
      bike_eq: b_eq,
      branch_id: bID,
      bike_pic: "",
    };

    try {
      await apiBikeEditById(temp, props.id);
      setIsOpenSuccessModal(true);
      setTimeout(() => {
        navigate("/admin/bikes");
      }, 2000);
    } catch (err) {
      setIsOpenErrorModal(true);
    }
  };

  const handleDelete = async () => {
    try {
      await apiBikeDeleteById(props.id);
      setIsOpenSuccessModal(true);
      setTimeout(() => {
        navigate("/admin/bikes");
      }, 2000);
    } catch (err) {
      setIsOpenErrorModal(true);
    }
  };

  const handleType = (data) => {
    setTypeId(data);
  };

  const handleB = (data) => {
    setBID(data);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "bike_name":
        setB_name(e.target.value);
        break;
      case "bike_detail":
        setB_detail(e.target.value);
        break;

      case "bike_eq":
        setB_eq(e.target.value);
        break;
      default:
        console.log(e);
        break;
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <ErrorModal
        open={isOpenErrorModal}
        onClose={() => setIsOpenErrorModal(false)}
      />
      <CreateSuccessModal
        open={isOpenSuccessModal}
        onClose={() => setIsOpenSuccessModal(false)}
      />
      <ConfirmModal
        open={isOpenConfirm}
        onClose={() => setIsOpenConfirm(false)}
        onConfirm={() => handleDelete()}
      />
      <EditHeader title="แก้ไขจักรยาน" />
      <div className="w-full p-5">
        {bike && (
          <>
            <div className="my-2">
              <p className="text-sm">ชื่อ</p>
              <input
                value={b_name}
                className="form-control"
                name="bike_name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="my-2">
              <p className="text-sm">รายละเอียด</p>
              <input
                value={b_detail}
                className="form-control"
                name="bike_detail"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="my-2">
              <p className="text-sm">เลขครุภัณฑ์</p>
              <input
                value={b_eq}
                className="form-control"
                name="bike_eq"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </>
        )}

        {bikeTypes && (
         <>
         <div className="my-3">
         <p className="text-sm">ประเภทจักรยาน</p>
                 <Select
                   value={bikeTypes.find(
                     (option) => option.value == typeId
                   )}
                   options={bikeTypes}
                   onChange={(option) => setTypeId(option.value)}
                  // defaultValue={bikeTypes[0]}
                 />
               </div>
               <div className="my-3">
               <p className="text-sm">สาขา</p>
                 <Select
                   value={branchId.find(
                     (option) => option.value == bID
                   )}
                   options={branchId}
                   onChange={(option) => setBID(option.value)}
                  // defaultValue={branchId[0]}
                 />
               </div>
               </>
        )}
      </div>
      <div className="flex">
        <div className="col-2 mx-auto">
          <button
            value="submit"
            className="buttonLogin btn-block mr-2"
            onClick={() => handleSubmit()}
          >
            แก้ไขจักรยาน
          </button>
        </div>
        <div className="col-2 mx-auto">
          <button
            className="buttonDelete btn-block"
            onClick={() => setIsOpenConfirm(true)}
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}
