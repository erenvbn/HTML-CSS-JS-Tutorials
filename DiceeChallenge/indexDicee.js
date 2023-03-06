var randomNumber1 = Math.round(Math.random()*5);
var randomNumber2 = Math.round(Math.random()*5);

console.log(randomNumber1);
console.log(randomNumber2);
//console.log(img1Source);
//console.log(img2Source);

var S1 = "images/dice1.png"
var S2 = "images/dice2.png"
var S3 = "images/dice3.png"
var S4 = "images/dice4.png"
var S5 = "images/dice5.png"
var S6 = "images/dice6.png"
var imageSourceList = [S1, S2, S3, S4, S5, S6];

document.querySelector(".img1").setAttribute("src" , imageSourceList[randomNumber1]);
document.querySelector(".img2").setAttribute("src" , imageSourceList[randomNumber2]);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}