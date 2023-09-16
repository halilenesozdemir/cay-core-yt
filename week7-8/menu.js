document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pathname = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === pathname) {
      link.style.color = "#ff0011";
    }
  });
});
