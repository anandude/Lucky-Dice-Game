var randomnum=(Math.random()*6);
var randomnum1= Math.floor(randomnum)+1;
if (randomnum1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}else if (randomnum1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}else if (randomnum1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}else if (randomnum1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}else if (randomnum1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}else if (randomnum1===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}else {
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}




var randomnum2=(Math.random()*6);
var randomnum3= Math.floor(randomnum2)+1;
if (randomnum3===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}else if (randomnum3===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}else if (randomnum3===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}else if (randomnum3===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}else if (randomnum3===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}else if (randomnum3===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}else {
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}


if (randomnum1>randomnum3){
    document.querySelector("h1").innerHTML="Player one is the winner.";
}else if (randomnum1<randomnum3){
    document.querySelector("h1").innerHTML="Player two is the winner.";
} else{
    document.querySelector("h1").innerHTML="It is a Draw.";
}