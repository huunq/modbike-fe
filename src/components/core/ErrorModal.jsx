import React from "react";
import { Dialog } from "@material-ui/core";
import { ErrorRounded } from "@material-ui/icons";

export default function ErrorModal(props) {
  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  return (
    <Dialog fullWidth maxWidth="xs" open={props.open}>
      <div className="bg-white overflow-hidden">
        <div className="py-10 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-6xl">
              <ErrorRounded
                className="mb-10"
                color="inherit"
                fontSize="inherit"
              />
            </div>
            <p className="text-2xl tracking-tight">ขออภัย เกิดข้อผิดพลาด</p>
            <p className="text-gray-600 font-sarabun">{props.error}</p>
          </div>
        </div>
        <div className="flex justify-end bg-gray-100 p-4">
          <p className="text-sm cursor-pointer" onClick={props.onClose}>
            ปิดหน้าต่าง
          </p>
        </div>
      </div>
    </Dialog>
  );
}
