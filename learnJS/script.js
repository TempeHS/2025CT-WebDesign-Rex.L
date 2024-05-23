let enterName = prompt("Enter your Name");
let playerFeedback = "test";


loadDIV ();

function loadDIV () {
document.getElementById("ScriptThisDIV").innerHTML = "<h1>Hello " + enterName;
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<h2>Guess a number between 1 & 10</h2>";
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback;

}