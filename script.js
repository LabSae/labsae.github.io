const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.tab-content');

// Tabs navigation
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.getAttribute('data-tab');
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target) {
        content.classList.add('active');
      }
    });
  });
});

// Legal / secondary sections
document.querySelectorAll('[data-open]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-open');

    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    const section = document.getElementById(target);
    if (section) {
      section.classList.add('active');
    }
  });
});

// blogs
const blogList = document.getElementById("blog-list");
const blogArticle = document.getElementById("blog-article");

/* Render blog cards */
function renderBlogList() {
  blogList.innerHTML = "";
  blogArticle.style.display = "none";
  blogList.style.display = "grid";

  blogIndex.forEach(article => {
    const card = document.createElement("div");
    card.className = "blog-card";

    card.innerHTML = `
      <img src="${article.thumbnail}" alt="${article.title}">
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
    `;

    card.addEventListener("click", () => loadArticle(article));
    blogList.appendChild(card);
  });
}

/* Load and display full article */
async function loadArticle(article) {
  const response = await fetch(article.file);
  const markdown = await response.text();

  blogList.style.display = "none";
  blogArticle.style.display = "block";

  blogArticle.innerHTML = `
    <button onclick="renderBlogList()">← Back to blogs</button>
    ${marked.parse(markdown)}
  `;
}

/* Render blogs when tab is opened */
document
  .querySelector('[data-tab="blogs"]')
  .addEventListener("click", renderBlogList);


