// src/index.js

const BASE_URL = "http://localhost:3000/posts";

// Show all post titles
function showAllPosts() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(posts => {
      const list = document.getElementById("post-list");
      list.innerHTML = "";
      posts.forEach(post => {
        const item = document.createElement("div");
        item.textContent = post.title;
        item.dataset.id = post.id;
        item.addEventListener("click", () => showPostDetails(post.id));
        list.appendChild(item);
      });

      if (posts.length > 0) {
        showPostDetails(posts[0].id);
      }
    });
}

// Show full info when clicking on post title
function showPostDetails(id) {
  fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
    .then(post => {
      const details = document.getElementById("post-detail");
      details.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>By:</strong> ${post.author}</p>
        <button id="edit-btn">Edit</button>
        <button id="delete-btn">Delete</button>
      `;

      document.getElementById("edit-btn").addEventListener("click", () => showEditForm(post));
      document.getElementById("delete-btn").addEventListener("click", () => deletePost(post.id));
    });
}

// Form to add new post
function setupNewPostForm() {
  const form = document.getElementById("new-post-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPost = {
      title: form.title.value,
      content: form.content.value,
      author: form.author.value
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(() => {
        form.reset();
        showAllPosts();
      });
  });
}

// Edit form logic
function showEditForm(post) {
  const form = document.getElementById("edit-post-form");
  form.classList.remove("hidden");
  form["edit-title"].value = post.title;
  form["edit-content"].value = post.content;

  form.onsubmit = (e) => {
    e.preventDefault();
    const updated = {
      title: form["edit-title"].value,
      content: form["edit-content"].value
    };

    fetch(`${BASE_URL}/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    })
      .then(res => res.json())
      .then(() => {
        form.classList.add("hidden");
        showAllPosts();
      });
  };

  document.getElementById("cancel-edit").onclick = () => {
    form.classList.add("hidden");
  };
}

// Delete a post
function deletePost(id) {
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then(() => {
      document.getElementById("post-detail").innerHTML = "<p>Click a post title to see details.</p>";
      showAllPosts();
    });
}

// Start app when page loads
function startApp() {
  showAllPosts();
  setupNewPostForm();
}

document.addEventListener("DOMContentLoaded", startApp);
