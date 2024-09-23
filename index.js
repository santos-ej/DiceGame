function setDiceValue(){
    let randomDigit = 0;
    randomDigit =  Math.floor(Math.random() * 6) + 1;
    return randomDigit;
}

var randomNumber1 = setDiceValue();
var randomNumber2 = setDiceValue();

document.querySelector(".img1").setAttribute("src","./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice" + randomNumber2 + ".png");

/* Match Decider */
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "It's a Tie!"
}



/* Set random dice for dice1 
if(randomNumber1 === 0 || randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    console.log("dice 1 is 1.");
} else if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    console.log("dice 1 is 2.");
} else if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    console.log("dice 1 is 3.");
} else if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    console.log("dice 1 is 4.");
} else if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    console.log("dice 1 is 5.");
} else if(randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    console.log("dice 1 is 6.");
} 
*/

/* Set random dice for dice2 

if(randomNumber2 === 0 || randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    console.log("dice 2 is 1.");
} else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    console.log("dice 2 is 2.");
} else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    console.log("dice 2 is 3.");
} else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    console.log("dice 2 is 4.");
} else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    console.log("dice 2 is 5.");
} else if(randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    console.log("dice 2 is 6.");
} 
*/
