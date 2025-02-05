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