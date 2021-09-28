function random123(index){
    var number = Math.floor(Math.random() * (6) + 1);
    var randomDiceImage = "dice" + number +".png"; //dice1.png - dice6.png
    var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - 
    var imgae = document.querySelectorAll("img")[index];
    imgae.setAttribute("src",randomImageSource)

    return number;
}

let player1 = random123(0);
let player2 = random123(1);
let player3 = random123(2);

// if num1 > num2 say Play 1 Wins!
// if num2 > num1 say Play 2 Wins!
// if num2 = num1 say Draw!

if (player1 > player2 && player1 > player3) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!"

} else if (player2 > player1 && player2 > player3) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!"

} else if (player3 > player1 && player3 > player2) {
    document.querySelector("h1").innerHTML = "Play 3 Wins!"

} else if (player1 > player3 && player2 > player3 && player1 == player2) {
    document.querySelector("h1").innerHTML = "Play 1,2 Wins!"

} else if (player1 > player2 && player3 > player2 && player1 == player3) {
    document.querySelector("h1").innerHTML = "Play 1,3 Wins!"

} else if (player2 > player1 && player3 > player1 && player2 == player3) {
    document.querySelector("h1").innerHTML = "Play 2,3 Wins!"

} else {
    document.querySelector("h1").innerHTML = "Draw!"
}