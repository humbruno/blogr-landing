const menu = document.querySelector(".header__menu");
const navLinks = document.querySelectorAll(".link-wrapper");
const navMenu = document.querySelectorAll(".menu-wrapper");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    for (let j = 0; j < navMenu.length; j++) {
      navMenu[j].classList.remove("visible");
    }

    navMenu[i].classList.add("visible");
  });
}
