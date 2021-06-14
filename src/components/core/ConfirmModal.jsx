import React from "react";
import { Dialog } from "@material-ui/core";

/**
|--------------------------------------------------
| COMPONENT
|--------------------------------------------------
*/
import DeleteButton from "./DeleteButton";
import GhostButton from "./GhostButton";

export default function ConfirmModal(props) {
  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  return (
    <Dialog maxWidth="xs" fullWidth open={props.open} onClose={props.onClose}>
      <div className="bg-white">
        <div className="p-6">
          <p>{props.title ? props.title : "ยืนยันการลบข้อมูล ?"}</p>
        </div>

        <div className="flex justify-end items-center p-4 bg-gray-100">
          <div>
            <GhostButton onClick={props.onClose}>ยกเลิก</GhostButton>
            <DeleteButton
              data-cy="confirm-delete-button"
              className="ml-2"
              onClick={props.onConfirm}
            >
              {props.confirmTitle ? props.confirmTitle : "ลบ"}
            </DeleteButton>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

/**
|--------------------------------------------------
| DEFAULT PROPS
|--------------------------------------------------
*/
ConfirmModal.defaultProps = {
  open: false,
  title: "",
  confirmTitle: "",
  onConfirm: () => {},
  onClose: () => {},
};
