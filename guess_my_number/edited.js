var inputnumber=document.querySelector(".guess");
var res=document.querySelector(".number");

var guessvalue=Math.trunc(Math.random()*20)+1;

var checkbutton=document.getElementById("check-btn");
checkbutton.addEventListener("click",checking);

var message=document.querySelector(".message");
var scores=20;
var highscore=document.getElementsByClassName("score")[0];
var highrecorded=document.querySelector(".highscore");
var again=document.querySelector(".btn again");
let x=0;
function checking(){
    let a=inputnumber.value ;
    if (a==guessvalue){
        
        document.querySelector("body").style.backgroundColor="green";
        message.textContent="Congrats correct guess!!"
        res.textContent=guessvalue;
        highscore.textContent=scores;
        if (scores>x){
            highrecorded.textContent=scores;
            x=scores;

        }
        
    }
    else if (a>guessvalue){
        if (scores>0){
        message.textContent="too high..";
        scores--;
        highscore.textContent=scores;
        }
        else {
            message.textContent="Lost the game :("
            document.querySelector("body").style.backgroundColor="red";
            highscore.textContent=scores;
        }
    }
    else{
        if (scores>0){
            message.textContent="too low..";
            scores--;
            highscore.textContent=scores;
        }
        else{
            message.textContent="Lost the game :("
            document.querySelector("body").style.backgroundColor="red";
            highscore.textContent=scores;
        }
        
    }

};

again.addEventListener("click",reset);

function reset(){
    scores=20;
    highscore.textContent=20;
    message.textContent = "Start guessing...";
    res.textContent = "?";
    document.querySelector("body").style.backgroundColor ="#222";
    inputnumber.value="";
    randomNumber=Math.trunc(Math.random() * 20) + 1;
    

}