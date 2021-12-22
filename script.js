let paddleOne = document.getElementById("paddleOne");
let paddleTwo = document.getElementById("paddleTwo");
let posPaddleOne = document.getElementById("paddleOne").getBoundingClientRect();
let posPaddleTwo = document.getElementById("paddleTwo").getBoundingClientRect();
let paddleOneUP = false;
let paddleOneDOWN = false;
let paddleTwoUP = false;
let paddleTwoDOWN = false;
//ball

let ball = document.getElementById("ball");
let ballSpeedX=Math.random()<0.5?-3:3;
let ballSpeedY=Math.random()<0.5?-3:3;

window.setInterval(()=>{
    ball.style.left = ball.getBoundingClientRect().left+ballSpeedX+"px";
    ball.style.top = ball.getBoundingClientRect().top+ballSpeedY+"px";
    if(ball.getBoundingClientRect().top<0){
        ballSpeedY=3;
    }if(ball.getBoundingClientRect().top>window.innerHeight-ball.offsetHeight){
        ballSpeedY=-3;
    }
    if(ball.getBoundingClientRect().left<0 && ball.getBoundingClientRect().top<posPaddleOne.top+paddleOne.offsetHeight && ball.getBoundingClientRect().top>posPaddleOne.top){
        ballSpeedX=3;
        ballSpeedY = Math.random()<0.5?-3:3;
    }if(ball.getBoundingClientRect().left>window.innerWidth-ball.offsetWidth && ball.getBoundingClientRect().top<posPaddleTwo.top+paddleTwo.offsetHeight && ball.getBoundingClientRect().top>posPaddleTwo.top){
        ballSpeedX=-3;
        ballSpeedY = Math.random()<0.5?-3:3;
    }
     if(ball.getBoundingClientRect().x<-5){
        updatepaddleTwoScore();
        ball.style.top="50%";
        ball.style.left="50%";
     }
     if(ball.getBoundingClientRect().x>window.innerWidth){
        updatepaddleOneScore();
        ball.style.top="50%";
        ball.style.left="50%";
     }
},10);

document.addEventListener("keydown",(e)=>{
    if(e.key=="w"){
        paddleOneUP = true;
    }if(e.key=="s"){
        paddleOneDOWN = true;
    }if(e.key=="ArrowUp"){
        paddleTwoUP = true;
    }if(e.key=="ArrowDown"){
        paddleTwoDOWN = true;
    }
   update();
});

document.addEventListener("keyup",(e)=>{
    if(e.key=="w"){
        paddleOneUP = false;
    }if(e.key=="s"){
        paddleOneDOWN = false;
    }if(e.key=="ArrowUp"){
        paddleTwoUP = false;
    }if(e.key=="ArrowDown"){
        paddleTwoDOWN = false;
    }
});


function update(){
    if(paddleOneUP){
        posPaddleOne = document.getElementById("paddleOne").getBoundingClientRect();
        if(posPaddleOne.y>0){
            document.getElementById("paddleOne").style.top = posPaddleOne.y-10+"px";
        
        }
    }if(paddleOneDOWN){
        
        posPaddleOne = document.getElementById("paddleOne").getBoundingClientRect();
        if(posPaddleOne.y<window.innerHeight-paddleOne.offsetHeight-10){
            console.log(posPaddleOne.y);
            document.getElementById("paddleOne").style.top=posPaddleOne.top+10+"px";
           
        }
    }if(paddleTwoUP){
        posPaddleTwo = document.getElementById("paddleTwo").getBoundingClientRect();
        if(posPaddleTwo.y>0){
            document.getElementById("paddleTwo").style.top = posPaddleTwo.y-10+"px";
        
        }
    }if(paddleTwoDOWN){
        posPaddleTwo = document.getElementById("paddleTwo").getBoundingClientRect();
        if(posPaddleTwo.y<window.innerHeight-paddleTwo.offsetHeight-10){
            document.getElementById("paddleTwo").style.top = posPaddleTwo.top+10+"px";
        }
    }
}

function updatepaddleOneScore(){
    console.log("updatepaddleOneScore");
    let text = document.getElementById("playerOneScore");
    let score = parseInt(text.innerText);
    score++;
    text.innerText = score;
}
function updatepaddleTwoScore(){
    let text = document.getElementById("playerTwoScore");
    let score = parseInt(text.innerText);
    score++;
    text.innerText = score;

}