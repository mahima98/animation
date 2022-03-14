import React from "react";

export default function Layer(props) {
  return (
    <div
      className={
        "layer flex justify-center items-center " + props.color + " " + props.id
      }
    >
      {props.children}
    </div>
  );
}
