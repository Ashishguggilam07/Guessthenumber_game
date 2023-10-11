let inputnumber=document.querySelector(".guess");
let res=document.querySelector(".number");

let guessvalue=Math.trunc(Math.random()*20)+1;

let checkbutton=document.getElementById("check-btn");
checkbutton.addEventListener("click",checking);

let message=document.querySelector(".message");
let scores=20;
let highscore=document.getElementsByClassName("score")[0];
let highrecorded=document.querySelector(".highscore");

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
let again=document.getElementById("againn")

again.addEventListener("click",reset);

function reset(){
    scores=20;
    highscore.textContent=20;
    message.textContent = "Start guessing...";
    res.textContent = "?";
    document.querySelector("body").style.backgroundColor ="#222";
    inputnumber.value="";
    guessvalue=Math.trunc(Math.random() * 20) + 1;
    

}