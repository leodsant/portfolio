document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin, Observer)

  ScrollSmoother.create({ smooth: 2, effects: true });

  const mobileQuery = window.matchMedia("(max-width: 932px)");
  const cabeca = document.querySelector("#cabeca");
  const threejs = document.querySelector("canvas");
  const jsImg = document.querySelector("#js");

  function handleTabletChange(e) {
    if (e.matches) {

      cabeca.addEventListener("touchstart", () => {
        gsap.to(cabeca, {
          scale: 1.2,
          ease: "power2.out",
          duration: 0.5
        });
      });

      cabeca.addEventListener("touchend", () => {
        gsap.to(cabeca, {
          scale: 1,
          ease: "power2.out",
          delay: 0.1
        });
      });

      jsImg.addEventListener("touchstart", () => {
        gsap.to(jsImg, {
          scale: 1.1,
          ease: "power2.out",
          duration: 0.5
        });
      });

      jsImg.addEventListener("touchend", () => {
        gsap.to(jsImg, {
          scale: 1,
          ease: "power2.out",
          delay: 0.1
        });
      });

      threejs.classList.add("hidden");

      ScrollTrigger.refresh();




    } else {


      window.addEventListener("mousemove", (e) => {
        gsap.to(cabeca, {
          x: e.x / 20,
          y: e.y / 20
        })
      });

      threejs.classList.remove("hidden");

      gsap.from("#card2", {
        y: 1000,
        scrollTrigger: {
          trigger: "#section-cards",
          start: "top 5%",
          markers: false,
          scrub: 2,
          pin: true
        }
      });

    }
  }

  mobileQuery.addEventListener("change", handleTabletChange);

  handleTabletChange(mobileQuery);



  gsap.fromTo("#arrow-hero", {
    y: -5,
  }, {
    y: 5,
    repeat: -1,
    duration: 0.7,
    yoyo: true,
    ease: "power1.inOut"
  });

  gsap.to("#scroll", {
    rotation: 200,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll",
      start: "top center",
      end: "bottom top",
      scrub: 2,
      markers: false
    }
  });





  let tl = gsap.timeline({
    repeat: -1
  });

  tl.to(".linha", {
    x: "-100%",
    duration: 10,
    ease: "none"
  });

  const carrossel = document.querySelector(".carroussel");

  carrossel.addEventListener("mouseenter", (e) => {
    tl.pause();
  });

  carrossel.addEventListener("mouseleave", (e) => {
    tl.resume();
  });

  let js = SplitText.create(".js-text", {
    type: "lines"
  });

  gsap.from(js.lines, {
    autoAlpha: 0,
    stagger: 0.2,
    ease: "power4.in",
    scrollTrigger: {
      markers: false,
      trigger: ".js-text",
      start: "top 70%"
    }
  });

  let hero = gsap.timeline({
    delay: 0.5
  });

  hero.from(".hero-title", {
    opacity: 0,
    duration: 0.5,
    y: 10
  });

  hero.from(".hero-h2", {
    opacity: 0,
    duration: 0.5,
    y: 10,
    stagger: 0.2
  });

  hero.from("#scroll-hero", {
    opacity: 0,
    duration: 0.5
  });

  hero.from("#cabeca", {
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
    ease: "back.out"
  });

  const btnTl1 = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: -1
  });

  btnTl1.to(".arrow", {
    x: 60,
    ease: "power2.inOut",
    duration: 0.8
  }, 0);

  btnTl1.to(".btn", {
    scale: 1.05
  }, 0)

  const btn = document.querySelector(".btn");

  btn.addEventListener("mouseenter", () => {
    btnTl1.play();
  });

  btn.addEventListener("mouseleave", () => {
    btnTl1.reverse();
  });

  const btnTl2 = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: -1
  });

  btnTl2.to(".arrow2", {
    x: 60,
    ease: "power2.inOut",
    duration: 0.8
  }, 0);

  btnTl2.to(".btn2", {
    scale: 1.05
  }, 0)

  const btn2 = document.querySelector(".btn2");

  btn2.addEventListener("mouseenter", () => {
    btnTl2.play();
  });

  btn2.addEventListener("mouseleave", () => {
    btnTl2.reverse();
  });



  const svgTl1 = gsap.timeline({
    paused: true
  });

  const link1 = document.querySelector("#link1");

  svgTl1.from("#path1", {
    drawSVG: "50% 50%",
    duration: 0.5,
    ease: "power2.inOut"
  });

  link1.addEventListener("mouseenter", () => {
    svgTl1.play();
  });

  link1.addEventListener("mouseleave", () => {
    svgTl1.reverse();
  });

  const svgTl2 = gsap.timeline({
    paused: true
  });

  const link2 = document.querySelector("#link2");

  svgTl2.from("#path2", {
    drawSVG: "50% 50%",
    duration: 0.5,
    ease: "power2.inOut"
  });

  link2.addEventListener("mouseenter", () => {
    svgTl2.play();
  });

  link2.addEventListener("mouseleave", () => {
    svgTl2.reverse();
  });

  const svgTl3 = gsap.timeline({
    paused: true
  });

  const link3 = document.querySelector("#link3");

  svgTl3.from("#path3", {
    drawSVG: "50% 50%",
    duration: 0.5,
    ease: "power2.inOut"
  });

  link3.addEventListener("mouseenter", () => {
    svgTl3.play();
  });

  link3.addEventListener("mouseleave", () => {
    svgTl3.reverse();
  });

  document.addEventListener("mousemove", (cursor) => {
    gsap.to("#cursor", {
      x: cursor.x,
      y: cursor.y,
      ease: "back.out",
      duration: 1
    })
  })


  gsap.utils.toArray(".a").forEach(link => {
    Observer.create({
      target: link,
      type: "pointer",

      onHover(self) {
        gsap.to("#cursor", {
          scale: 0,
          overwrite: "auto"
        });
      },

      onHoverEnd(self) {
        gsap.to("#cursor", {
          scale: 1,
          overwrite: "auto"
        });
      }
    });
  });


});