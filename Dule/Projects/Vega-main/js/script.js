// JSON
const url = "http://myjson.dit.upm.es/api/bins/45l1";
let images = document.querySelectorAll(".imageUrl");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    images.forEach((image) => {
      image.setAttribute("src", data.url);
    });
  });

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
