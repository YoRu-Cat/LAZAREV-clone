function navAnimation() {
  var nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "19vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: "0vh",
      duration: 0.2,
    });
  });
}
function page2Animation() {
  var rightElem = document.querySelectorAll(".right-elem");
  rightElem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 60,
        y: dets.y - elem.getBoundingClientRect().y - 170,
      });
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
function page7VideoAnimation() {
  var section = document.querySelectorAll(".sec-right");
  section.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      console.log(elem.childNodes[3]);
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      console.log(elem.childNodes[3]);
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page9Animations() {
  var data = document.querySelectorAll("details");
  var details = document.querySelectorAll(".heading");
  details.forEach(function (elem) {
    // elem.childNodes[3].style.opacity = 1;
    elem.addEventListener("click", function () {
      data.forEach(function (dataEl) {
        if (dataEl.open) {
          elem.childNodes[3].style.display = "block";
          elem.childNodes[5].style.display = "none";
        } else {
          elem.childNodes[3].style.display = "none";
          elem.childNodes[5].style.display = "block";
        }
      });
    });
  });
}

// details.forEach(function (elem) {
//   elem.addEventListener("click", function () {
//     if (elem.childNodes[3].style.opacity === 1) {
//       elem.childNodes[3].style.opacity = 0;
//     }
//   });
// });
// if (data.open) {
//   console.log(elem);
//   details.forEach(function (elem1) {
//     elem1.childNodes[5].style.opacity = 0;
//     elem1.childNodes[3].style.opacity = 1;
//   });
// }

// gsap.to("#btm6-part2 h4", {
//   x: 150,
//   duration: 1,
//   stagger: {
//     amount: -0.5,
//   },
//   scrollTrigger: {
//     trigger: "#btm6-part2",
//     scroller: "body",
//     markers: true,
//     start: "top 140%",
//     end: "top -60%",
//     scrub: true,
//   },
// });
function page11Animations() {
  gsap.from("#btm6-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "body",
      // markers: true,
      scrub: true,
      start: "top 90%",
      end: "top -10%",
    },
  });
  gsap.from("#btm6-part3 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part3",
      scroller: "body",
      // markers: true,
      scrub: true,
      start: "top 90%",
      end: "top -10%",
    },
  });
  gsap.from("#btm6-part4 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part4",
      scroller: "body",
      // markers: true,
      scrub: true,
      start: "top 90%",
      end: "top -10%",
    },
  });
}
page11Animations();
page9Animations();
page7VideoAnimation();
// navAnimation();
// page2Animation();
// page3VideoAnimation();
