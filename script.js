// 1. Find the elements on the page
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const icon = menuToggle.querySelector("i");

// 2. When the hamburger button is clicked...
menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");     // add the class if missing, remove it if present
    icon.classList.toggle("fa-bars");      // swap ☰ ...
    icon.classList.toggle("fa-xmark");     // ... for ✕
});

// 3. Close the menu when a menu link is clicked
const menuLinks = document.querySelectorAll(".navbar a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});