const col1 = document.getElementById("col-1");
const profile = document.getElementById("profile");
const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav-links");

const home = document.getElementById("section-1");
const aboutMe = document.getElementById("about-me");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const navHome = document.getElementById("Nav-home");
const navAbout = document.getElementById("Nav-about");
const navProject = document.getElementById("Nav-project");
const navContact = document.getElementById("Nav-contact");

const linkbox = document.getElementById("linkBox");

col1.addEventListener("click", () => {
  profile.classList.add("showMenu");
});

closeBtn.addEventListener("click", () => {
  profile.classList.remove("showMenu");
});

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
