import React, { useState } from "react";
import EditHeader from "../../components/core/EditHeader";
import { IconButton, Tooltip } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import DataTable from "../../components/core/DataTable";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const handleRemove = (id) => {
    // setRemoveId(id);
    // setIsOpenConfirm(true);
    console.log(id);
  };

  const columns = [
    {
      Header: "ชื่อ",
      accessor: "fname",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "นามสกุล",
      accessor: "lname",
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
    // {
    //   Header: "ลบข้อมูล",
    //   accessor: "profile_id",
    //   Cell: ({ cell: { value } }) => (
    //     <Tooltip title="ลบ">
    //       <IconButton onClick={() => handleRemove(value)}>
    //         <CloseRounded />
    //       </IconButton>
    //     </Tooltip>
    //   ),
    // },
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
