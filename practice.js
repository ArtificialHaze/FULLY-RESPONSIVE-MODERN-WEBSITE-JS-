window.addEventListener("scroll", () => {
  const navBar = document.querySelector("header");
  navBar.classList.toggle("sticky", window.screenY > 0);
});

window.addEventListener("scroll", () => {
  const floatingBtn = document.querySelector(".float-button");
  floatingBtn.classList.toggle("visible", window.scrollY > 700);
});

document
  .querySelectorAll(".list-image .machine-list-box img")
  .forEach((image) => {
    image.addEventListener("click", () => {
      document.querySelector(".show-image img").src = image.getAttribute("src");
    });
  });

const menuButton = document.querySelector(".mobileMenuToggle");
const navItem = document.querySelector(".nav-items");

const toggleMenu = () => {
  menuButton.classList.toggle("active");
  navItem.classList.toggle("active");
};

window.addEventListener("scroll", () => {
  menuButton.classList.remove("active");
  navItem.classList.remove("active");
});
