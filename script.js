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
let ballSpeedX=1;
let ballSpeedY=1;

window.setInterval(()=>{
    ball.style.left = ball.getBoundingClientRect().left+ballSpeedX+"px";
    ball.style.top = ball.getBoundingClientRect().top+ballSpeedY+"px";
    if(ball.getBoundingClientRect().top<0){
        ballSpeedY=1;
    }if(ball.getBoundingClientRect().top>window.innerHeight-ball.offsetHeight){
        ballSpeedY=-1;
    }
    // }if(ball.getBoundingClientRect().left<0){
    //     ballSpeedX=1;
    // }if(ball.getBoundingClientRect().left>window.innerWidth-ball.offsetWidth){
    //     ballSpeedX=-1;
    // }
    // if(ball.getBoundingClientRect().left>posPaddleTwo.left && ball.getBoundingClientRect().left<posPaddleTwo.right && ball.getBoundingClientRect().top<posPaddleTwo.bottom && ball.getBoundingClientRect().top>posPaddleTwo.top){
    //     ballSpeedX=1;
    // }if(ball.getBoundingClientRect().left<posPaddleOne.right && ball.getBoundingClientRect().left>posPaddleOne.left && ball.getBoundingClientRect().top<posPaddleOne.bottom && ball.getBoundingClientRect().top>posPaddleOne.top){
    //     ballSpeedX=-1;
    // }
    if(ball.getBoundingClientRect().left<0 && ball.getBoundingClientRect().top<posPaddleOne.top+paddleOne.offsetHeight && ball.getBoundingClientRect().top>posPaddleOne.top){
        ballSpeedX=1;
    }if(ball.getBoundingClientRect().left>window.innerWidth-ball.offsetWidth && ball.getBoundingClientRect().top<posPaddleTwo.top+paddleTwo.offsetHeight && ball.getBoundingClientRect().top>posPaddleTwo.top){
        ballSpeedX=-1;
    }
    // if(ball.getBoundingClientRect().left<window.outerWidth){

    //     location.reload();
        
    // }
    // if(ball.getBoundingClientRect().left>window.outerWidth){
    //     location.reload();
    // }
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
