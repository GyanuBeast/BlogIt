// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navMenu = document.querySelector(".nav-menu");

//   // Toggle the 'active' class on click
//   menuToggle.addEventListener("click", function () {
//     navMenu.classList.toggle("active");
//   });

//   // Smooth scroll effect for navigation links
//   const navLinks = document.querySelectorAll(".nav-menu a");

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       const targetId = this.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         const offsetTop = targetElement.offsetTop;

//         window.scrollTo({
//           top: offsetTop,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const readMoreButtons = document.querySelectorAll(".read-more-btn");

//   readMoreButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       const additionalContent = this.nextElementSibling;
//       additionalContent.classList.toggle("show");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Navigation Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Smooth scroll effect for navigation links
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // "Read More" button functionality
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const additionalContent = this.nextElementSibling;
      additionalContent.classList.toggle("show");
    });
  });
});
