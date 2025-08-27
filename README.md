# /biz/ Crypto Oracle

> "He bought? Dump eet. He sold? Pump eet." - Bogdanoff Twins, Eternal Market Manipulators

## Overview

/biz/ Crypto Oracle is a parody webapp inspired by 4chan's /biz/ board, channeling the spirit of the Bogdanoff twins to deliver AI-generated, greentext-style crypto advice, conspiracies, and market analysis. Powered by Google Gemini AI, it delivers maximum bogpill, copium, and quantum financial wisdom in authentic /biz/ style.

## Features

- **AI Oracle**: Generates /biz/-style greentext posts using Google Gemini AI.
- **Crypto Templates**: Choose from a variety of meme templates (moonshot, FUD, conspiracy, etc.).
- **Custom Context**: Add your own copium/hopium for personalized responses.
- **Wojak Emotional States**: Every post is full of wojak feels and Bogdanoff references.
- **Thread Simulation**: NPC replies and thread stats for full 4chan immersion.
- **Dark/Light Mode**: Quantum optimized, Bog-approved themes.
- **Rate Limiting**: Prevents spam (the Bogdanoffs are watching your IP).

## Demo

![screenshot](public/screenshot.png) <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm
- [Google Gemini API key](https://ai.google.dev/)

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory:

```
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=3000 # optional, defaults to 3000
```

### Running Locally

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Development Mode

```bash
npm run dev
```

## Deployment

This app is ready for [Vercel](https://vercel.com/) deployment. See `vercel.json` for configuration.

## Project Structure

```
chanoracle/
├── server.js         # Express backend, Gemini AI integration
├── public/           # Static frontend files
│   ├── index.html    # Main UI
│   ├── style.css     # 4chan-inspired CSS
│   └── js/           # Modular frontend scripts
├── package.json      # Project metadata and dependencies
├── vercel.json       # Vercel deployment config
└── .env              # (not committed) API keys and config
```

## Technologies Used
- Node.js, Express
- Google Gemini AI (`@google/generative-ai`)
- Vanilla JS, HTML, CSS
- Moment.js, UUID

## API Endpoints

- `POST /generate` — Generate a new Oracle post
- `GET /responses` — Get recent Oracle responses

## Credits
- Inspired by 4chan /biz/ culture, Bogdanoff memes, and Wojak lore
- Built by anon

## License
MIT

> not financial advice (but it's always right)
> maximum bogpill ahead
