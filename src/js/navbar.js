const navbarToggler = document.getElementById("my-navbar-toggler");

navbarToggler.addEventListener("click", () => {
  document.querySelector(".navbar-collapse").classList.toggle("show-navbar");
});

// Obtener el ancho del viewport y el ancho total del documento

document.addEventListener("DOMContentLoaded", () => {
  const viewportWidth = window.innerWidth;
  const documentWidth = document.documentElement.scrollWidth;

  const scrollWidth = documentWidth - viewportWidth;

  const img = document.querySelector(".contact-img");
  console.log(scrollWidth);

  img.style.cssText += `width: calc(100vw - ${-scrollWidth}px) !important;`;
});
