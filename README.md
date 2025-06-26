This project is a simple blog post manager that interacts with a local API to perform CRUD operations and update the DOM.

Learning goals include:
This project is a simple blog post manager that interacts with a local API to perform CRUD operations and update the DOM.

Learning goals include:
- Accessing information from an API using a GET request
- Updating the DOM based on server data and user actions
- Sending data to an API using POST, PATCH, and DELETE requests

Setup steps:
1. Create a project folder and add index.html, src/index.js, css/styles.css, and db.json
2. Run npm install -g json-server@0.17.4 to install json-server
3. Add valid JSON blog post data inside db.json
4. Start the backend with: json-server db.json
5. Start the frontend with: live-server
6. Write JavaScript inside index.js to build functionality

Main features:
- On page load, blog post titles are fetched from http://localhost:3000/posts and displayed inside the #post-list div using displayPosts()
- Clicking a title shows its full details in the #post-detail div using handlePostClick()
- A form with ID new-post-form lets users add new posts using addNewPostListener()
- main() function runs displayPosts and addNewPostListener after DOMContentLoaded

Advanced features (optional):
- Show first post’s details immediately on page load
- Edit post title and content using an edit form inside #post-detail
- Delete posts from the list and clear the detail section

Extra advanced:
- Use PATCH to update post details in the backend
- Use POST to create new posts and persist them
- Use DELETE to remove posts from the backend

API endpoints used:
GET /posts
GET /posts/:id
POST /posts
PATCH /posts/:id
DELETE /posts/:id

