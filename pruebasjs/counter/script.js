var deltaIncrement = 0;
var interval;
var counter = 0;

var counterH1 = document.getElementById("counter-h1");
var iP = document.getElementById("i-p");

var incrementBtn = document.getElementById("increment-btn");
var decrementBtn = document.getElementById("decrement-btn");

incrementBtn.addEventListener("mousedown", function(){ interval = setInterval(startIncrement, 100) });

incrementBtn.addEventListener("mouseup", function(){ interval = clearInterval(interval); deltaIncrement = 0; iP.textContent = "i = " + deltaIncrement; });

incrementBtn.addEventListener("click", function(){ counter++; counterH1.textContent=counter;});

decrementBtn.addEventListener("mousedown", function(){ interval = setInterval(startDecrement, 100) });

decrementBtn.addEventListener("mouseup", function(){ interval = clearInterval(interval); deltaIncrement = 0; iP.textContent = "i = " + deltaIncrement; });

decrementBtn.addEventListener("click", function(){ counter--; counterH1.textContent=counter;});


function startIncrement(){
    deltaIncrement++;
    if(deltaIncrement>=0 && deltaIncrement< 10){
        counter++;
    }
    else if(deltaIncrement>= 10 && deltaIncrement<30){
        counter+=5;
    }
    else{
        counter+=10
    }
    counterH1.textContent = counter;
    iP.textContent = "i = " + deltaIncrement;
}

function startDecrement(){
    deltaIncrement++;
    if(deltaIncrement>=0 && deltaIncrement< 10){
        counter--;
    }
    else if(deltaIncrement>= 10 && deltaIncrement<30){
        counter-=5;
    }
    else{
        counter-=10
    }
    counterH1.textContent = counter;
    iP.textContent = "i = " + deltaIncrement;
}