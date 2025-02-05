require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Add this route to serve index.html at the root path
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Store recent responses in memory
let responses = [];

// Generate post numbers
const generatePostNumber = () => {
    return Math.floor(Math.random() * 900000000) + 100000000;
};

// Rate limiting
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 5;

const rateLimitMiddleware = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    
    if (!rateLimiter.has(ip)) {
        rateLimiter.set(ip, { count: 1, firstRequest: now });
        return next();
    }

    const userRequests = rateLimiter.get(ip);
    if (now - userRequests.firstRequest > RATE_LIMIT_WINDOW) {
        userRequests.count = 1;
        userRequests.firstRequest = now;
        return next();
    }

    if (userRequests.count >= MAX_REQUESTS) {
        return res.status(429).json({ 
            error: 'Too many requests anon, the Bogdanoffs are watching your IP' 
        });
    }

    userRequests.count++;
    next();
};

app.use(rateLimitMiddleware);

// Enhanced prompt engineering
const enhancePrompt = (basePrompt, crypto, context) => {
    const timeContext = moment().format('MMMM Do YYYY, h:mm:ss a');
    
    return `You are a typical 4chan /biz/ user posting from the shadows.
    Current time: ${timeContext}
    
    Remember:
    - Use authentic /biz/ language and slang
    - Start each line with >
    - Include wojak emotional states
    - Reference the Bogdanoffs frequently
    - Add conspiracy theories
    - Mention market manipulation
    - Include quantum immortality theories
    - Reference the Rothschilds
    - Add copium or hopium as appropriate
    
    ${basePrompt}
    
    Crypto: ${crypto}
    Additional Context: ${context}
    
    Make it authentic /biz/ style with maximum bogpill.`;
};

// Safety settings (minimum restrictions)
const safetySettings = [
    {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_NONE",
    },
    {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_NONE",
    },
    {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_NONE",
    },
    {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_NONE",
    },
];

app.post('/generate', async (req, res) => {
    try {
        const { prompt, crypto, template } = req.body;
        const enhancedPrompt = enhancePrompt(prompt, crypto, req.body.additionalContext || '');

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: enhancedPrompt }]}],
            generationConfig,
            safetySettings,
        });

        const response = result.response.text();
        
        // Create post object
        const post = {
            id: uuidv4(),
            postNumber: generatePostNumber(),
            timestamp: Date.now(),
            content: response,
            crypto,
            template
        };

        // Add to recent responses
        responses.unshift(post);
        responses = responses.slice(0, 50); // Keep only last 50 responses

        res.json(post);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Generation failed',
            message: 'Bogdanoff interrupted the quantum connection' 
        });
    }
});

// Get recent responses
app.get('/responses', (req, res) => {
    res.json(responses);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`
    >/biz/ Crypto Oracle is running in the quantum realm
    >port: ${PORT}
    >bogdanoff: watching from the simulation
    >rothschild: monitoring your trades
    >visit: http://localhost:${PORT} (before they dump it)
    `);
});