var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomimg = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg);

var randomNumber2 = Math.round(Math.random() * 5) + 1;
var randomimg2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimg2);

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 WON.!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WON.!";
} else {
    document.querySelector("h1").innerHTML = "It's a DRAW.!";
}