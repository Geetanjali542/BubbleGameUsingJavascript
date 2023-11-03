var timer = 60;
// the above timer is for runTimer fun
var score = 0;
// the above var has been made for the increaseScore fun 
var hitrn = 0;
// the above var has been made for the getNewHit fun

// IMP CONCEPT
//jispe click karoge wo element par event raise hoga,
// aur event listner naa milne par event element ke parent par 
// listner dhudhega waha bhi na milne par event ke parent ke parent ke 
// parent par listner dhudhega


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    // this fun is aimed at finding one digit random number and storing it at hit var in the 
    // frontened for the hitting purpose
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}

function makeBubble(){

    var clutter = "";
    // the above has been left empty to store the value in this variable in the for loop
    for(var i = 1; i<=119; i++){
        var rn = Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${rn}</div>`;
    //    

    //    
    
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
    // and because of above one many bubbles appear on frontend
}

function runTimer(){
    var timerint = setInterval(function () {

        if(timer>0){
        // if the above if is not applied then the timer will continue to go decreasing
    // value instead of being stopped at zero
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }

        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over </h1>`;
            // above-it means whenever the time hits zero in the timer the #pbtm will be vacant 
            // means the bubbles won't appear
        }

    }, 1000);
    // because of this whole fun the timer thing works
}


document.querySelector("#pbtm")
// #pbtm is the container of white color space on which we have
//  added eventlistner and #pbtm consist of bubble so in this way we won't have 
// to create the event listner for every bubble

.addEventListener("click", function(dets){
    // alert("chal raha hai");
    var clickednum = Number(dets.target.textContent);
    //above  because of this we will get number which appears to be blue on console and for strings it is black color on console
    if(clickednum === hitrn){
        // clickednum - jis number pe clicked hua ho
        increaseScore();
        // above it will increase the score after every hit
        // runTimer();
        makeBubble();
        // after hitting again all the new bubbles will be made after every hit above
        getNewHit();
        // and after every hit it will reload a new hit
    }


    //text context  gives the number on which we have clicked on frontend, also Number only
    // gives us the number and not string
});


runTimer();
// increaseScore();
makeBubble();
getNewHit();



// means the fun has been called above 

