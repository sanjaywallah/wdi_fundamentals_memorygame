 /*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log ("user flipped" + cardOne);
console.log ("user flipped" + cardTwo);*/

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",

},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"

}
];
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
console.log ("user flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
	/*if (cardsInPlay[0] === cardsInPlay[2]) {alert ("You found a match!");}
		else {alert ("Sorry, try again");}*/
console.log ("user flipped " + cards[cardId].cardImage);
console.log ("user flipped " + cards[cardId].suit);

}

flipCard(0);
flipCard(2);

