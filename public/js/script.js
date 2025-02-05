// Theme handling - MOVED TO theme.js
// const themeToggle = document.getElementById('theme-switch');
// const htmlElement = document.documentElement;

// const toggleTheme = () => {
//     const currentTheme = htmlElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     htmlElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
// };

// // Load saved theme
// const savedTheme = localStorage.getItem('theme') || 'light';
// htmlElement.setAttribute('data-theme', savedTheme);
// themeToggle.checked = savedTheme === 'dark';

// themeToggle.addEventListener('change', toggleTheme);

// Template definitions with improved prompts - MOVED TO templates.js
// const templates = { ... };

// Update the topCryptos array with emojis - MOVED TO cryptoButtons.js
// const topCryptos = [ ... ];

// Update the createCryptoButtons function to include emojis - MOVED TO cryptoButtons.js
// const createCryptoButtons = () => { ... };

// State management - MOVED TO state.js
// let state = { ... };
// let isTypingInProgress = false;

// New typing effect implementation - MOVED TO typing.js
// const typeText = async (element, text, minSpeed = 30, maxSpeed = 80) => { ... };

// Format greentext properly - MOVED TO postCreation.js
// const formatGreentext = (text) => { ... };

// Update npcReplies array with new entries - MOVED TO threadSimulation.js
// const npcReplies = [ ... ];

// Create post with typing effect - MOVED TO postCreation.js
// const createPost = async (postData, isNPC = false) => { ... };

// Modify the simulateThread function - MOVED TO threadSimulation.js
// const simulateThread = () => { ... };

// Update thread statistics - MOVED TO threadSimulation.js
// const updateThreadStats = () => { ... };

// Form submission handling - MOVED TO formHandler.js
// const submitBtn = document.getElementById('submit-btn');
// const btnText = submitBtn.querySelector('.btn-text');
// const btnLoading = submitBtn.querySelector('.btn-loading');

// const toggleLoadingState = (isLoading) => { ... };

// Modify the submitBtn event listener - MOVED TO formHandler.js
// submitBtn.addEventListener('click', async () => { ... });

// Error handling with custom messages - MOVED TO errorHandler.js
// const showError = (message) => { ... };

// document.querySelector('.close-modal').addEventListener('click', () => { ... });

// Character counter with color change - MOVED TO formHandler.js
// const textarea = document.getElementById('additional-context');
// const charCounter = document.querySelector('.char-counter');

// textarea.addEventListener('input', () => { ... });

// Template selection with visual feedback - MOVED TO formHandler.js
// document.querySelectorAll('.template').forEach(template => { ... });

// Keyboard shortcuts - MOVED TO formHandler.js
// document.addEventListener('keydown', (e) => { ... });

// Reply functionality - MOVED TO formHandler.js
// document.addEventListener('click', (e) => { ... });

// Carousel navigation and scroll - MOVED TO carousel.js
// document.addEventListener('click', (e) => { ... });
// document.addEventListener('DOMContentLoaded', () => { ... });
// document.addEventListener('DOMContentLoaded', () => { ... });

// Random prompt functionality - MOVED TO randomPrompt.js
// const randomBtn = document.getElementById('random-btn');
// randomBtn.addEventListener('click', () => { ... });

// Initialize and event listeners that remain in script.js
document.addEventListener('DOMContentLoaded', () => {
    // Deselect all templates first
    document.querySelectorAll('.template').forEach(t => t.classList.remove('selected'));

    // Select random template
    const randomTemplate = document.querySelector(`[data-template="${state.selectedTemplate}"]`);
    const textarea = document.getElementById('additional-context'); // Get textarea here
    if (randomTemplate) {
        randomTemplate.classList.add('selected');
        textarea.placeholder = templates[state.selectedTemplate].placeholder;
        
        // Scroll the selected template into view
        const scrollContainer = document.querySelector('.template-scroll');
        const templateRect = randomTemplate.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        // Calculate scroll position
        const scrollLeft = randomTemplate.offsetLeft - 
            (containerRect.width / 2) + 
            (templateRect.width / 2);
        
        // Smooth scroll to the selected template
        scrollContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }
    
    // Update thread number
    document.querySelector('.thread-id').textContent = `No.${state.threadNumber}`;
    
    const cryptoInputContainer = document.getElementById('crypto-input').parentElement;
    cryptoInputContainer.insertBefore(
        createCryptoButtons(),
        cryptoInputContainer.querySelector('textarea')
    );
    simulateThread();
    updateThreadStats();
});

// Auto-update thread stats
setInterval(updateThreadStats, 5000);

// Add this near the bottom of the file, before the DOMContentLoaded event
document.addEventListener('click', (e) => {
    if (e.target.closest('.rules-toggle')) {
        const rulesContent = document.querySelector('.rules-content');
        const toggleIcon = e.target.closest('.rules-toggle').querySelector('i');
        
        rulesContent.classList.toggle('hidden');
        toggleIcon.classList.toggle('fa-chevron-down');
        toggleIcon.classList.toggle('fa-chevron-up');
    }
});