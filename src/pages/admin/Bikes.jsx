import React, { useState, useCallback, useEffect } from "react";
import DataTable from "../../components/core/DataTable";
import EditHeader from "../../components/core/EditHeader";
import Loading from "../../components/core/Loading";
import { apiFetchBikes } from "../../api/bikes";

export default function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchBikes();
    setBikes(data);
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

  const columns = [
    {
      Header: "รหัสจักรยาน",
      accessor: "bike_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "ประเภทจักรยาน",
      accessor: "bike_type_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "สาขา",
      accessor: "branch_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
  ];

  return (
    <div className="w-full">
      <EditHeader title="จักรยาน" />
      <DataTable
        data={bikes}
        columns={columns}
        pageSize={prefixNameRowPerPage}
        onChangeRowsPerPage={setPrefixNameRowPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
      />
    </div>
  );
}
