
let defaultResponses = ["Be proDUCKtive!", "You can do this!", "What is it suppose to do?", "What does it do?", 
"Did you debug it?", "Did you google it?", "Is the code in the right place?", "Did you check for typos?"];

/**
 * Initialises extension
 */
var init = function(){
    setResponses(defaultResponses);
}

/**
 * Sets all possible response texts
 */
function setResponses(responses){ 
    chrome.storage.sync.set({
        savedResponses: responses
    });
}

chrome.runtime.onInstalled.addListener(init);