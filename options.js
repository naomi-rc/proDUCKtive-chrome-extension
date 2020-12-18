/**
 * Shows the responses from storage
 */
function showResponses(){
    chrome.storage.sync.get(['savedResponses'], 
    function(result){
        var textarea = document.getElementById('responses');
        var responses = result.savedResponses;
        if(responses != undefined){
            textarea.innerHTML = responses.join(";");
        }        
    });    
}

/**
 * Saves the responses to storage
 */
const saveResponses = function(event){
    var responsesText = document.getElementById("responses");
    var responses = responsesText.value.split(";");
    chrome.storage.sync.set({
        "savedResponses": responses
    });
    alert("Responses saved!");
}

document.getElementById('save').addEventListener('click', saveResponses);
showResponses();