// New typing effect implementation
const typeText = async (element, text, minSpeed = 30, maxSpeed = 80) => {
    return new Promise(resolve => {
        // Create container for typing effect
        const container = document.createElement('div');
        container.className = 'typing-container';

        // Create text element
        const textElement = document.createElement('div');
        textElement.className = 'typing-text';
        container.appendChild(textElement);

        // Create caret element
        const caret = document.createElement('div');
        caret.className = 'typing-caret';
        container.appendChild(caret);

        // Replace original element with new container
        element.replaceWith(container);

        let i = 0;
        let visibleText = '';
        let lastPosition = { x: 0, y: 0 };

        const getCaretPosition = () => {
            // Create temporary span for current character
            const tempSpan = document.createElement('span');
            tempSpan.textContent = text[i] || '';
            tempSpan.style.visibility = 'hidden';
            textElement.appendChild(tempSpan);

            // Get position
            const rect = tempSpan.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const x = rect.left - containerRect.left;
            const y = rect.top - containerRect.top;

            // Clean up
            textElement.removeChild(tempSpan);

            return { x, y };
        };

        const typeCharacter = () => {
            if (i >= text.length) {
                // Add a delay before removing the caret
                setTimeout(() => {
                    caret.classList.remove('visible');
                    container.removeChild(caret); // Remove caret from DOM
                    resolve();
                }, 3000); // 3 seconds delay
                return;
            }

            // Update visible text FIRST
            visibleText += text[i];
            textElement.textContent = visibleText;
            textElement.style.visibility = 'visible';

            // THEN update caret position
            const position = getCaretPosition();
            caret.style.left = `${position.x}px`; // Set left style directly
            caret.style.top = `${position.y}px`; // Set top style directly
            caret.style.visibility = 'visible';
            caret.classList.add('visible');

            lastPosition = position;
            i++;

            // Introduce variability in typing speed
            const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;

            // Occasionally add a longer pause for a more human-like effect
            const pauseChance = Math.random();
            if (pauseChance < 0.05) { // Reduced pause chance
                setTimeout(typeCharacter, speed * 1.5); // Shorter pause
            } else {
                setTimeout(typeCharacter, speed); // Normal speed
            }
        };

        // Start typing
        typeCharacter();
    });
}; 