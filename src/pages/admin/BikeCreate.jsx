import React, { useState, useCallback, useEffect } from "react";
import ErrorModal from "../../components/core/ErrorModal";
import CreateSuccessModal from "../../components/core/CreateSuccessModal";
import { apiBikeTypes, apiCreateBike, apiBranch } from "../../api/bikes";
import Select from "react-select";
import { Field, Form, Formik } from "formik";
import Loading from "../../components/core/Loading";
import { navigate } from "@reach/router";
import EditHeader from "../../components/core/EditHeader";
import Input from "../../components/core/Input";
import _ from "lodash";

export default function BikeCreate() {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
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
    setBikeTypes(mt);
    setBranchId(mb);

    const temp = {
      machine: "",
    };
    setBike(temp);
    setIsFetch(false);
  }, []);

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
      bike_pic: "",
    };

    try {
      await apiCreateBike(temp);
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
                    defaultValue={bikeTypes[0]}
                  />
                </div>
                <div className="my-3">
                  <Select
                    value={branchId.find(
                      (option) => option.value === option.value
                    )}
                    options={branchId}
                    onChange={(option) => handleB(option.value)}
                    defaultValue={branchId[0]}
                  />
                </div>
                <div className="col-4 mx-auto">
                  <button value="submit" className="buttonBack btn-block">
                    สร้างจักรยาน
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
