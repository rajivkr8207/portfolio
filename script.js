const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navlink = document.getElementById("navlink");
gsap.registerPlugin();
const tl = gsap.timeline();
menu.addEventListener("click", () => {
  gsap.to("header nav #menu", {
    display: "none",
    duration: 0,
  });
  gsap.to("header nav #close", {
    display: "block",
    duration: 0.1,
  });
  tl.to("header nav #navlinks", {
    top: "100%",
    duration: 0.5,
    zIndex: "100",
  });

  tl.from("header nav ul li ", {
    y: -100,
    duration: 0.2,
    stagger: 0.5,
    opacity: 0,
  });
});
close.addEventListener("click", () => {
  gsap.to("header nav #menu", {
    display: "block",
    duration: 0,
  });
  gsap.to("header nav #close", {
    display: "none",
    duration: 0.1,
  });
  gsap.to("header nav #navlinks", {
    top: "-327%",
    duration: 0.5,
  });
});
tl.from("header", {
  y: -100,
  duration: 0.5,
  opacity: 0,
});
tl.from("#herosection .centerstyle .left_side", {
  x: -1000,
  duration: 1,
  // scrollTrigger: '#herosection .centerstyle .left_side'
});
tl.from("#herosection .centerstyle .right_side", {
  x: 1000,
  duration: 1,
  rotate: 320,
  // scrollTrigger: '#herosection .centerstyle .right_side'
});
gsap.to("#herosection .centerstyle div img", {
  opacity: 10,
  duration: 1,
  y: 30,
  delay: 0.4,
  repeat: -1,
  yoyo: true,
});

const cursor = document.getElementsByClassName("cursor_movement");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    display: "block",
    x: e.x,
    y: e.y,
    duration: 0.5,
    ease: "back.out",
  });
});

gsap.from("#contact_section #contact_row .left_side", {
  duration: 1,
  x: -1000,
  delay: 0.4,
  // scrollTrigger: '#contact_section #contact_row .left_side',
});
gsap.from("#contact_section #contact_row .right_side", {
  duration: 1,
  x: 1000,
  delay: 0.4,
  // scrollTrigger: '#contact_section #contact_row .right_side',
});
gsap.to("#contact_section #contact_row .left_side img", {
  opacity: 10,
  duration: 1,
  y: 30,
  delay: 0.4,
  repeat: -1,
  yoyo: true,
});

gsap.from("#skill_section .main_content_65 .left_col_side ", {
  x: -1000,
  duration: 1,
  // scrollTrigger: '#skill_section .main_content_65 .left_col_side '
});
gsap.from("#skill_section .main_content_65 .right_col_side ", {
  x: 1000,
  duration: 1,
  scrub: 1,
  // scrollTrigger: '#skill_section .main_content_65 .right_col_side '
});

const date = new Date().getFullYear();
document.getElementById("this_year").innerHTML = date;
