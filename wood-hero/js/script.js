const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav");

const showMenu = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

menuIcon.addEventListener("click", showMenu);
