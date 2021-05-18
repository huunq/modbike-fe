import React, { useEffect } from "react";
import _ from "lodash";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TablePagination,
  CircularProgress,
} from "@material-ui/core";
import { useTable, usePagination, useRowSelect } from "react-table";

export default function DataTable(props) {
  const { columns, data, rowsPerPageOptions, onSelect } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    gotoPage,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowPaths },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: props.pageSize || 50 },
    },
    usePagination,
    useRowSelect
  );

  function hadleChangeRowsPerPage(event) {
    setPageSize(+event.target.value);
    props.onChangeRowsPerPage(+event.target.value);
    gotoPage(0);
  }

  function handleChangePage(event, page) {
    props.onChangePage(page);
    gotoPage(page);
  }

  useEffect(() => {
    onSelect({ selectedFlatRows, selectedRowPaths });
  }, [selectedFlatRows]);

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  if (props.loading) {
    return (
      <div className="flex justify-center items-center text-primary h-64">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  return (
    <>
      <Table size="small" {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              className="font-kanit"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="bg-gray-200 text-gray-600 font-normal text-left p-4 text-sm"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map(
            (row) =>
              prepareRow(row) || (
                <TableRow
                  className="hover:bg-gray-100"
                  {...row.getRowProps()}
                  onClick={console.log(row.getRowProps())}
                >
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        className={`${
                          cell.column.className ? cell.column.className : ""
                        }`}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              )
          )}
        </TableBody>
      </Table>

      {_.size(props.data) === 0 && !props.didSearch && (
        <div>
          <div className="flex justify-center items-center h-64 text-gray-600">
            <div className="text-center">
              <p className="mb-2">ไม่มีข้อมูล</p>
              <p className="text-sm">กรุณา ค้นหาข้อมูล หรือ สร้างใหม่</p>
            </div>
          </div>
        </div>
      )}

      {_.size(props.data) === 0 && props.searchText && props.didSearch && (
        <div>
          <div className="flex justify-center items-center h-64 text-gray-600">
            <div className="text-center">
              <p className="mb-2">ไม่พบผลการค้นหา "{props.searchText}"</p>
            </div>
          </div>
        </div>
      )}

      <TablePagination
        page={props.page || pageIndex}
        component="div"
        rowsPerPage={props.pageSize || pageSize}
        count={props.total || data.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={hadleChangeRowsPerPage}
        labelRowsPerPage={`จำนวนต่อหน้า: `}
        rowsPerPageOptions={rowsPerPageOptions || [50, 80, 100, 150]}
        labelDisplayedRows={({ from, to, count }) =>
          `รายการที่ ${from}-${to} จากทั้งหมด ${count}`
        }
      />
    </>
  );
}

/**
|--------------------------------------------------
| Default Props
|--------------------------------------------------
*/
DataTable.defaultProps = {
  data: [],
  onSelect: () => {},
  onChangeRowsPerPage: () => {},
  onChangePage: () => {},
};
