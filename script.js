// function loco(){
//     gsap.registerPlugin(ScrollTrigger);
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// }
// loco()

var time = document.querySelector(".tleft");
setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)

function cmf(){
  document.addEventListener("mousemove",function(dets){
    circle = document.querySelector("#minicircle");
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
  
    setTimeout(function(){
      circle.style.transform = `translate(${dets.pageX - width/2}px,${dets.pageY - height/2}px)`
    },20)
    // console.log(dets.pageX);
    // console.log(dets.pageY);
  })
}
cmf();


function page1animation(){
  var tl = gsap.timeline();
  
  tl.from("nav",{
    y:-50,
    delay:0.5,
    stagger:0.1,
    opacity:0,
  })
  .to(".animation h1",{
    y:-10,
    stagger:0.1,
  })
  .to(".animation h5",{
    y:-3,
    delay:-0.3,
  })
  .to(".animationelem1",{
    y:0,
    opacity:1
  })
  .to(".animationelem2",{
    y:0,
    delay:-0.5,
    opacity:1

  })
  gsap.from(".page1footer",{
    y:50,
    opacity:0,
    stagger:0.1,
    delay:2

  })
}
page1animation();

  gsap.from(".page2container .box",{
    scrollTrigger:{
      trigger:`.page2container .box`,
      scroller:`body`,
      end:`bottom 40%`,
      start:`top 80%`,
      scrub:true,
      delay:1,
      // markers:true,
    },
    stagger:0.3,
    x:-70,
    opacity:0
  })


  gsap.from(".page3container .image",{
    scrollTrigger:{
      trigger:`.page3container .image`,
      scroller:`body`,
      end:`bottom 70%`,
      start:`top 80%`,
      scrub:true,
      // markers:true,
    },
    x:-70,
    opacity:0

  })
  gsap.from(".page3container .text",{
    scrollTrigger:{
      trigger:`.page3container .text`,
      scroller:`body`,
      end:`bottom 70%`,
      start:`top 80%`,
      scrub:true,
      // markers:true,
    },
    // x:-70,
    opacity:0,
    stagger:0.1

  })
  gsap.from(".page3 .bottom",{
    scrollTrigger:{
      trigger:`.page3 .bottom`,
      scroller:`body`,
      end:`bottom 80%`,
      start:`top 90%`,
      scrub:true,
      // markers:true,
    },
    // x:-70,
    opacity:0,
    stagger:0.1,
    duration:1.5

  })
  gsap.from("footer",{
    scrollTrigger:{
      trigger:`footer `,
      scroller:`body`,
      end:`10% 80%`,
      start:`10% 90%`,
      scrub:true,
      // markers:true,
    },
    // y:70,
    opacity:0,
    stagger:0.1,
    duration:1.5

  })
