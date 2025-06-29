# Code Challenge 3: Blog Post Manager

This project is a simple blog post manager that interacts with a local API to perform CRUD operations and update the DOM.

## Learning Goals

- Access information from an API using a GET request
- Update the DOM based on server data and user actions
- Send data to an API using POST, PATCH, and DELETE requests

## Setup Steps

1. Create a project folder and add the following files:
   - `index.html`
   - `src/index.js`
   - `css/styles.css`
   - `db.json`

2. Install `json-server`:
   ```bash
   npm install -g json-server@0.17.4
   ```

3. Add valid JSON blog post data inside `db.json`.

4. Start the backend server:
   ```bash
   json-server --watch db.json
   ```

5. Start the frontend with Live Server or open `index.html` manually.

6. Write your JavaScript logic in `src/index.js`.

## Main Features

- On page load, blog post titles are fetched from `http://localhost:3000/posts` and displayed inside the `#post-list` div using `displayPosts()`.
- Clicking a title shows its full details in the `#post-detail` div using `handlePostClick()`.
- A form with ID `new-post-form` lets users add new posts using `addNewPostListener()`.
- `main()` function runs `displayPosts()` and `addNewPostListener()` after `DOMContentLoaded`.

## Advanced Features (Optional)

- Show first post’s details immediately on page load.
- Edit post title and content using an edit form inside `#post-detail`.
- Delete posts from the list and clear the detail section.

## Extra Advanced Features

- Use `PATCH` to update post details in the backend.
- Use `POST` to create new posts and persist them.
- Use `DELETE` to remove posts from the backend.

## API Endpoints Used

- `GET /posts`
- `GET /posts/:id`
- `POST /posts`
- `PATCH /posts/:id`
- `DELETE /posts/:id`
