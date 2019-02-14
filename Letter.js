var Letter = function(newLetter) {
	this.answer = newLetter.toLowerCase();
	this.solved = false;

	//always display spaces
	if (this.answer == " ")
	 	this.solved = true;

	//function that returns letter if solved or _ otherwise
	this.returnLetter = function() {
		if (this.solved)
			return this.answer;
		else
			return "_";
	}

	//function that changes solved if guess is correct
	this.guess = function(input) {
		if (input.toLowerCase() === this.answer)
			this.solved = true;
	};
}

module.exports = Letter;