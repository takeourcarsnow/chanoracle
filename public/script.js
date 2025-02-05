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

// Template definitions with improved prompts
const templates = {
    price: {
        prompt: `You are a typical 4chan /biz/ user channeling the spirit of Bogdanoff. Give a quantum rundown on {CRYPTO}.
        Include:
        >reference to Bogdanoff market manipulation
        >mention if they bought or sold (they always know)
        >current wojak emotional state (cope or seethe)
        >conspiracy theories about (((them)))
        >what the Rothschilds are planning in this timeline
        >upcoming dumps or pumps (they're always right)
        >quantum immortality implications
        Make it paranoid and include maximum bogpill.
        Use proper greentext format with > at start of each line.`,
        placeholder: "He bought? Dump eet."
    },
    analysis: {
        prompt: `Create a /biz/ style technical analysis for {CRYPTO} with maximum bogpill.
        Include:
        >made-up chart patterns (triple bog bottom confirmed)
        >bogdanoff interference (they're always watching)
        >quantum immortality references (this is the good timeline)
        >wojak emotional state (cope or seethe)
        >dump it scenarios (they're coming)
        >conspiracy theories about price suppression
        >rothschild involvement (they're always involved)
        >quantum entanglement of price action
        Use proper greentext format with > at start of each line.`,
        placeholder: "Show me the bogcharts"
    },
    fud: {
        prompt: `Analyze FUD for {CRYPTO} as a paranoid /biz/ user who's all in.
        Include:
        >CIA involvement
        >Bogdanoff market manipulation
        >Rothschild plans
        >wojak cope
        >quantum immortality theories
        >market manipulation proofs
        >institutional suppression
        Use proper greentext format with > at start of each line.`,
        placeholder: "Why dump ser?"
    },
    moonshot: {
        prompt: `Evaluate {CRYPTO} moonshot potential as a maximum hopium /biz/ user.
        Include:
        >unrealistic price targets
        >copium overdose
        >wojak dreams
        >bogdanoff approval
        >quantum timeline predictions
        >institutional adoption fantasies
        >rothschild accumulation theories
        Use proper greentext format with > at start of each line.`,
        placeholder: "When lambo?"
    },
    conspiracy: {
        prompt: `Create a detailed bogpill conspiracy theory about {CRYPTO}.
        Include:
        >bogdanoff involvement
        >rothschild connections
        >CIA operations
        >quantum immortality
        >market manipulation
        >wojak realizations
        >institutional conspiracies
        Use proper greentext format with > at start of each line.`,
        placeholder: "Take the bogpill"
    },
    wojak: {
        prompt: `Assess the current wojak emotional state for {CRYPTO} holders.
        Include:
        >multiple wojak references
        >bogdanoff torture
        >portfolio status
        >cope levels
        >survival chances
        >mental state
        >quantum timeline suffering
        Use proper greentext format with > at start of each line.`,
        placeholder: "How bad is the pain?"
    },
    rothschild: {
        prompt: `Channel ancient Rothschild wisdom about {CRYPTO}.
        Include:
        >bogdanoff connections
        >illuminati plans
        >market manipulation tactics
        >wojak suffering
        >quantum timeline shifts
        >institutional strategies
        >global conspiracy implications
        Use proper greentext format with > at start of each line.`,
        placeholder: "What do (((they))) know?"
    },
    bottom: {
        prompt: `Analyze if this is the real bottom for {CRYPTO} in peak /biz/ style.
        Include:
        >bogdanoff manipulation
        >wojak cope
        >fake bottom scenarios
        >quantum immortality cope
        >rothschild plans
        >institutional accumulation
        >maximum pain theory
        Use proper greentext format with > at start of each line.`,
        placeholder: "Is it really the bottom?"
    },
    leverage: {
        prompt: `Evaluate the wisdom of leveraging {CRYPTO} as a degenerate /biz/ user.
        Include:
        >maximum leverage suggestions
        >bogdanoff liquidation plans
        >wojak margin calls
        >quantum gambling theories
        >cope strategies
        >liquidation cascades
        >maximum pain scenarios
        Use proper greentext format with > at start of each line.`,
        placeholder: "100x or nothing?"
    },
    whale: {
        prompt: `Analyze whale activity for {CRYPTO} with maximum bogpill.
        Include:
        >bogdanoff whale manipulation
        >rothschild whale movements
        >quantum whale theory
        >wojak whale watching
        >institutional whale activity
        >whale dump scenarios
        >whale pump theories
        Use proper greentext format with > at start of each line.`,
        placeholder: "Whale watching time"
    },
    rekt: {
        prompt: `Assess the rekt levels for {CRYPTO} holders.
        Include:
        >bogdanoff rekt scenarios
        >rothschild rekt theories
        >quantum rekt timeline
        >wojak rekt status
        >institutional rekt plans
        >maximum pain theories
        >cope strategies
        Use proper greentext format with > at start of each line.`,
        placeholder: "How rekt are we?"
    },
    maxpain: {
        prompt: `Calculate maximum pain for {CRYPTO} holders.
        Include:
        >bogdanoff pain manipulation
        >rothschild pain theories
        >quantum pain timeline
        >wojak pain status
        >institutional pain plans
        >maximum pain theories
        >cope strategies
        Use proper greentext format with > at start of each line.`,
        placeholder: "When will it hurt most?"
    },
    timeline: {
        prompt: `Analyze the quantum timeline for {CRYPTO}.
        Include:
        >bogdanoff timeline manipulation
        >rothschild timeline theories
        >quantum timeline shifts
        >wojak timeline status
        >institutional timeline plans
        >maximum timeline theories
        >cope strategies
        Use proper greentext format with > at start of each line.`,
        placeholder: "Are we in the good timeline?"
    },
    copium: {
        prompt: `Assess copium levels for {CRYPTO} holders.
        Include:
        >bogdanoff copium manipulation
        >rothschild copium theories
        >quantum copium timeline
        >wojak copium status
        >institutional copium plans
        >maximum copium theories
        >cope strategies
        Use proper greentext format with > at start of each line.`,
        placeholder: "How much hopium left?"
    },
    simulation: {
        prompt: `Analyze if we're in the simulation for {CRYPTO}.
        Include:
        >bogdanoff simulation manipulation
        >rothschild simulation theories
        >quantum simulation shifts
        >wojak simulation status
        >institutional simulation plans
        >maximum simulation theories
        >cope strategies
        Use proper greentext format with > at start of each line.`,
        placeholder: "Are we in the matrix?"
    },
    basedcringe: {
        prompt: `Assess if {CRYPTO} is based or cringe in peak /biz/ style.
        Include:
        >bogdanoff opinion
        >wojak reaction
        >rothschild plan
        >quantum timeline implications
        >institutional adoption
        >community sentiment
        >overall verdict
        Use proper greentext format with > at start of each line.`,
        placeholder: "Based or cringe, anon?"
    },
    rugpull: {
        prompt: `Analyze the likelihood of a rugpull for {CRYPTO} with maximum paranoia.
        Include:
        >bogdanoff involvement
        >dev team sketchiness
        >rothschild connections
        >quantum rugpull theory
        >red flags
        >community warnings
        >overall risk assessment
        Use proper greentext format with > at start of each line.`,
        placeholder: "Rugpull incoming?"
    },
    sergey: {
        prompt: `Provide an update on what Sergey Nazarov is cooking for {CRYPTO}.
        Include:
        >chainlink integration
        >oracle manipulation
        >rothschild partnership
        >quantum chainlink theory
        >price impact
        >community hype
        >overall outlook
        Use proper greentext format with > at start of each line.`,
        placeholder: "What's Sergey up to?"
    }
};

