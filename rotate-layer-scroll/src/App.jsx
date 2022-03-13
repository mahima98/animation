import { gsap } from "gsap";
import "./App.css";

function App() {

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

    gsap.to(".filled-text, .outline-text", {
      scrollTrigger: {
        trigger: ".filled-text, .outline-text",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: window.pageYOffset / 10,
    });

    gsap.to(".layerImage", {
      scrollTrigger: {
        trigger: ".layerImage",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
      x: -150,
    });

    console.log(window.pageYOffset);
  });

  console.log("2", window.pageYOffset);

  return (
    <div className="App">
      <h2 className="filled-text">SELECTIVE FOCUS</h2>
      <h2 className="outline-text">SELECTIVE FOCUS</h2>
      <img
        id="divId"
        className="layerImage"
        src="https://picsum.photos/400/300.jpg"
        alt=""
      ></img>
    </div>
  );
}

export default App;
