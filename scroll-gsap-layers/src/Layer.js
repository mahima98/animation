import React from "react";

export default function Layer({children , name,  color, id}) {
  return (
    <div className={"layer " + color + " " + id + " " + name}>{children}</div>
  );
}
