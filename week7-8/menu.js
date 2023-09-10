document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  const pathname = window.location.pathname;

  const currentPageWithoutFolderName = pathname.substring(pathname.lastIndexOf("/"));

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPageWithoutFolderName) {
      link.style.color = "#ff0011";
    }
  });
});
