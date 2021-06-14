import React from "react";
import classnames from "classnames";

export default function GhostButton(props) {
  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  function getClassName() {
    return classnames(
      "px-4 py-2 rounded text-sm text-black hover:bg-gray-200 hover:text-black",
      props.className
    );
  }

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  return (
    <button
      className={getClassName()}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

GhostButton.defaultProps = {
  type: "button",
  onClick: () => {},
};