const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id") || 1;
const article = document.getElementById("article");
const comments = document.getElementById("comments");
const commentForm = document.getElementById("commentForm");
const buttonComment = document.getElementById("buttonComment");
const now = new Date();
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};
const date = now.toLocaleDateString("en-US", options);

const postComment = async (e) => {
  e.preventDefault();
  try {
    if (commentForm.value != "") {
      await fetch(
        "https://6450c07fa32219691150eb05.mockapi.io/ayo-api/comments",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            createdAt: date,
            fullName: "Fahmi Sugiarto",
            comment: commentForm.value,
            articleId: id,
          }),
        }
      );
      commentForm.value = "";
      getComments();
    }
  } catch (error) {
    console.log(error);
  }
};

buttonComment.addEventListener("click", postComment);

const getComments = async () => {
  try {
    const res = await fetch(
      `https://6450c07fa32219691150eb05.mockapi.io/ayo-api/comments?articleId=${id}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      comments.innerHTML = "";
      data.forEach((el) => {
        comments.innerHTML += `<section  class="flex flex-row w-full gap-2">
        <figure class="w-[40px]">
          <img
            src="${el.image}"
            alt=""
            class="rounded-full object-cover aspect-square"
          />
        </figure>
        <section class="w-full flex flex-col gap-[2px]">
          <h1 class="text-sm font-medium">Fahmi Sugiarto</h1>
          <h1 class="text-[10px] text-gray-900 font-light">
            ${el.createdAt}
          </h1>
          <h1 class="text-sm font-normal">
            ${el.comment}
          </h1>
        </section>
      </section>`;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

getComments();

const getArticleDetail = async () => {
  try {
    const res = await fetch(
      `https://6450c07fa32219691150eb05.mockapi.io/ayo-api/articles?id=${id}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      article.innerHTML = `   <h1 class="font-bold text-4xl">${
        data[0].title
      }</h1>
      <p class="text-sm">${data[0].publishedAt}</p>
      <figure class="">
        <img
          class="w-full object-cover aspect-video"
          src="${data[0].image}"
          alt=""
        />
      </figure>
      <section
        id="articleDesc"
        class="w-full flex flex-col gap-5 text-justify"
      >
        ${data[0].content
          .split(". ")
          .map(
            (el) => `
        <p>${el}.</p>
        `
          )
          .join("")}
      </section>`;
    }
  } catch (error) {
    console.log(error);
    article.innerHTML = `<p class="text-red-500">Could not fetch data</p>`;
  }
};

getArticleDetail();
