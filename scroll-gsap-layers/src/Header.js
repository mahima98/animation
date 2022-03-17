import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
  useEffect(() => {
    gsap.fromTo(".header", {opacity: 0}, {opacity: 1, duration: 1})
  }, [])
  
  return (
    <div className="header fixed w-full flex items-center justify-between h-12 bg-white/20 border-b-1 z-10">
      <div className="px-4 py-2 text-md text-gray-700">Home</div>
      <div className="px-4 py-2 text-md text-gray-700">About</div>
    </div>
  );
}
