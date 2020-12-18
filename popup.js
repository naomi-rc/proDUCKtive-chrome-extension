/**
 * Returns a random number between lower and upper bound
 * @param {lower bound} lower 
 * @param {upper bound} upper 
 */
function random(lower, upper){
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

/**
 * Changes the speech text to a random message
 * @param {event that triggers speech} event 
 */
function speak(event){
    chrome.storage.sync.get(['savedResponses'], 
    function(result){
        var duckSpeech = document.getElementById("duck_speech");
        var responses = result.savedResponses;
        duckSpeech.innerText = "\"" + responses[random(1, responses.length)] + "\"";
    });    
};


document.getElementById('quack_button').addEventListener('click', speak);
document.addEventListener('keyup', function(e){if(e.code === 'Space'){speak(e);}});

