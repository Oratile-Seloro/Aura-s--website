# Aura's Personal Website

A modern, responsive personal website with a Node.js/Express backend and static frontend, designed for GitHub Pages hosting. 

## Features
- Home page with profile picture and description
- About page for testimonials/paragraphs
- Projects page (auto-fetches your public GitHub repos)
- CV & Degrees page (buttons to your files)
- Certificates page (links to certificate files)
- Sidebar and header navigation
- Footer with email and LinkedIn icons
- Nude brown, nude, white, and black color theme

## Setup

### 1. Backend (for local development)
- Go to `backend/`
- Run `npm install`
- Edit `server.js` and set your GitHub username
- Run `npm start`
- Visit `http://localhost:3001`

### 2. Frontend (for GitHub Pages)
- Only the `frontend/` folder is needed for GitHub Pages.
- Place your `profile.jpg`, `cv.pdf`, degree and certificate files in `frontend/`.
- Edit HTML files to update your name, description, testimonials, and links.

### Deploying to GitHub Pages
1. Create a new repository on GitHub (or use your existing one).
2. Copy the contents of the `frontend/` folder (including all files and subfolders) into the root of your repository, or into a `docs/` folder if you prefer.
3. Commit and push your changes to GitHub.
4. Go to your repository on GitHub.
5. Click on **Settings** > **Pages** (or **Settings** > **Code and automation** > **Pages**).
6. Under **Source**, select the branch you want to use (usually `main` or `master`).
   - If you put your site files in the root, select `/ (root)`.
   - If you put your site files in a `docs/` folder, select `/docs`.
7. Click **Save**. GitHub will build and publish your site.
8. After a few moments, your site will be live at the URL shown in the GitHub Pages section.

**Note:**
- If you use custom folders (like `degrees/`), make sure they are included in your commit.
- If you use project-relative links, they will work as long as you keep the folder structure.
- If you want your site to appear at `username.github.io/repo-name/`, all links should be relative (which your current setup supports).

## Customization
- Update `profile.jpg` with your photo.
- Update email and LinkedIn links in the footer of each HTML file.
- Add your CV, degrees, and certificates as PDF/JPG files and update the links/buttons.
- Add your GitHub username in `backend/server.js` for local project fetching.

---

**Enjoy your new personal website!**