// Update the topCryptos array with emojis
const topCryptos = [
    { symbol: 'BTC', emoji: '₿' }, // Bitcoin
    { symbol: 'ETH', emoji: 'Ξ' }, // Ethereum
    { symbol: 'SOL', emoji: '◎' }, // Solana
    { symbol: 'XRP', emoji: '✕' }, // Ripple
    { symbol: 'ADA', emoji: '₳' }, // Cardano
    { symbol: 'DOGE', emoji: '🐶' }, // Dogecoin
    { symbol: 'SHIB', emoji: '🐕' }, // Shiba Inu
    { symbol: 'MATIC', emoji: 'Ⓜ' }, // Polygon
    { symbol: 'AVAX', emoji: '❄' }, // Avalanche
    { symbol: 'LTC', emoji: 'Ł' },  // Litecoin
    { symbol: 'BNB', emoji: '🅱' }, // Binance Coin
    { symbol: 'DOT', emoji: '●' }, // Polkadot
    { symbol: 'LINK', emoji: '🔗' }, // Chainlink
    { symbol: 'UNI', emoji: '🦄' }, // Uniswap
    { symbol: 'ATOM', emoji: '⚛' }, // Cosmos
    { symbol: 'NEAR', emoji: '🌐' }, // Near Protocol
    { symbol: 'ALGO', emoji: '🅰' }, // Algorand
    { symbol: 'FTM', emoji: '👻' }, // Fantom
    { symbol: 'ARB', emoji: '🔄' }, // Arbitrum
    { symbol: 'OP', emoji: '⭕' }, // Optimism
    { symbol: 'APT', emoji: '🦎' }, // Aptos
    { symbol: 'SUI', emoji: '💧' }, // Sui
    { symbol: 'INJ', emoji: '💉' }, // Injective
    { symbol: 'RUNE', emoji: '⚔️' }, // THORChain
    { symbol: 'KAS', emoji: '💎' }, // Kaspa
    { symbol: 'PEPE', emoji: '🐸' }, // Pepe
    { symbol: 'BONK', emoji: '🦴' }, // Bonk
    { symbol: 'WIF', emoji: '🧢' }, // dogwifhat
    { symbol: 'TIA', emoji: '🌾' }, // Celestia
    { symbol: 'SEI', emoji: '🌊' }  // Sei
];

