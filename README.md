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

## Customization
- Update `profile.jpg` with your photo.
- Update email and LinkedIn links in the footer of each HTML file.
- Add your CV, degrees, and certificates as PDF/JPG files and update the links/buttons.
- Add your GitHub username in `backend/server.js` for local project fetching.

---

**Enjoy your new personal website!**
