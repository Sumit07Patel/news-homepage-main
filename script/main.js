readButton = document.querySelector(".current-discription button");
moreTexxt = document.querySelector(".extra-text");

readButton.addEventListener("click", () => {
  moreTexxt.classList.toggle("display");
});

// hamburger menu

hamMenu = document.querySelector(".ham-menu");
hamBar = document.querySelectorAll(".bar");
navLinks = document.querySelector(".nav-links ul");
blurBackground = document.querySelector(".blur-background");
hamMenu.addEventListener("click", () => {
  hamBar[0].classList.toggle("togleBar");
  hamBar[1].classList.toggle("togleBar");
  hamBar[2].classList.toggle("togleBar");
  navLinks.classList.toggle("toogleNav");
  blurBackground.classList.toggle("display");
});
