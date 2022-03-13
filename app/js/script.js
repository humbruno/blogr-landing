const menu = document.querySelector(".header__menu");
const navLinks = document.querySelectorAll(".link-wrapper");
const navMenu = document.querySelectorAll(".menu-wrapper");
const html = document.querySelector("html");
const menuMobile = document.querySelector(".header__links-mobile");
const navCategory = document.querySelectorAll(".category-link");
const navItems = document.querySelectorAll(".menu-wrapper-mobile");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuMobile.classList.toggle("visible");

  for (let j = 0; j < navMenu.length; j++) {
    navItems[j].classList.remove("visible");
  }
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", () => {
    for (let j = 0; j < navMenu.length; j++) {
      navMenu[j].classList.remove("visible");
    }

    navMenu[i].classList.add("visible");
  });
}

html.addEventListener("click", () => {
  for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].classList.remove("visible");
  }
});

for (let i = 0; i < navCategory.length; i++) {
  navCategory[i].addEventListener("click", () => {
    navItems[i].classList.toggle("visible");
  });
}
