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

    let layer1 = document.querySelector('.layer1');
    let layer2 = document.querySelector('.layer2');
    let layer3 = document.querySelector('.layer3');
    let layer4 = document.querySelector('.layer4');
    let layer5 = document.querySelector('.layer5');

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

    let layer2TextAnimation = [
      {
        name: "text1",
        translateX: "300"
      },
      {
        name: "text2",
        translateX: "200"
      },
      {
        name: "text3",
        translateX: "200"
      }
    ]

    window.addEventListener("scroll", () => {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight -  document.documentElement.clientHeight);
      let roundOffScrollPerc = Math.round(scrollPercentage * 100)
      let drawLength = pathLength * scrollPercentage; //Length to offset the dashes
      path.style.strokeDashoffset = pathLength - drawLength; //Draw in reverse

      console.log('clinet-height', document.documentElement.clientHeight)
      console.log('roundOffScrollPerc', roundOffScrollPerc)
     
      // layer 1 animations - Digital
      if (roundOffScrollPerc > 1) {
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
          })
          gsap.fromTo(circle1, {opacity: 0}, {opacity:1})
        }
      }else {
        circle1.style.fill = "none";
      } 
      // layer 2 animations - QA
      if (roundOffScrollPerc > 23) {
        circle2.style.fill = "#D36226";
        layer2TextAnimation.forEach(element => {
          for (let i = 1; i < 4; i++) {
            gsap.to(`.${element.name}`, {
              scrollTrigger: {
                trigger: `.${element.name}`,
                start: "top top",
                end: "+=400",
                scrub: 1,
                toggleActions: "restart pause reverse pause",
              },
              x: `${element.translateX}`,
              duration: 1.5
            })
          }
        });

        if(countCircle2 === 0 ){
          countCircle2 = countCircle2 + 1;
          gsap.to(circle2, {
            scrollTrigger: {
              trigger: circle2,
              start: "top 300px",
              end: "top 400px",
              scrub: true,
              onEnter: () => {
                layer2.classList.add('layer2-Gradient');
                
              },
              onLeaveBack: () => {
                circle2.style.fill = "none";
                layer2.classList.remove('layer2-Gradient');
              },
            }
          })
          gsap.fromTo(circle2, {opacity: 0}, {opacity:1})
          section2.classList.remove('hidden')
          gsap.fromTo(".layer2", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
         }

      }
      else {
        circle2.style.fill = "none";
      } 
      // layer 3 animations - Video
      if (roundOffScrollPerc > 43) {
        circle3.style.fill = "#4D2682";
        layer3.classList.add('layer3-Gradient');

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
                layer3.classList.remove('layer3-Gradient');
              },
            }
          })

          section3.classList.remove('hidden')
          gsap.fromTo(".layer3-right", {opacity: 0}, {opacity: 1, delay: 0.5, duration: 0.8})
          gsap.fromTo(".layer3-left", {opacity: 0}, {opacity: 1, delay: 0.5, duration: 1})

          gsap.fromTo(".layer3", {opacity: 0}, {opacity: 1, ease:'none'})
        }
      }
      else {
        circle3.style.fill = "none";
      }
      // layer 4 animations - print
      if (roundOffScrollPerc > 63) {
        circle4.style.fill = "#F68720";
        layer4.classList.add('layer4-Gradient');

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
                circle5.style.fill = "none";
                layer4.classList.remove('layer4-Gradient');
              },
            }
          })

          section4.classList.remove('hidden')
          gsap.fromTo(".layer4-right", {opacity: 0, x: -100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.5})
          gsap.fromTo(".layer4-left", {opacity: 0, x: 100}, {opacity: 1, x: 0, delay: 0.5, duration: 1.8})        

          gsap.fromTo(".layer4", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
        }
      }else {
        circle4.style.fill = "none";
      }
      
      // layer 5 animations - CGI
      if (roundOffScrollPerc > 88) {
        circle5.style.fill = "#81BC40";
        section5.classList.remove('hidden')
        layer5.classList.add('layer5-Gradient')

        if(countCircle5 === 0 ){
          countCircle5 = countCircle5 + 1;
          gsap.fromTo(".layer5", {opacity: 0}, {opacity: 1, duration: 1.0, ease:'none'})
          for (let index = 1; index < 4; index++) {
            gsap.fromTo(`.layer5-right-img${index}`, {opacity: 0,  y: 100}, {opacity: 1, y: 0, delay: `0.${index+2}` , duration: `${index}`})
          }
        }

      } else {
        circle5.style.fill = "none";
        layer5.classList.remove('layer5-Gradient')
      }
    });

    gsap.fromTo(".section1", {opacity: 0, x: -100}, {opacity: 1, duration: 1, x: 0, color: "#00B5DC"})
  }, []);

  return (
    <div className="App overflow-hidden">
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
      <Layer name="layer1 z-0">
        <Sections styling="section1 flex justify-center items-center text-[2em] md:text-[5em] font-extrabold">
          Digital!
        </Sections>
      </Layer>
      <Layer name="layer2 z-0">
        <Sections styling="section2 hidden">
          <div className="flex flex-col gap-6 justify-center items-center text-xl font-extrabold">
            <div className="text-[2em] md:text-[5em] font-extrabold">QA</div>
            <div className="text text1 mt-20">Lorem ipsum.</div>
            <div className="text text2">dolor sit amet.</div>
            <div className="text text3">Et veniam accusantium.</div>
          </div>
         
        </Sections>
      </Layer>
      <Layer name="layer3 z-0 ">
        <Sections styling="section3 hidden flex justify-center items-center gap-8">
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none px-4">
          <div className="layer3-right flex items-center justify-center">
            <div className="text-[2em] md:text-[5em] font-extrabold">VIDEO</div>
          </div>
          <img className="layer3-left" src="https://picsum.photos/500/300?grayscale" alt="example"></img>
        </div>
        </Sections>
      </Layer>
      <Layer name="layer4 z-0">
        <Sections styling="section4 hidden flex justify-center items-center gap-8">
          <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none px-4">
            <img className="layer4-right" src="https://picsum.photos/500/300?grayscale" alt="example"></img>
            <div className="layer4-left flex items-center justify-center">
              <div className="text-[2em] md:text-[5em] font-extrabold">Print</div>
            </div>
          </div>
        </Sections>
      </Layer>
      <Layer name="layer5 z-0">
      <Sections styling="section5 hidden flex justify-center items-center gap-8">
          <div className="grid grid-rows-3 md:grid-cols-2 md:grid-rows-none px-4">
            <div className="flex flex-col row-span-2 md:grid-row-none gap-2">
              <img className="layer5-right-img1" src="https://picsum.photos/500/200?grayscale" alt="example"></img>
              <img className="layer5-right-img2" src="https://picsum.photos/500/200?grayscale" alt="example"></img>
              <img className="layer5-right-img3" src="https://picsum.photos/500/200?grayscale" alt="example"></img>
            </div>
            <div className="layer5-left row-span-1 md:row-span-auto flex items-center justify-center">
              <div className="text-[2em] md:text-[5em] font-extrabold">CGI</div>
            </div>
          </div>
        </Sections>
      </Layer>
    </div>
  );
}

export default App;



