 /*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log ("user flipped" + cardOne);
console.log ("user flipped" + cardTwo);*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[2]) {alert ("You found a match!");}
		else {alert ("Sorry, try again");}
}
var flipCard = function (cardId) {
/*var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log ("user flipped" + cardOne);
var cardTwo = cards[1];
cardsInPlay.push("cardTwo");
console.log ("user flipped" + cardTwo);*/
console.log ("user flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
	/*if (cardsInPlay[0] === cardsInPlay[2]) {alert ("You found a match!");}
		else {alert ("Sorry, try again");}*/
}

flipCard(0);
flipCard(2);

