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

    setBID(temp.machine_group_id);
    setTypeId(temp.machine_type_id);

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
      mt.push({
        value: data.branch_id,
        label: data.branch_name,
      });
    });
    setBranchId(mb);

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
      bike_name: data.bike_name,
      bike_type_id: typeId,
      detail: data.detail,
      bike_eq: data.bike_eq,
      branch_id: bID,
      bike_pic: data.bike_pic,
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
      <Formik initialValues={bike} onSubmit={handleSubmit}>
        {(formikProps) => (
          <>
            <EditHeader title="สร้างเครื่องจักรยาน" />
            <Form className="overflow-y-auto">
              <div className="p-6 overflow-y-auto min-h-screen">
                <Field name="bike_name">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="ชื่อเครื่องออกกำลังกาย"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>
                <Field name="detail">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="รายละเอียด"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>
                <Field name="bike_eq">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="เลขครุภัณฑ์"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>

                <div className="my-3">
                  <Select
                    value={bikeTypes.find(
                      (option) => option.value === option.value
                    )}
                    options={bikeTypes}
                    onChange={(option) => handleType(option.value)}
                    defaultValue={bikeTypes[typeId]}
                  />
                </div>
                <div className="my-3">
                  <Select
                    value={branchId.find(
                      (option) => option.value === option.value
                    )}
                    options={branchId}
                    onChange={(option) => handleB(option.value)}
                    defaultValue={branchId[bID]}
                  />
                </div>
                <div className="col-4 mx-auto">
                  <button value="submit" className="buttonBack btn-block">
                    แก้ไขจักรยาน
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
