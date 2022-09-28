let hamberger = document.querySelector(".hamberger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".menulink");

hamberger.addEventListener("click", function () {
  mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});
