var wins = 0;
var losses = 0;
var cards = [
	{
		"rank": "queen",
		"suit": "hearts",
		"cardImage": "images/queen-of-hearts.png"
	},
	{
		"rank": "queen",
		"suit": "diamonds",
		"cardImage": "images/queen-of-diamonds.png"
	},
	{
		"rank": "king",
		"suit": "hearts",
		"cardImage": "images/king-of-hearts.png"
	},
	{
		"rank": "king",
		"suit": "diamonds",
		"cardImage": "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var checkForMatch = function(){

	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			wins++;
			alert("You found a match!");
			document.querySelector('.won').textContent = wins;
		} else {
			losses++;
			alert("Sorry, try again!");
			document.querySelector('.lost').textContent = losses;
		}
	}
};
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};
var resetBoard = function(){
	var cardImages = document.querySelectorAll('.cardImg');
	for(var i = 0; i < cardImages.length; i ++ ){
		cardImages[i].setAttribute('src', "images/back.png");
	}
	cardsInPlay = [];
};
var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'cardImg');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	document.querySelector('.reset').addEventListener('click', resetBoard);
};
createBoard();
