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