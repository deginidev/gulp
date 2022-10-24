const menuBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav-list");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
}
