// Game data with GitHub Pages links
// Add your games here in the following format:
const games = [
    {
        title: "Cookie Clicker",
        description: "Click on the cookie to earn cookies.",
        icon: "images/cookieclicker.png", // Image path
        url: "https://fwr3d.github.io/cookieclicker/",
        color: "#ffd700" // Choose a hex color
    },
    {
        title: "Retro Bowl",
        description: "Play retro bowl with your friends.",
        icon: "images/retrobowl.png", // Image path
        url: "https://fwr3d.github.io/retrobowl/",
        color: "#2c3e50" // Choose a hex color
    },
];

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');

// Current search state
let currentSearch = '';

// Initialize the page
function init() {
    renderGames();
    setupEventListeners();
}

// Render games based on current search
function renderGames() {
    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            game.description.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesSearch;
    });

    if (filteredGames.length === 0) {
        if (games.length === 0) {
            gamesGrid.innerHTML = `
                <div class="no-games">
                    <i class="fas fa-plus-circle" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <h3>No games added yet</h3>
                    <p>Add your first game by editing the games array in script.js</p>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: left; font-family: monospace; font-size: 0.9rem;">
                        <strong>How to add games:</strong><br>
                        1. Open script.js<br>
                        2. Find the games array<br>
                        3. Add your game in this format:<br>
                        {<br>
                        &nbsp;&nbsp;title: "Game Name",<br>
                        &nbsp;&nbsp;description: "Game description",<br>
                        &nbsp;&nbsp;icon: "🎮",<br>
                        &nbsp;&nbsp;url: "https://your-game-url.com",<br>
                        &nbsp;&nbsp;color: "#ff6b6b"<br>
                        }
                    </div>
                </div>
            `;
        } else {
            gamesGrid.innerHTML = `
                <div class="no-games">
                    <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <h3>No games found</h3>
                    <p>Try adjusting your search criteria.</p>
                </div>
            `;
        }
        return;
    }

    gamesGrid.innerHTML = filteredGames.map(game => `
        <div class="game-card">
            <div class="game-image" style="background: linear-gradient(45deg, ${game.color}, ${adjustColor(game.color, -20)})">
                ${game.icon.startsWith('images/') ? 
                    `<img src="${game.icon}" alt="${game.title}" style="width: 80px; height: 80px; object-fit: contain;">` : 
                    `<span style="font-size: 3rem;">${game.icon}</span>`
                }
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <button class="play-button" onclick="openGame('${game.url}')">
                    <i class="fas fa-play"></i> Play Now
                </button>
            </div>
        </div>
    `).join('');
}

// Open game in new tab
function openGame(url) {
    window.open(url, '_blank');
}

// Adjust color brightness
function adjustColor(color, amount) {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = (num >> 8 & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderGames();
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