// Update the createCryptoButtons function to include emojis
const createCryptoButtons = () => {
    const container = document.createElement('div');
    container.className = 'crypto-buttons';
    
    topCryptos.forEach(crypto => {
        const button = document.createElement('button');
        button.className = 'crypto-btn';
        button.textContent = `${crypto.emoji} ${crypto.symbol}`; // Add emoji before the symbol
        button.addEventListener('click', () => {
            document.getElementById('crypto-input').value = crypto.symbol;
        });
        container.appendChild(button);
    });
    
    return container;
};

// State management
let state = {
    selectedTemplate: Object.keys(templates)[Math.floor(Math.random() * Object.keys(templates).length)],
    isGenerating: false,
    responses: [],
    threadNumber: Math.floor(Math.random() * 900000000) + 100000000,
    postCount: 0,
    lastUpdateTime: Date.now(),
    firstPostCompleted: false
};

// Add this near the top of the file, with other state variables
let isTypingInProgress = false;

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

// Format greentext properly
const formatGreentext = (text) => {
    return text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line) // Remove empty lines
        .map(line => line.startsWith('>') ? line : `>${line}`)
        .join('\n')
        .replace(/\n>\n/g, '\n'); // Remove any empty greentext lines
};

// Update npcReplies array with new entries
const npcReplies = [
    ">mfw watching memecoin charts\n>literally eating cardboard ramen",
    
    ">be me\n>crypto genius\n>read whitepaper\n>understand 0%\n>ape in anyway\n>its a ponzi\n>surprised pikachu face",
    
    ">just checked the charts\n>its over anon",
    
    ">be me\n>join 100 discord groups\n>follow 200 crypto twitter\n>subscribe 50 youtube channels\n>still miss every alpha\n>catch every rugpull\n>built different",
    
    ">tfw no more money\n>not even for rope",
    
    ">wake up\n>check portfolio\n>its red\n>check /biz/\n>its cope\n>check twitter\n>its shill\n>check reddit\n>its hopium\n>just another tuesday",
    
    ">be me\n>professional crypto trader\n>setup 12 monitors\n>advanced TA tools\n>premium indicators\n>still lose money\n>mfw i realize hamster would trade better\n>hamster now gives me financial advice\n>hamster also left me",
    
    ">checking wallet\n>see random tokens\n>must be airdrop\n>try to sell\n>wallet drained\n>mfw i fell for dusting\n>again",
    
    ">just got insider info\n>source: trust me bro\n>mortgaged house\n>sold car\n>borrowed from wife's boyfriend\n>all in on shitcoin\n>dev rugs\n>wife leaves\n>boyfriend leaves\n>hamster leaves\n>still bullish",
    
    ">wake up to notifications\n>new ATH\n>try to sell\n>gas fees 500%\n>network congested\n>price dumps\n>back to sleep",
    
    ">be me\n>see pattern in charts\n>draw 69 lines\n>add fibonacci\n>sprinkle elliott waves\n>consult astrology\n>ask magic 8 ball\n>still lose money\n>maybe needs more lines",
    
    ">just had a dream\n>bogdanoff twins visited\n>said dump it\n>woke up sweating\n>checked charts\n>they weren't dreams\n>they were warnings",
    
    ">be me\n>think im smart\n>buy random shitcoin\n>dev dumps\n>every single time\n>still think next one will be different\n>certified /biz/ moment",
    
    ">anon discovers new gem\n>low mcap\n>great team\n>solid roadmap\n>revolutionary tech\n>bought presale\n>dev wallet 99%\n>anon was the gem",
    
    ">be me\n>defi expert\n>stake tokens\n>farm yield\n>provide liquidity\n>get impermanent loss\n>get rugged\n>get exploited\n>back to staking eth\n>its honest work",
    
    ">just got call from bank\n>account negative\n>explain its for crypto\n>they laugh\n>i laugh\n>my credit score cries",
    
    ">be me\n>study market cycles\n>learn technical analysis\n>master fundamental analysis\n>read every whitepaper\n>lose to random doge tweet\n>this is crypto",
    
    ">be me\n>financial advisor\n>tell clients to buy bitcoin\n>it dumps\n>they all leave\n>now working at wendys\n>still giving financial advice\n>to customers\n>this is my life now\n>at least free fries",
    
    ">be me\n>see coin trending\n>check telegram\n>10k members\n>check closer\n>all bots\n>buy anyway\n>now im bot too",
    
    ">wake up\n>portfolio -98%\n>this is fine\n>open ramen packet\n>its empty\n>just like my wallet",
    
    ">be me\n>margin trading expert\n>open long\n>price dumps\n>open short\n>price pumps\n>repeat until liquidated\n>speedrun bankruptcy any%",
    
    ">tfw when you realize\n>your whole portfolio\n>is just jpegs of rocks\n>and pixelated punks\n>and they're all worthless\n>but hey\n>at least im in web3",
    
    ">anon says its bottom\n>buy the dip\n>it dips more\n>buy the dip again\n>it keeps dipping\n>no more money\n>sell kidney\n>kidney market crashes",
    
    ">be me\n>professional shitposter\n>farm moons on reddit\n>farm airdrops on twitter\n>farm yield on defi\n>get rugged everywhere\n>still better than working",
    
    ">be me\n>buy high\n>sell low\n>repeat until broke\n>start youtube channel\n>teach others to trade\n>they all lose money\n>now im influencer\n>thanks crypto"
];

