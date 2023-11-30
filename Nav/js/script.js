function ToogleMenu() {
  let menuToggle = document.querySelector("#nav");
  let toggle = document.querySelector("#toogle");
  menuToggle.classList.toggle("active");
  toggle.classList.toggle("active");
  let menuTransition = document.querySelectorAll(".menuTransition");
  for (let i = 0; i < menuTransition.length; i++) {
    menuTransition[i].classList.toggle("active");
  }
}
