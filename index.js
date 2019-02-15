var Word = require("./Word.js");
var inquirer = require ("inquirer");

var words = ["Fullmetal Alchemist Brotherhood", "Parasyte", "Ouran High School Host Club", "Princess Mononoke", "Garzeys Wing", "Wolfs Rain", "Space Dandy", "Blue Exorcist", "One Punch Man", "One Piece", "Penguindrum", "Madoka Magica", "Howls Moving Castle"];
var currentWord;
var currentWordString;

function newWord() {
	var randNum = Math.floor(Math.random() * words.length);

	//create new Word object with selected word
	currentWord = new Word(words[randNum]);
	currentWordString = words[randNum];
	
	playGame();
}

function playGame() {
	//if word has not been completely guessed and player has not lost
	if (currentWord.returnWord() != currentWordString.toLowerCase() && currentWord.chances > 0) {
		console.log(currentWord.returnWord());
		console.log("Chances Remaining: " +currentWord.chances);

		//allow user to guess letter and compare againt the current word
		inquirer.prompt([
			{
				name: "letter",
				message: "Guess a letter"
			}
		]).then(function(answers) {
			currentWord.guess(answers.letter);

			//loop this function until word is finished
			playGame();
		});
	} else {
		endGame();
	}
}

function endGame() {
	//tell user if they won or lost
	if (currentWord.chances > 0) {
		console.log("Great Job! Next Word:");
	} else {
		console.log("Out of chances! Next Word:");
	}

	//remove used word from array of words
	words.splice(words.indexOf(currentWordString), 1);

	//if all words used, reset array
	if (words.length == 0)		
		words = ["Over the line", "Your roll dude", "The Dude abides", "Nice marmot", "The Dude", "Walter", "Donnie", "Jeffery Lebowski"];

	//restart with new word
	newWord();
}

//start game on launch
newWord();