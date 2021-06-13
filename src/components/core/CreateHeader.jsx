import React from "react";
import PrimaryButton from "../core/PrimaryButton";

export default function CreateHeader(props) {
  return (
    <div className="border-b">
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          <p className="text-lg mt-2">รายการ{props.title}</p>
          <div className="text-right">
            <PrimaryButton
              className="px-10"
              type="submit"
              onClick={props.onClick}
            >
              สร้าง
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}