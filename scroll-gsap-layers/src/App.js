import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layer from "./Layer";
import Sections from "./Sections";
import { useEffect, useRef } from "react";
import Header from "./Header";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

function App() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  gsap.defaults({ ease: "none" });

  useEffect(() => {
    let path = document.querySelector("path");
    console.log(path);
    let pathLength = path.getTotalLength();
    console.log(pathLength);

    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;

    window.addEventListener("scroll", () => {
      // what % down is it ?
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      console.log("scrollPercentage", scrollPercentage);
      //Length to offset the dashes
      let drawLength = pathLength * scrollPercentage;
      //Draw in rverse
      path.style.strokeDashoffset = pathLength - drawLength;

      let circle1 = document.querySelector(".circle1");
      let circle2 = document.querySelector(".circle2");
      let circle3 = document.querySelector(".circle3");
      let circle4 = document.querySelector(".circle4");
      let circle5 = document.querySelector(".circle5");
      if (scrollPercentage >= "0.11") {
        circle1.style.fill = "#D36226";
      }
      if (scrollPercentage >= "0.27") {
        circle2.style.fill = "#2F8355";
      }
      if (scrollPercentage >= "0.45") {
        circle3.style.fill = "#4D2682";
      }
      if (scrollPercentage >= "0.65") {
        circle4.style.fill = "#982246";
      }
      if (scrollPercentage >= "0.8") {
        circle5.style.fill = "#BA1719";
      }

      // switch (scrollPercentage) {
      //   case 0.11846496106785318:
      //     console.log("1111111111111111");
      //     circle1.style.fill = "#D36226";
      //     break;
      //   case 0.27:
      //     circle2.style.fill = "#2F8355";
      //     break;
      //   case 0.35:
      //     circle3.style.fill = "#4D2682";
      //     break;
      //   case 0.62:
      //     circle4.style.fill = "#982246";
      //     break;
      //   case 0.72:
      //     circle5.style.fill = "#BA1719";
      //     break;
      //   default:
      //     break;
      // }
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div className="line-container">
        <svg
          width="147"
          height="881"
          viewBox="0 0 147 881"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M130 0V117V127.5L20 257.5L130 396L20 558L130 686V880.5"
            stroke="black"
            strokeWidth="4"
          />
          <ellipse
            className="circle1"
            cx="128.5"
            cy="126.5"
            rx="14.5"
            ry="15.5"
            fill="white"
          />
          <circle
            className="circle2"
            cx="16.5"
            cy="255.5"
            r="16.5"
            fill="white"
          />
          <circle
            className="circle3"
            cx="126.5"
            cy="396.5"
            r="16.5"
            fill="white"
          />
          <circle
            className="circle4"
            cx="20.5"
            cy="558.5"
            r="16.5"
            fill="white"
          />
          <circle
            className="circle5"
            cx="130.5"
            cy="682.5"
            r="16.5"
            fill="white"
          />
        </svg>
      </div>
      <Layer name="one" color="bg-orange-400">
        <Sections styling="flex justify-center items-center">
          Layer one
        </Sections>
      </Layer>
      <Layer name="two">
        <Sections styling="flex justify-center items-center">
          Layer two
        </Sections>
      </Layer>
    </div>
  );
}

export default App;
