/* eslint-disable-next-line no-use-before-define */
const saviomd = saviomd || {};

saviomd.header = (() => {
  document.querySelector("#btn-nav").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#header-nav").classList.toggle("active");
  });

  document.querySelectorAll(".header__nav-link").forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.hash).scrollIntoView();
    });
  });
})();
