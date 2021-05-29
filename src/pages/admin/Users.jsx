import React, { useState, useCallback, useEffect } from "react";
import EditHeader from "../../components/core/EditHeader";
import { IconButton, Tooltip } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import DataTable from "../../components/core/DataTable";
import { apiFetchAllUser } from "../../api/users";
import Loading from "../../components/core/Loading";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchAllUser();
    setUsers(data);
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
      Header: "ชื่อ",
      accessor: "f_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "นามสกุล",
      accessor: "l_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "รหัสประจำตัวนักศึกษา",
      accessor: "student_id",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "คณะ",
      accessor: "faculty",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
  ];

  return (
    <div className="w-full">
      <EditHeader title="สมาชิก" />
      <DataTable
        data={users}
        columns={columns}
        pageSize={prefixNameRowPerPage}
        onChangeRowsPerPage={setPrefixNameRowPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
      />
    </div>
  );
}
