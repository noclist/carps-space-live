// Command Palette for Portfolio Navigation
// Usage: Include this script and CSS on any page, then call initCommandPalette()

const portfolioPages = [
  // Main
  { title: 'Home', icon: '🏠', url: 'index.html', category: 'Main', tags: ['home', 'main', 'start'] },
  { title: 'Techniques', icon: '⚡', url: 'techniques.html', category: 'Main', desc: 'Modern CSS demos & experiments', tags: ['techniques', 'demos', 'css'] },
  { title: 'CSS Art', icon: '🎨', url: 'art.html', category: 'Main', desc: 'Pure CSS illustrations', tags: ['art', 'gallery', 'creative'] },
  { title: 'Top Films', icon: '🎥', url: '/_site/movies/2022/index.html', category: 'Main', desc: 'Yearly film rankings', tags: ['films', 'movies', 'rankings', 'top'] },
  { title: 'About', icon: '👤', url: 'about.html', category: 'Main', desc: 'Bio & contact info', tags: ['about', 'bio', 'contact'] },
  
  // Technique Demos
  { title: 'Cleveland Neighborhoods', icon: '🏙️', url: 'parallax.html', category: 'Techniques', desc: 'Parallax scrolling', tags: ['parallax', 'cleveland', 'scroll'] },
  { title: 'Burgers!', icon: '🍔', url: 'landing.html', category: 'Techniques', desc: 'Layout demo', tags: ['burgers', 'layout', 'landing'] },
  { title: 'Toy Shop', icon: '🧸', url: 'box.html', category: 'Techniques', desc: 'Grid layout', tags: ['toy', 'shop', 'grid'] },
  { title: 'LEGO Collection', icon: '🧱', url: 'container-v2.html', category: 'Techniques', desc: 'Container Queries', tags: ['container', 'queries', 'responsive', 'lego'] },
  { title: 'The Pop Show', icon: '🎤', url: 'zpattern.html', category: 'Techniques', desc: 'Z-Pattern layout', tags: ['landing', 'zpattern', 'pop'] },
  { title: 'Meet Our Team', icon: '👥', url: 'flexbox-grid.html', category: 'Techniques', desc: 'Flexbox grid cards', tags: ['team', 'cards', 'flexbox', 'modular'] },
  { title: 'Course Registration', icon: '📝', url: 'masonry2.html', category: 'Techniques', desc: 'Masonry layout', tags: ['course', 'masonry', 'registration'] },
  { title: 'Monster Movies', icon: '🎬', url: 'nav-godzilla.html', category: 'Techniques', desc: 'Navigation demo', tags: ['movies', 'monsters', 'navigation', 'godzilla'] },
  { title: 'Light the Fuse', icon: '💣', url: 'mi.html', category: 'Techniques', desc: 'Scroll animations', tags: ['scroll', 'animation', 'mission impossible'] },
  { title: 'Streaming Grid', icon: '🎮', url: 'stream.html', category: 'Techniques', desc: '3D Grid', tags: ['streaming', '3d', 'grid'] },
  { title: ':has() Selector', icon: '🎯', url: 'has.html', category: 'Techniques', desc: 'Parent selector demo', tags: ['has', 'selector', 'parent'] },
  { title: 'Player Cards', icon: '🏈', url: 'depth.html', category: 'Techniques', desc: 'Layer effects', tags: ['player', 'cards', 'depth', 'layers'] },
  { title: 'Cleveland Travel', icon: '✈️', url: 'cle-travel.html', category: 'Techniques', desc: 'Responsive design', tags: ['travel', 'responsive', 'cleveland'] },
  { title: 'NBA JAM', icon: '🏀', url: '4up.html', category: 'Techniques', desc: '4-Up layout', tags: ['nba', 'sports', 'layout', 'jam'] },
  { title: 'Book Library', icon: '📚', url: 'books-v2.html', category: 'Techniques', desc: 'CSS Grid layout', tags: ['books', 'library', 'grid'] },
  { title: 'Ninja Turtle Grid', icon: '🐢', url: 'turtles.html', category: 'Techniques', desc: 'Grid Areas', tags: ['turtles', 'tmnt', 'grid', 'areas'] },
  { title: 'Tilting Card', icon: '🃏', url: 'tilt.html', category: 'Techniques', desc: '3D Transform effect', tags: ['tilt', 'card', '3d', 'transform'] },
  { title: 'CSS Subgrid', icon: '📐', url: 'subgrid.html', category: 'Techniques', desc: 'Nested grid alignment', tags: ['subgrid', 'grid', 'nested', 'alignment'] },
  { title: 'The Holy Grail', icon: '🏆', url: 'holygrail.html', category: 'Techniques', desc: 'Classic CSS layout pattern', tags: ['holy grail', 'layout', 'grid', 'classic'] },
  
  // CSS Art
  { title: 'Frog', icon: '🐸', url: 'frog.html', category: 'CSS Art', tags: ['frog', 'animal', 'green'] },
  { title: 'Dino', icon: '🦕', url: 'dino.html', category: 'CSS Art', tags: ['dinosaur', 'underwater', 'animation'] },
  { title: 'Egg', icon: '🍳', url: 'egg.html', category: 'CSS Art', tags: ['egg', 'gudetama', 'food', 'animation'] },
  { title: 'Robot', icon: '🤖', url: 'robot.html', category: 'CSS Art', tags: ['robot', 'tech'] },
  { title: 'Monkey', icon: '🐵', url: 'monkey.html', category: 'CSS Art', tags: ['monkey', 'animal'] },
  { title: 'Panda', icon: '🐼', url: 'panda.html', category: 'CSS Art', tags: ['panda', 'bear', 'animal'] },
  { title: 'Alien', icon: '👽', url: 'alien.html', category: 'CSS Art', tags: ['alien', 'space'] },
  { title: 'Pool Ball', icon: '🎱', url: 'ball.html', category: 'CSS Art', tags: ['pool', 'ball', 'billiards'] },
  { title: 'Cube', icon: '📦', url: 'cube.html', category: 'CSS Art', tags: ['cube', '3d', 'geometric'] },
  { title: 'TV', icon: '📺', url: 'tv.html', category: 'CSS Art', tags: ['tv', 'television', 'retro'] },
  { title: 'Question Block', icon: '🍄', url: 'question-block.html', category: 'CSS Art', tags: ['mario', 'mushroom', 'game'] },
  
  { title: '', icon: '🎮', url: 'index-fancy.html', category: '', desc: '', tags: ['playground', 'fun', 'fancy', 'secret', 'easter egg'] },
];

