import React from "react";
import classnames from "classnames";

export default function Input(props) {
  function getClassName() {
    return classnames(
      "shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control",
      props.className,
      {
        "border-red-500 bg-red-100 focus:border-red-500":
          typeof props.error === "string",
      }
    );
  }

  return (
    <div>
      {props.label && <p className="text-sm">{props.label}</p>}
      <input
        className={getClassName()}
        {...props.inputProps}
        data-cy={props["data-cy"]}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
      {typeof props.error === "string" && (
        <p className="text-red-500 text-xs">{props.error}</p>
      )}
    </div>
  );
}
