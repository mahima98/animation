import React from "react";

export default function Header(props) {
  return (
    <div className="header fixed w-full flex justify-between">
      <div className="px-4 py-2 text-xl text-white">Home</div>
      <div className="px-4 py-2 text-xl text-white">About</div>
    </div>
  );
}
