let speeches = ["Be proDUCKtive!", "You can do this!", "What is it suppose to do?", "What does it do?", 
"Did you debug it?", "Did you google it?", "Is the code in the right place?"];

function random(lower, upper){
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

function speak(event){
    var duckSpeech = document.getElementById("duck_speech");
    duckSpeech.innerText = "\"" + speeches[random(1, speeches.length)] + "\"";
};

document.getElementById('quack_button').addEventListener('click', speak);
document.addEventListener('keyup', function(e){if(e.code === 'Space'){speak(e);}});