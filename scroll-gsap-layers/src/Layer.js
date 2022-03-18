import React from "react";

export default function Layer({children , name, id}) {
  return (
    <div className={"layer " + " " + id + " " + name}>{children}</div>
  );
}
