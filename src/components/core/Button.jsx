import React from "react";

export default function Button(props) {
  return (
    <button type="button" className="btn-block buttonLogin py-2" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
