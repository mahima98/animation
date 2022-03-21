import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
  useEffect(() => {
    gsap.fromTo(".header", {opacity: 0}, {opacity: 1, duration: 1})
  }, [])
  
  return (
    <div className="header z-[100] fixed w-full">
      <div className="w-[1200px] mx-auto flex items-center justify-between h-16 border-b-1 border-b backdrop-filter backdrop-blur-xs border-gray-200">
        <div className="px-4 py-2 text-3xl font-extrabold text-orange-700">Prodigious</div>
        <div className="px-4 py-2 text-md text-gray-500">About</div>
      </div>
    </div>
  );
}
