var myRange = document.getElementById("my-range");
var incrementBtn = document.getElementById("increment-btn");
var decrementBtn = document.getElementById("decrement-btn");
var valueP = document.getElementById("value-p");
var value = 10;
incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);
function incrementValue(){
    if(value>= 90){
        value = 90;
    }
    else{
    value+=1;
    }
    myRange.value = value;
    valueP.textContent = "Value = " + value + "º";
    console.log(myRange.value);
}
function decrementValue(){
    if(value<=-90){
        value = -90;
    }
    else{
        value-=1;
    }
    myRange.value = value;
    valueP.textContent = "Value = " + value + "º";
    console.log(myRange.value);
}
