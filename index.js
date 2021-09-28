var num1 = Math.floor(Math.random() * (6) + 1);
var randomDiceImage1 = "dice" + num1 + ".png";
var randomImageSource1 = "image/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var num2 = Math.floor(Math.random() * (6) + 1);
var randomDiceImage2 = "dice" + num2 + ".png";
var randomImageSource2 = "image/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (num1 > num2){
    document.querySelector("h1").innerHTML = "Player1 Win!";

}else if(){
    document.querySelector("h1").innerHTML = "Player2 Win!";
}