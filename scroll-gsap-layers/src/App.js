import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layer from "./Layer";
import Sections from "./Sections";
import { useEffect } from "react";
import Header from "./Header";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("scroll", function () {
    let layer = document.getElementById("divId");
    layer.innerHTML = window.pageYOffset + "px";
    if (window.pageYOffset < 150) {
      layer.style.clipPath = `polygon(${window.pageYOffset / 10}% ${
        window.pageYOffset / 50
      }%, ${100 - window.pageYOffset / 30}% 0, ${
        100 - window.pageYOffset / 10
      }% 100%, 0% 100%)`;
    }
  });

  useEffect(() => {
    gsap.to(".filled-text, .outline-text", {
      scrollTrigger: {
        trigger: ".filled-text, .outline-text",
        start: "top center",
        end: "top 100px",
        scrub: 1,
      },
      x: -100,
    });

    gsap.to(".layerImage", {
      scrollTrigger: {
        trigger: ".layerImage",
        start: "top center",
        end: "top center",
        scrub: 1,
      },
    });

    gsap.utils.toArray(".layer").forEach((layer, i) => {
      ScrollTrigger.create({
        trigger: layer,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 1 / 4, // snap whole page to the closest section!
    });
  });

  return (
    <div className="App">
      <Header className="z-[99] bg-blue-100"></Header>
      <Layer id="layer-1" color="bg-red-300 h-[100vh]">
        <Sections className="">
          <h2 className="filled-text">SELECTIVE FOCUS</h2>
          <h2 className="outline-text">SELECTIVE FOCUS</h2>
          <img
            id="divId"
            className="layerImage"
            src="https://picsum.photos/400/300.jpg"
            alt=""
          ></img>
        </Sections>
      </Layer>
      <Layer id="layer-2" color="bg-purple-200  h-[100vh]"></Layer>
      <Layer id="layer-3" color="bg-yellow-200 h-[100vh]"></Layer>
    </div>
  );
}

export default App;
