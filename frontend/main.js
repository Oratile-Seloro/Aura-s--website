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

// Aurora particles effect
function createAuroraParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  document.body.appendChild(particleContainer);

  // Create floating particles
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement('div');
    const size = (Math.random() * 6 + 3) * 2; // x2 larger (was Math.random() * 6 + 3)
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 15 + 10;
    const delay = Math.random() * 8;
    const opacity = Math.random() * 0.4 + 0.6; // More opaque: was 0.4 + 0.2, now 0.4 + 0.6 (0.6-1.0)
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, ${opacity});
      border-radius: 50%;
      left: ${left}%;
      top: 110%;
      animation: floatUp ${animationDuration}s linear infinite;
      animation-delay: ${delay}s;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    `;
    particleContainer.appendChild(particle);
  }

  // Add CSS for particle animation
  if (!document.getElementById('aurora-particles-style')) {
    const style = document.createElement('style');
    style.id = 'aurora-particles-style';
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0px) translateX(0px) scale(0.5);
          opacity: 0;
        }
        10% {
          opacity: 1;
          transform: translateY(-20px) translateX(10px) scale(1);
        }
        90% {
          opacity: 1;
          transform: translateY(-80vh) translateX(-30px) scale(0.8);
        }
        100% {
          transform: translateY(-100vh) translateX(-50px) scale(0.3);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize aurora particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createAuroraParticles();
  initProfilePicTilt();
  initAnimatedTitleTilt();
  initWordHoverEffect();
  
  // Add a simple test to ensure animations are working
  console.log('Aurora background animations loaded');
  
  // Test if the CSS animations are applied
  setTimeout(() => {
    const bodyBefore = window.getComputedStyle(document.body, '::before');
    const bodyAfter = window.getComputedStyle(document.body, '::after');
    console.log('Body ::before animation:', bodyBefore.getPropertyValue('animation-name'));
    console.log('Body ::after animation:', bodyAfter.getPropertyValue('animation-name'));
  }, 1000);
});

// 3D Tilt effect for profile picture
function initProfilePicTilt() {
  const profilePic = document.querySelector('.profile-pic');
  if (!profilePic) return;

  const rotateAmplitude = 12;
  const scaleOnHover = 1.05;
  
  let isHovering = false;

  function handleMouseMove(e) {
    if (!isHovering) return;
    
    const rect = profilePic.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
    
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    const rotationX = -(offsetY / (rect.height / 2)) * rotateAmplitude;
    
    profilePic.style.transform = `
      perspective(1000px) 
      rotateX(${rotationX}deg) 
      rotateY(${rotationY}deg) 
      scale(${scaleOnHover})
      translateZ(20px)
    `;
  }

  function handleMouseEnter() {
    isHovering = true;
    profilePic.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
  }

  function handleMouseLeave() {
    isHovering = false;
    profilePic.style.transition = 'transform 0.5s ease-out, box-shadow 0.3s ease';
    profilePic.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      scale(1)
      translateZ(0px)
    `;
  }

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove);
  profilePic.addEventListener('mouseenter', handleMouseEnter);
  profilePic.addEventListener('mouseleave', handleMouseLeave);
}

// 3D Tilt effect for animated title
function initAnimatedTitleTilt() {
  const animatedTitle = document.querySelector('.animated-title');
  if (!animatedTitle) return;

  const rotateAmplitude = 8; // Slightly less rotation for the title
  const scaleOnHover = 1.03; // Subtle scale for the title
  
  let isHovering = false;

  function handleMouseMove(e) {
    if (!isHovering) return;
    
    const rect = animatedTitle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
    
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    const rotationX = -(offsetY / (rect.height / 2)) * rotateAmplitude;
    
    animatedTitle.style.transform = `
      perspective(1000px) 
      rotateX(${rotationX}deg) 
      rotateY(${rotationY}deg) 
      scale(${scaleOnHover})
      translateZ(10px)
    `;
  }

  function handleMouseEnter() {
    isHovering = true;
    animatedTitle.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
  }

  function handleMouseLeave() {
    isHovering = false;
    animatedTitle.style.transition = 'transform 0.5s ease-out, box-shadow 0.3s ease';
    animatedTitle.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      scale(1)
      translateZ(0px)
    `;
  }

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove);
  animatedTitle.addEventListener('mouseenter', handleMouseEnter);
  animatedTitle.addEventListener('mouseleave', handleMouseLeave);
}

// Word hover effect for about page
function initWordHoverEffect() {
  const aboutParagraph = document.querySelector('.about p');
  if (!aboutParagraph) return;

  // Get the original HTML content
  const originalHTML = aboutParagraph.innerHTML;
  
  // Function to wrap words with hover spans
  function wrapWordsWithHover(html) {
    // Split by HTML tags to preserve them
    const parts = html.split(/(<[^>]*>)/);
    
    return parts.map(part => {
      // If it's an HTML tag, keep it as is
      if (part.startsWith('<') && part.endsWith('>')) {
        return part;
      }
      
      // If it's text content, wrap each word
      return part.replace(/\b(\w+)\b/g, '<span class="word-hover">$1</span>');
    }).join('');
  }

  // Apply the word wrapping
  aboutParagraph.innerHTML = wrapWordsWithHover(originalHTML);
}

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
