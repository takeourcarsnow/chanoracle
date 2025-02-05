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