let selectedIndex = 0;
let filteredPages = [...portfolioPages];

function createCommandPalette() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'cmd-palette-overlay';
  overlay.addEventListener('click', closeCommandPalette);

  // Create palette
  const palette = document.createElement('div');
  palette.className = 'cmd-palette';
  palette.innerHTML = `
    <div class="cmd-palette-search">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Search pages..." autofocus />
      <span class="cmd-palette-hint">esc</span>
    </div>
    <div class="cmd-palette-results"></div>
    <div class="cmd-palette-footer">
      <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
      <span><kbd>↵</kbd> Open</span>
      <span><kbd>esc</kbd> Close</span>
    </div>
  `;

  // Prevent clicks inside palette from closing
  palette.addEventListener('click', (e) => e.stopPropagation());

  document.body.appendChild(overlay);
  document.body.appendChild(palette);

  // Setup search input
  const input = palette.querySelector('input');
  input.addEventListener('input', (e) => {
    filterPages(e.target.value);
  });

  // Initial render
  renderResults();
}

function filterPages(query) {
  const q = query.toLowerCase().trim();
  
  if (!q) {
    filteredPages = [...portfolioPages];
  } else {
    filteredPages = portfolioPages.filter(page => {
      const searchText = `${page.title} ${page.category} ${page.desc || ''} ${page.tags.join(' ')}`.toLowerCase();
      return searchText.includes(q);
    });
  }
  
  selectedIndex = 0;
  renderResults();
}

