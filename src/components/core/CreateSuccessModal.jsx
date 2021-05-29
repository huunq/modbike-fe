import React from "react";
import { Dialog } from "@material-ui/core";
import { CheckCircleRounded } from "@material-ui/icons";

export default function CreateSuccessModal(props) {
  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  return (
    <Dialog fullWidth maxWidth="xs" open={props.open} onClose={props.onClose}>
      <div className="bg-white overflow-hidden">
        {/* CONTENTS ──────────────────────────────────────────────────────────────────────────────── */}
        <div className="py-10 flex items-center justify-center">
          <div className="text-center">
            <CheckCircleRounded
              className="text-green-500 mx-auto mb-4"
              style={{ width: "8rem", height: "8rem" }}
            />
            <p className="text-2xl tracking-tight">สำเร็จ</p>
          </div>
        </div>
        {/* CONTENTS ──────────────────────────────────────────────────────────────────────────────── */}
      </div>
    </Dialog>
  );
}
