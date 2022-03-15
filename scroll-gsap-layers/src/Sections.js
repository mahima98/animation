import React from "react";

export default function Sections({children, styling}) {
  return <section className={styling}>{children}</section>;
}
