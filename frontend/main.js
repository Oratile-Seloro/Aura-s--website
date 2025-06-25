// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

document.addEventListener('click', (e) => {
  if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
    sidebar.classList.remove('open');
  }
});

// Load GitHub projects on projects.html
if (window.location.pathname.endsWith('projects.html')) {
  fetch('/api/github-projects')
    .then(res => res.json())
    .then(projects => {
      const list = document.getElementById('projects-list');
      if (!Array.isArray(projects)) {
        list.innerHTML = '<p>Could not load projects.</p>';
        return;
      }
      list.innerHTML = '';
      projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <h3>${proj.name}</h3>
          <p>${proj.description || 'No description'}</p>
          <a href="${proj.html_url}" target="_blank">View on GitHub</a>
        `;
        list.appendChild(card);
      });
    })
    .catch(() => {
      document.getElementById('projects-list').innerHTML = '<p>Could not load projects.</p>';
    });
}
