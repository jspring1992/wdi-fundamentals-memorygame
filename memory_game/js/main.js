let cards = ["Queen", "Queen", "King", "King"];

let cardsInPlay = [];

let cardOne = cards[0];

let cardTwo = cards[1];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);

console.log("You flipped the " + cardsInPlay[0]);

console.log("You flipped the " + cardsInPlay[1]);

if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert('You found a match!');
	}

	else
	{
		alert('Sorry, try again!');
	}
}