function renderResults() {
  const resultsContainer = document.querySelector('.cmd-palette-results');
  
  if (filteredPages.length === 0) {
    resultsContainer.innerHTML = '<div class="cmd-palette-empty">No pages found</div>';
    return;
  }

  // Group by category
  const grouped = {};
  filteredPages.forEach(page => {
    if (!grouped[page.category]) {
      grouped[page.category] = [];
    }
    grouped[page.category].push(page);
  });

  let html = '';
  let globalIndex = 0;

  for (const [category, pages] of Object.entries(grouped)) {
    if (category) {
      html += `<div class="cmd-palette-category">${category}</div>`;
    } else {
      html += `<div class="cmd-palette-separator"></div>`;
    }
    
    pages.forEach(page => {
      const isSelected = globalIndex === selectedIndex;
      html += `
        <div class="cmd-palette-item ${isSelected ? 'selected' : ''}" data-index="${globalIndex}" data-url="${page.url}">
          <div class="cmd-palette-item-icon">${page.icon}</div>
          <div class="cmd-palette-item-content">
            <div class="cmd-palette-item-title">${page.title}</div>
            ${page.desc ? `<div class="cmd-palette-item-desc">${page.desc}</div>` : ''}
          </div>
        </div>
      `;
      globalIndex++;
    });
  }

  resultsContainer.innerHTML = html;

  // Add click handlers
  resultsContainer.querySelectorAll('.cmd-palette-item').forEach(item => {
    item.addEventListener('click', () => {
      navigateToPage(item.dataset.url);
    });
    item.addEventListener('mouseenter', () => {
      selectedIndex = parseInt(item.dataset.index);
      updateSelection();
    });
  });

  // Scroll selected into view
  const selectedEl = resultsContainer.querySelector('.selected');
  if (selectedEl) {
    selectedEl.scrollIntoView({ block: 'nearest' });
  }
}

function updateSelection() {
  const items = document.querySelectorAll('.cmd-palette-item');
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === selectedIndex);
  });
  
  const selectedEl = document.querySelector('.cmd-palette-item.selected');
  if (selectedEl) {
    selectedEl.scrollIntoView({ block: 'nearest' });
  }
}

function navigateToPage(url) {
  closeCommandPalette();
  window.location.href = url;
}

function openCommandPalette() {
  const overlay = document.querySelector('.cmd-palette-overlay');
  const palette = document.querySelector('.cmd-palette');
  const input = palette.querySelector('input');
  
  overlay.classList.add('active');
  palette.classList.add('active');
  
  // Reset state
  input.value = '';
  filteredPages = [...portfolioPages];
  selectedIndex = 0;
  renderResults();
  
  // Focus input
  setTimeout(() => input.focus(), 50);
}

function closeCommandPalette() {
  const overlay = document.querySelector('.cmd-palette-overlay');
  const palette = document.querySelector('.cmd-palette');
  
  overlay.classList.remove('active');
  palette.classList.remove('active');
}

function handleKeydown(e) {
  const palette = document.querySelector('.cmd-palette');
  const isOpen = palette && palette.classList.contains('active');

  // Open with Ctrl+K or Cmd+K
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (isOpen) {
      closeCommandPalette();
    } else {
      openCommandPalette();
    }
    return;
  }

  if (!isOpen) return;

  switch (e.key) {
    case 'Escape':
      closeCommandPalette();
      break;
    case 'ArrowDown':
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, filteredPages.length - 1);
      updateSelection();
      break;
    case 'ArrowUp':
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      updateSelection();
      break;
    case 'Enter':
      e.preventDefault();
      if (filteredPages[selectedIndex]) {
        navigateToPage(filteredPages[selectedIndex].url);
      }
      break;
  }
}

function createTriggerHint() {
  const hint = document.createElement('div');
  hint.className = 'cmd-trigger-hint';
  hint.innerHTML = '<kbd>⌘K</kbd> Search';
  hint.addEventListener('click', openCommandPalette);
  document.body.appendChild(hint);
}

// Initialize
function initCommandPalette(options = {}) {
  createCommandPalette();
  document.addEventListener('keydown', handleKeydown);
  
  if (options.showHint !== false) {
    createTriggerHint();
  }
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initCommandPalette());
} else {
  initCommandPalette();
}
