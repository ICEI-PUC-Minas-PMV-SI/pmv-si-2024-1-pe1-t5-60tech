document.addEventListener("DOMContentLoaded", function () {
  var menuHamburger = document.querySelector(".material-symbols-outlined.menu");
  var navUl = document.querySelector("nav ul");

  menuHamburger.addEventListener("click", function () {
    navUl.classList.toggle("active");
  });
});
