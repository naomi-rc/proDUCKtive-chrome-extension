let quackButton = document.getElementById("quack_button");
let duckSpeech = document.getElementById("duck_speech");
let speeches = ["Be proDUCKtive!", "You can do this!", "What is it suppose to do?", "What does it do?", 
"Did you debug it?", "Did you google it?", "Is the code in the right place?"];

console.log("init");
function random(lower, upper){
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

quackButton.onclick = function(){
    duckSpeech.innerText = speeches[random(1, speeches.length)];
    alert("hi");
};