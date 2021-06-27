import React from "react";
import Button from "./Button";

export default function CreateHeader(props) {
  return (
    <div className="border-b">
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          <p className="text-lg mt-2">รายการ{props.title}</p>
          <div className="text-right">
            <button
              className="px-5 py-2 createButton"
              type="submit"
              onClick={props.onClick}
            >
              สร้าง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}