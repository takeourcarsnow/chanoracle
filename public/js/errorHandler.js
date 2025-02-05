// Error handling with custom messages
const showError = (message) => {
    const modal = document.getElementById('error-modal');
    const messageEl = document.getElementById('error-message');
    messageEl.textContent = message;
    modal.classList.remove('hidden');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 5000);
};

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('error-modal').classList.add('hidden');
}); 