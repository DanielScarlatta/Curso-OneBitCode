function rederArticles(articlesData) {
  const article = document.createElement("article");

  const title = document.createElement("h3");
  title.classList.add("article-title-style");
  title.textContent = articlesData.title;

  const content = document.createElement("div");
  content.classList.add("article-content-style");
  content.textContent = articlesData.content;

  const author = document.createElement("div");
  author.classList.add("article-author-style");
  author.textContent = articlesData.author;

  article.append(title, content, author);
  document.getElementById("articles").appendChild(article);
}

async function fetchArticles() {
  const response = await fetch("http://localhost:3000/articles").then(
    (result) => result.json()
  );
  response.forEach(rederArticles);
}

document.addEventListener("DOMContentLoaded", fetchArticles());

const form = document.querySelector("form");
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const articleForm = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
    author: document.getElementById("author").value,
  };

  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleForm),
  });

  const savedArticle = await response.json()
  form.reset()
  rederArticles(savedArticle)

  console.log(savedArticle)
});
