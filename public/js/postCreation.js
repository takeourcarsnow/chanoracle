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