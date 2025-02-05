// Form submission handling
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

const toggleLoadingState = (isLoading) => {
    state.isGenerating = isLoading;
    submitBtn.disabled = isLoading;

    if (isLoading) {
        submitBtn.classList.add('loading');
        // Force reflow to restart animation
        void submitBtn.offsetWidth;
    } else {
        submitBtn.classList.remove('loading');
    }

    updateThreadStats();
};

// Modify the submitBtn event listener
submitBtn.addEventListener('click', async () => {
    if (state.isGenerating || isTypingInProgress) return;

    const cryptoInput = document.getElementById('crypto-input');
    const contextInput = document.getElementById('additional-context');

    if (!cryptoInput.value.trim()) {
        showError('Enter a crypto ticker first, anon');
        return;
    }

    // Find the full name of the cryptocurrency
    const crypto = cryptoInput.value.trim().toUpperCase();
    const cryptoInfo = topCryptos.find(c => c.symbol === crypto);
    const fullName = cryptoInfo ? `${crypto} (${cryptoInfo.symbol})` : crypto;

    toggleLoadingState(true);
    isTypingInProgress = true; // Set typing flag

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                crypto: fullName,
                template: state.selectedTemplate,
                prompt: templates[state.selectedTemplate].prompt.replace(
                    '{CRYPTO}',
                    fullName
                ),
                additionalContext: contextInput.value.trim()
            })
        });

        if (!response.ok) {
            throw new Error('Bogdanoff interrupted the connection');
        }

        const data = await response.json();
        await createPost(data);

        contextInput.value = '';
        document.querySelector('.char-counter').textContent = '0/500';

    } catch (error) {
        showError(error.message || 'Something went wrong, anon');
    } finally {
        toggleLoadingState(false);
        isTypingInProgress = false; // Reset typing flag
    }
});

// Character counter with color change
const textarea = document.getElementById('additional-context');
const charCounter = document.querySelector('.char-counter');

textarea.addEventListener('input', () => {
    const count = textarea.value.length;
    charCounter.textContent = `${count}/500`;
    charCounter.style.color = count > 450 ? 'var(--warning-color)' : null;
});

// Template selection with visual feedback
document.querySelectorAll('.template').forEach(template => {
    template.addEventListener('click', () => {
        document.querySelectorAll('.template').forEach(t =>
            t.classList.remove('selected'));
        template.classList.add('selected');
        state.selectedTemplate = template.dataset.template;
        textarea.placeholder = templates[state.selectedTemplate].placeholder;

        // Add click animation
        template.style.transform = 'scale(0.95)';
        setTimeout(() => {
            template.style.transform = 'scale(1)';
        }, 100);
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Submit on Ctrl+Enter
    if (e.ctrlKey && e.key === 'Enter') {
        submitBtn.click();
    }
});

// Reply functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('reply-link')) {
        e.preventDefault();
        const postNumber = e.target.closest('.post')
            .querySelector('.post-number').textContent.slice(3);
        const contextInput = document.getElementById('additional-context');
        contextInput.value += `\n>>${postNumber}\n`;
        contextInput.focus();
    }
}); 