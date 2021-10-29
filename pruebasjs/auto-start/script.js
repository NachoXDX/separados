var message = document.getElementById("message");

document.addEventListener("",changeText());

function changeText(){
    message.style.color = "green";
    message.textContent = "Succesful ;)";
    console.log("Todo OK!");
}