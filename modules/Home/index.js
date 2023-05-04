const mobileMenu = document.getElementById("mobile-menu");
const mobileButton = document.getElementById("mobile-button");
let isClicked = false;
mobileButton.addEventListener("click", () => {
  if (isClicked === true) {
    mobileMenu.classList.remove("hidden");
    isClicked = false;
  } else if (isClicked === false) {
    mobileMenu.classList.add("hidden");
    isClicked = true;
  }
});
