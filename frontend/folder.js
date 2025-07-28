/**
 * Vanilla JavaScript Folder Component
 * Equivalent to the React Folder component
 */

class FolderComponent {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      color: options.color || "#5227FF",
      size: options.size || 1,
      items: options.items || [],
      className: options.className || "",
      maxItems: 3
    };
    
    this.open = false;
    this.paperOffsets = Array.from({ length: this.options.maxItems }, () => ({ x: 0, y: 0 }));
    
    this.init();
  }

  darkenColor(hex, percent) {
    let color = hex.startsWith("#") ? hex.slice(1) : hex;
    if (color.length === 3) {
      color = color
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
    return (
      "#" +
      ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
    );
  }

  init() {
    this.createFolderStructure();
    this.attachEventListeners();
  }

  createFolderStructure() {
    const folderBackColor = this.darkenColor(this.options.color, 0.08);
    const paper1 = this.darkenColor("#ffffff", 0.1);
    const paper2 = this.darkenColor("#ffffff", 0.05);
    const paper3 = "#ffffff";

    // Create papers array with null padding
    const papers = this.options.items.slice(0, this.options.maxItems);
    while (papers.length < this.options.maxItems) {
      papers.push(null);
    }

    const folderHTML = `
      <div class="folder-wrapper ${this.options.className}" style="transform: scale(${this.options.size})">
        <div class="folder" style="
          --folder-color: ${this.options.color};
          --folder-back-color: ${folderBackColor};
          --paper-1: ${paper1};
          --paper-2: ${paper2};
          --paper-3: ${paper3};
        ">
          <div class="folder__back">
            ${papers.map((item, i) => `
              <div class="paper paper-${i + 1}" data-index="${i}">
                ${item || ''}
              </div>
            `).join('')}
            <div class="folder__front"></div>
            <div class="folder__front right"></div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = folderHTML;
    this.folderElement = this.container.querySelector('.folder');
    this.papers = this.container.querySelectorAll('.paper');
  }

  attachEventListeners() {
    // Folder click event
    this.folderElement.addEventListener('click', () => this.handleClick());

    // Paper mouse events
    this.papers.forEach((paper, index) => {
      paper.addEventListener('mousemove', (e) => this.handlePaperMouseMove(e, index));
      paper.addEventListener('mouseleave', (e) => this.handlePaperMouseLeave(e, index));
    });
  }

  handleClick() {
    this.open = !this.open;
    
    if (this.open) {
      this.folderElement.classList.add('open');
    } else {
      this.folderElement.classList.remove('open');
      // Reset paper offsets when closing
      this.paperOffsets = Array.from({ length: this.options.maxItems }, () => ({ x: 0, y: 0 }));
      this.papers.forEach(paper => {
        paper.style.setProperty('--magnet-x', '0px');
        paper.style.setProperty('--magnet-y', '0px');
      });
    }
  }

  handlePaperMouseMove(e, index) {
    if (!this.open) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    
    this.paperOffsets[index] = { x: offsetX, y: offsetY };
    
    const paper = this.papers[index];
    paper.style.setProperty('--magnet-x', `${offsetX}px`);
    paper.style.setProperty('--magnet-y', `${offsetY}px`);
  }

  handlePaperMouseLeave(e, index) {
    this.paperOffsets[index] = { x: 0, y: 0 };
    
    const paper = this.papers[index];
    paper.style.setProperty('--magnet-x', '0px');
    paper.style.setProperty('--magnet-y', '0px');
  }

  // Public methods for external control
  setColor(color) {
    this.options.color = color;
    const folderBackColor = this.darkenColor(color, 0.08);
    this.folderElement.style.setProperty('--folder-color', color);
    this.folderElement.style.setProperty('--folder-back-color', folderBackColor);
  }

  setSize(size) {
    this.options.size = size;
    const wrapper = this.container.querySelector('.folder-wrapper');
    wrapper.style.transform = `scale(${size})`;
  }

  toggle() {
    this.handleClick();
  }

  destroy() {
    this.container.innerHTML = '';
  }
}

// Factory function for easier usage
function createFolder(container, options = {}) {
  return new FolderComponent(container, options);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FolderComponent, createFolder };
}
