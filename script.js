var qAttempt =   0;
var score = 0;
var scorePercent = 0;


var q1Div = document.getElementById('q1');
var q2Div = document.getElementById('q2');
var q3Div = document.getElementById('q3');
var q4Div = document.getElementById('q4');
var q5Div = document.getElementById('q5');

function onRightAnswer() {
    score = score + 1;
    
}
function hideQ1Div() {
    q1Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        cResult()
}


function hideQ2Div() {
    q2Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        cResult()
}


function hideQ3Div() {
    q3Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
cResult()
}

function hideQ4Div() {
    q4Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
cResult()
}

function hideQ5Div() {
    q5Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        cResult()
}
function corans1(){
q1Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        score = score + 1;

        cResult()
}
function corans2(){
q2Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        score = score + 1;

        cResult()
}
function corans3(){
q3Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        score = score + 1;

        cResult()
}
function corans4(){
q4Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        score = score + 1;

        cResult()
}
function corans5(){
q5Div.setAttribute("class","hidden")
        qAttempt = qAttempt + 1;
        score = score + 1;

        cResult()
}




var second = 00;
var minute = 00;

setInterval(count, 1000);
var second = 1;
function count (){
     second++;
document.getElementById('min').innerHTML = minute;
document.getElementById('sec').innerHTML = second;

if(second === 59){
    second = 0;
    minute = minute + 1;
}
if(minute === 3){
    q1Div.setAttribute("class","hidden");
    q2Div.setAttribute("class","hidden");
    q3Div.setAttribute("class","hidden");
    q4Div.setAttribute("class","hidden");
    q5Div.setAttribute("class","hidden");
    document.getElementById('time').setAttribute("class","hidden");
    
    document.getElementById('scfield').setAttribute('class','field2');
    document.getElementById('score')

scorePercent =  (score / 5)*100;

document.getElementById("score").innerHTML = scorePercent+"%";

if(scorePercent < 80){
    document.getElementById('rmak').innerHTML = "YOUR SCORE IS LOW";
}

else if(scorePercent == 80 ){
    document.getElementById('rmak').innerHTML = "YOUR SCORE IS GOOD";
}

else if(scorePercent == 100 ){
    document.getElementById('rmak').innerHTML = "YOUR SCORE IS EXCELLENT";
}

}


}

function cResult(){
if  (qAttempt == 5){
final()
}
}
function final(){
document.getElementById('scfield').setAttribute('class','field2');

scorePercent =  (score / 5)*100;

document.getElementById("score").innerHTML = scorePercent+"%";

if(scorePercent < 80){
    document.getElementById('rmak').innerHTML = "YOUR SCORE IS LOW";
}

if(scorePercent == 80 ){
    document.getElementById('rmak').innerHTML = "YOUR SCORE IS GOOD";
}

if(scorePercent == 100 ){
    document.getElementById('rmak').innerHTML = "YOUR SCORE IS EXCELLENT";
}
}



