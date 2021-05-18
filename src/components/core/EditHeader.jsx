import React from "react";

export default function EditHeader(props) {
  return (
    <div className="border-b">
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          <p className="text-lg mt-2">รายการ{props.title}</p>
        </div>
      </div>
    </div>
  );
}
