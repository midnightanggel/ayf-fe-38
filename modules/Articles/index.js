const mobileMenu = document.getElementById("mobile-menu");
const mobileButton = document.getElementById("mobile-button");
const articles = document.getElementById("articles");
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

(async () => {
  try {
    const res = await fetch(
      "https://6450c07fa32219691150eb05.mockapi.io/ayo-api/articles",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      data.forEach((el) => {
        articles.innerHTML += `<section
        class="border-2 border-gray-300 w-[320px] h-[350px] flex flex-col"
      >
        <figure class="w-full">
          <img
            class="aspect-video w-full object-cover"
            src="${el.image}"
            alt=""
          />
        </figure>
        <section class="flex flex-col items-start p-4 justify-between h-full">
          <section class="pb-3 flex flex-col gap-2">
            <h1 class="font-bold line-clamp-2 overflow-ellipsis">${el.title}</h1>
            <p class="text-sm text-justify line-clamp-2 overflow-ellipsis">
              ${el.content}
            </p>
          </section>
          <section>
            <button class="text-blue-400">
            <a href="./articleDetail.html?id=${el.id}">Read More</a>
            </button>
          </section>
        </section>
      </section>`;
      });
    }
  } catch (error) {
    console.log(error);
    articles.innerHTML = `<p class="text-red-500">Could not fetch data</p>`;
  }

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
