var Letter = require("./Letter.js");

var Word = function(newWord) {
	this.wordArr = newWord.split("");	
	this.letterArr = [];
	this.chances = 5;

	//sets letterArr to an array of Letter objects matching the word given
	for (var i = 0; i < this.wordArr.length; i++) {
		var newLetter = new Letter(this.wordArr[i]);
		this.letterArr.push(newLetter);
	}

	//function to return current status of word as a String
	this.returnWord = function() {
		var word = "";

		for (var i = 0; i < this.letterArr.length; i++) {
			word += this.letterArr[i].returnLetter();
		}
		
		return word;
	}

	//function to check guess against each Letter in the array
	this.guess = function(input) {
		var correct = false;
		for (var i = 0; i < this.letterArr.length; i++) {
			if (!this.letterArr[i].solved) {
				this.letterArr[i].guess(input);
				if (this.letterArr[i].solved) {
					correct = true;
				}
			}
		}

		if (correct) {
			console.log("Correct!\n");
		} else {
			console.log("Incorrect!\n");
			this.chances--;
		}
	}
}


module.exports = Word;