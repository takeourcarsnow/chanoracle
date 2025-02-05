// Theme handling
const themeToggle = document.getElementById('theme-switch');
const htmlElement = document.documentElement;

const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';

themeToggle.addEventListener('change', toggleTheme); 