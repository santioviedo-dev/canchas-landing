const navbarToggler = document.getElementById("my-navbar-toggler");
console.log(navbarToggler);

navbarToggler.addEventListener("click", () => {
  document.querySelector(".navbar-collapse").classList.toggle("show-navbar");
});
