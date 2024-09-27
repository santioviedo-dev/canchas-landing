const navbarToggler = document.getElementById("my-navbar-toggler");

navbarToggler.addEventListener("click", () => {
  document.querySelector(".navbar-collapse").classList.toggle("show-navbar");
});
