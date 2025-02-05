// Add event listener for random prompt button
const randomBtn = document.getElementById('random-btn');

randomBtn.addEventListener('click', () => {
    // Select a random template
    const templateKeys = Object.keys(templates);
    const randomTemplateKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];

    // Select a random crypto
    const randomCrypto = topCryptos[Math.floor(Math.random() * topCryptos.length)];

    // Set the crypto input value
    const cryptoInput = document.getElementById('crypto-input');
    cryptoInput.value = randomCrypto.symbol;

    // Find the full name of the cryptocurrency
    const cryptoInfo = topCryptos.find(c => c.symbol === randomCrypto.symbol);
    const fullName = cryptoInfo ? `${randomCrypto.symbol} (${cryptoInfo.symbol})` : randomCrypto.symbol;

    // Select the template in the carousel
    document.querySelectorAll('.template').forEach(t => t.classList.remove('selected'));
    const randomTemplate = document.querySelector(`[data-template="${randomTemplateKey}"]`);
    if (randomTemplate) {
        randomTemplate.classList.add('selected');
        textarea.placeholder = templates[randomTemplateKey].placeholder;

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

    // Update the state
    state.selectedTemplate = randomTemplateKey;
}); 