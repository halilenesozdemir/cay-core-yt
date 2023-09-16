document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pathname = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === pathname) {
      link.style.color = "#ff0011";
    }
  });
});

const sideMenu = document.getElementById("side-menu");
const footerContainer = document.getElementById("footer-container");

let menuState = false;
function toggleMenu(event) {
  console.log(event);
  menuState = !menuState;
  if (menuState) {
    sideMenu.classList.add("isActive");
  } else {
    sideMenu.classList.remove("isActive");
  }
}

function goTo(path) {
  if (menuState) {
    toggleMenu();
    setTimeout(() => {
      window.location.href = path;
    }, 2000);
  } else {
    window.location.href = path;
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    footerContainer.style.position = "relative";
  } else {
    footerContainer.style.position = "fixed";
  }
});
