import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Header from "./Header";
import Layer from "./Layer";
import Sections from "./Sections";
import "./index.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });

  useEffect(() => {
    let circle1 = document.querySelector(".circle1");
    let circle2 = document.querySelector(".circle2");
    let circle3 = document.querySelector(".circle3");
    let circle4 = document.querySelector(".circle4");
    let circle5 = document.querySelector(".circle5");

    let layerTwo = document.querySelector('.layerTwo');
    let layerThree = document.querySelector('.layerThree');
    let layerFour = document.querySelector('.layerFour');
    let layerFive = document.querySelector('.layerFive');

    let section2 = document.querySelector('.section2');
    let section3 = document.querySelector('.section3');
    let section4 = document.querySelector('.section4');
    let section5 = document.querySelector('.section5');

    let path = document.querySelector("path");
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;

    let countCircle5 = 0;
    let countCircle4 = 0;
    let countCircle3 = 0;
    let countCircle2 = 0;
    let countCircle1 = 0;

    circle1.style.fill = "none";
    circle2.style.fill = "none";
    circle3.style.fill = "none";
    circle4.style.fill = "none";
    circle5.style.fill = "none";

    // let tl2 = gsap.timeline();
    // tl2.to("#scrollingText", {
    //   x:1000,
    //   duration:50,
    //   repeat:-1,
    //   ease:'linear'
    // })
    // let tl = gsap.timeline();
    // tl.to('#scrollingText', {
    //   xPercent:15,
    //   scrollTrigger:{
    //     trigger:"#scrollingText",
    //     scrub:1,
    //     markers: true
    //   }
    // })

    window.addEventListener("scroll", () => {
      // what % down is it ?
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight -  document.documentElement.clientHeight);
      let roundOff = Math.round(scrollPercentage * 100)
      //Length to offset the dashes
      let drawLength = pathLength * scrollPercentage;
      //Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength;
     
      // layer 1 animations
      if (roundOff > 3) {
        circle1.style.fill = "#00B5DC";
        if(countCircle1 === 0 ){
          countCircle1 = countCircle1 + 1;         
          gsap.to(circle1, {
            scrollTrigger: {
              trigger: circle1,
              start: "top 100px",
              end: "top 300px",
              scrub: true,
              onEnter: () => {
              },
              onLeaveBack: () => {
                circle1.style.fill = "none";
              },
            }
        })}
      } 
      // layer 2 animations
      if (roundOff > 23) {
        circle2.style.fill = "#D36226";
        if(countCircle2 === 0 ){
          countCircle2 = countCircle2 + 1;
          gsap.to(circle2, {
            scrollTrigger: {
              trigger: circle2,
              start: "top 300px",
              end: "top 400px",
              scrub: true,
              onEnter: () => {
                layerTwo.classList.add('layerTwoGradient');
                
              },
              onLeaveBack: () => {
                circle2.style.fill = "none";
                layerTwo.classList.remove('layerTwoGradient');
              },
            }
          })

          section2.classList.remove('hidden')
          gsap.fromTo(".layerTwo-right", {opacity: 0, x: -100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.5})
          gsap.fromTo(".layerTwo-left", {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.8})

          gsap.fromTo(".layerTwo", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
      }
      }
      // layer 3 animations
      if (roundOff > 43) {
        circle3.style.fill = "#4D2682";
        layerThree.classList.add('layerThreeGradient');
        if(countCircle3 === 0 ){
          countCircle3 = countCircle3 + 1;
          gsap.to(circle3, {
            scrollTrigger: {
              trigger: circle3,
              start: "top 600px",
              end: "top 690px",
              scrub: true,
              onEnter: () => {
              },
              onLeaveBack: () => {
                circle3.style.fill = "none";
                layerThree.classList.remove('layerThreeGradient');
              },
            }
          })

          section3.classList.remove('hidden')
          gsap.fromTo(".layerThree-right", {opacity: 0, x: -100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.8})
          gsap.fromTo(".layerThree-left", {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.5})

          gsap.fromTo(".layerThree", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
        }
      }
      // layer 4 animations
      if (roundOff > 63) {
        console.log(roundOff)
        circle4.style.fill = "#F68720";
        layerFour.classList.add('bg-[#F68720]');

        if(countCircle4 === 0 ){
          countCircle4 = countCircle4 + 1;
          gsap.to(circle4, {
            scrollTrigger: {
              trigger: circle4,
              start: "top 700px",
              end: "top 400px",
              scrub: true,
              onEnter: () => {
              },
              onLeaveBack: () => {
                circle4.style.fill = "none";
                layerFour.classList.remove('bg-[#F68720]');
              }             
            }
          })

          section4.classList.remove('hidden')
          gsap.fromTo(".layerFour-right", {opacity: 0, x: -100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.5})
          gsap.fromTo(".layerFour-left", {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.8})        

          gsap.fromTo(".layerFour", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
        }
      }
      // layer 5 animations
      if (roundOff > 88) {
        console.log(roundOff)
        circle5.style.fill = "#81BC40";
        if(countCircle5 === 0 ){
          countCircle5 = countCircle5 + 1;
          layerFive.classList.add('bg-[#81BC40]');
          gsap.to(circle5, {
            scrollTrigger: {
              trigger: circle5,
              start: "top 750px",
              end: "top 590px",
              scrub: true,
              onEnter: () => {
                console.log('enter');
                layerFive.classList.add('bg-[#81BC40]')
              },
              onLeave: () => {
                console.log('leave');
              },
              onLeaveBack: () => {
                console.log('on leave back -')
                console.log(circle5)
                circle5.style.fill = "none";
                layerFive.classList.remove('bg-[#81BC40]');
              },
              markers: true
            }
          })

          section5.classList.remove('hidden')
          gsap.fromTo(".layerFive-right", {opacity: 0, x: -100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.5})
          gsap.fromTo(".layerFive-left", {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.8})

          gsap.fromTo(".layerFive", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
        }
      }
    });

    gsap.fromTo(".layerOne", {opacity: 0}, {opacity: 1, duration: 2})
    gsap.fromTo(".sectionOne", {opacity: 0, x: -100}, {opacity: 1, duration: 1, x: 0, color: "#00B5DC"})
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div className="line-container z-10">
        <svg width="200" height="702" viewBox="0 0 155 702" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M105.5 0.5C-195 186 364.5 468.5 61 701.5" stroke="black" strokeWidth="2"/>
          <circle className="circle1" cx="79" cy="14" r="14" fill="none"/>
          <circle className="circle2" cx="14" cy="160" r="14" fill="none"/>
          <circle className="circle3" cx="70" cy="297" r="14" fill="none"/>
          <circle className="circle4" cx="140" cy="449" r="14" fill="none"/>
          <circle className="circle5" cx="126" cy="627" r="14" fill="none"/>
        </svg>
      </div>
      <Layer name="layerOne" color="">
        <Sections styling="sectionOne flex justify-center items-center text-[5em] font-extrabold">
          Digital!
        </Sections>
      </Layer>
      <Layer name="layerTwo">
        <Sections styling="section2 hidden">
          <div className="flex justify-center items-center gap-8">
            <img className="layerTwo-right" src="https://picsum.photos/500/300?grayscale" alt="example"></img>
            <div className="layerTwo-left text-[5em] font-extrabold">QA</div>
          </div>
          <div className="para text-md mt-10" id="scrollingText">
          Lorem ipsum dolor sit amet. Et veniam accusantium qui voluptate fugit et eveniet veniam est aliquam aliquid. 
          </div>
        </Sections>
      </Layer>
      <Layer name="layerThree">
        <Sections styling="section3 hidden flex justify-center items-center gap-8">
          <div className="layerThree-right text-7xl">VIDEO</div>
          <img className="layerThree-left" src="https://picsum.photos/500/300?grayscale" alt="example"></img>
        </Sections>
      </Layer>
      <Layer name="layerFour">
        <Sections styling="section4 hidden flex justify-center items-center gap-8">
          <img className="layerFour-right" src="https://picsum.photos/500/300?grayscale" alt="example"></img>
          <div className="layerFour-left text-7xl">Print</div>
        </Sections>
      </Layer>
      <Layer name="layerFive">
      <Sections styling="section5 hidden flex justify-center items-center gap-8">
          <img className="layerFive-right" src="https://picsum.photos/500/300?grayscale" alt="example"></img>
          <div className="layerFive-left text-7xl">CGI</div>
        </Sections>
      </Layer>

     
    </div>
  );
}

export default App;



