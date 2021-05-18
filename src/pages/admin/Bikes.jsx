import React, { useState } from "react";
import DataTable from "../../components/core/DataTable";
import EditHeader from "../../components/core/EditHeader";

export default function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

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
