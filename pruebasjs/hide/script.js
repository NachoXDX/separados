var settingsImg = document.getElementById("settings-img");
var moveImg = document.getElementById("move-img");
var userImg = document.getElementById("user-img");
var referenceImg = document.getElementById("reference-img");

var settings = document.getElementById("settings");
var move = document.getElementById("move");
var user = document.getElementById("user");
var reference = document.getElementById("reference");

settingsImg.addEventListener("click", showSettings);
moveImg.addEventListener("click", showMove);
userImg.addEventListener("click", showUser);
referenceImg.addEventListener("click", showReference);


function showSettings(){
    move.style.display = "none";
    settings.style.display = "block";
    user.style.display = "none";
    reference.style.display = "none";

    settingsImg.style.border = "2px solid black"
    moveImg.style.border = "none";
    userImg.style.border = "none";
    referenceImg.style.border = "none";    
}

function showMove(){
    move.style.display = "block";
    settings.style.display = "none";
    user.style.display = "none";
    reference.style.display = "none";

    settingsImg.style.border = "none";
    moveImg.style.border = "2px solid black";
    userImg.style.border = "none";
    referenceImg.style.border = "none";
}

function showUser(){
    move.style.display = "none";
    settings.style.display = "none";
    user.style.display = "block";
    reference.style.display = "none";

    settingsImg.style.border = "none"
    moveImg.style.border = "none";
    userImg.style.border = "2px solid black";
    referenceImg.style.border = "none";
}

function showReference(){
    move.style.display = "none";
    settings.style.display = "none";
    user.style.display = "none";
    reference.style.display = "block";

    settingsImg.style.border = "none"
    moveImg.style.border = "none";
    userImg.style.border = "none";
    referenceImg.style.border = "2px solid black";
}