// Create post with typing effect
const createPost = async (postData, isNPC = false) => {
    const template = document.getElementById('post-template');
    const post = template.content.cloneNode(true);
    
    const postNumber = state.threadNumber + (++state.postCount);
    
    post.querySelector('.post-number').textContent = `No.${postNumber}`;
    post.querySelector('.post-time').textContent = 
        moment(postData.timestamp).format('MM/DD/YY(ddd)HH:mm:ss');
    
    const greentextElement = post.querySelector('.greentext');
    const formattedText = formatGreentext(postData.content);
    
    const postElement = document.createElement('div');
    postElement.className = 'post';
    if (isNPC) postElement.classList.add('npc-post');
    postElement.appendChild(post);
    
    document.getElementById('responses').insertBefore(
        postElement, 
        document.getElementById('responses').firstChild
    );
    
    await typeText(greentextElement, formattedText);
    
    // Set firstPostCompleted after first non-NPC post
    if (!isNPC) {
        state.firstPostCompleted = true;
    }
    
    updateThreadStats();
    return postElement;
};

// Modify the simulateThread function
const simulateThread = () => {
    let lastReplyTime = Date.now();
    let replyCount = 0;

    const checkForReplies = () => {
        const now = Date.now();
        const timeSinceLastReply = now - lastReplyTime;
        
        const baseDelay = replyCount === 0 ? 1000 : 5000;
        const randomDelay = Math.random() * 2000;
        
        if (state.firstPostCompleted && 
            timeSinceLastReply > (baseDelay + randomDelay) && 
            Math.random() < 0.7 && 
            !state.isGenerating &&
            !isTypingInProgress) {
            
            isTypingInProgress = true;
            const randomReply = npcReplies[Math.floor(Math.random() * npcReplies.length)];
            const simulatedPost = {
                content: randomReply,
                timestamp: Date.now()
            };
            
            createPost(simulatedPost, true).then(() => {
                isTypingInProgress = false;
                lastReplyTime = now;
                replyCount++;
            });
        }
    };

    setInterval(checkForReplies, 1000);
};

// Update thread statistics
const updateThreadStats = () => {
    const statsEl = document.querySelector('.thread-stats');
    statsEl.innerHTML = `
        <span class="reply-count">${state.postCount} replies</span>
        <span class="page-count">Page 1/1</span>
        <span class="thread-status">${state.isGenerating ? 'Oracle is typing...' : ''}</span>
    `;
};

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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Deselect all templates first
    document.querySelectorAll('.template').forEach(t => t.classList.remove('selected'));

    // Select random template
    const randomTemplate = document.querySelector(`[data-template="${state.selectedTemplate}"]`);
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

// Add this near the bottom of the file, before the DOMContentLoaded event
document.addEventListener('click', (e) => {
    // Carousel navigation
    if (e.target.closest('.carousel-arrow')) {
        const scrollContainer = document.querySelector('.template-scroll');
        const scrollAmount = 200; // Adjust this value as needed
        const direction = e.target.closest('.carousel-arrow').classList.contains('left-arrow') ? -1 : 1;
        scrollContainer.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
});

// Add this to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel scroll
    const scrollContainer = document.querySelector('.template-scroll');
    scrollContainer.addEventListener('scroll', () => {
        const arrows = document.querySelectorAll('.carousel-arrow');
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        arrows[0].style.display = scrollLeft > 0 ? 'flex' : 'none';
        arrows[1].style.display = scrollLeft < maxScroll ? 'flex' : 'none';
    });
});

// Add this near the bottom of the file, before the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.template-scroll');
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Touch events for mobile
    scrollContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // The multiplier controls the speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Mouse events for desktop
    scrollContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDragging = false;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDragging = false;
    });
});

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