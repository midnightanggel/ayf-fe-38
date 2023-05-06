const mobileMenu = document.getElementById("mobile-menu");
const mobileButton = document.getElementById("mobile-button");
const btnRegis = document.getElementById("btnRegis");
const btnRegisMobile = document.getElementById("btnRegisMobile");
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

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

(() => {
  if (localStorage.getItem("user") != null) {
    btnRegis.innerHTML = ` <button id="btnLogout"
      class="font-semibold flex items-center justify-center border-2 bg-white rounded-lg p-2 text-gray-900"
    >
       Logout 
    </button>`;
    btnRegisMobile.innerHTML = ` <button id="btnLogoutMobile"> logout</button>`;
    const btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", logout);
    const btnLogoutMobile = document.getElementById("btnLogoutMobile");
    btnLogoutMobile.addEventListener("click", logout);
  }
})();
