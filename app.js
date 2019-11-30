// Cashing DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
//

// This function generates randomly Computer Choices
function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToLetter(letter) {

	if (letter === 'r')
		return "rock"

	else if (letter === 'p')
		return "paper"
	
	return "scissors";
	
}

function win(userCh, computerCh) {
	// changing score 
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

// changing text ES5
	//result_div.innerHTML = convertToLetter(userCh) + " beats " + convertToLetter(computerCh) + ". You win! 🏆😁"
// changing text ES6 (newest javascript version)
	result_div.innerHTML = `${convertToLetter(userCh)} beats ${convertToLetter(computerCh)}. You win! 🏆😁`
// and replace userWordSmall
	
	// setting green border in case of a win
	/*
		var style = document.createElement('style');
	 	document.head.appendChild(style);
	    style.sheet.insertRule('#r, #p, #s {border-color: #0f0}');
		console.log("win");
	*/
	document.getElementById(userCh).classList.add('green-glow');	
	setTimeout(function() {
		document.getElementById(userCh).classList.remove('green-glow');	
	}, 500);
}

function draw(userCh, computerCh) {
	// changing score
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	// make choices look more clear
    /*
		const userWordSmall = "user".fontSize(3).sub();
    	const compWordSmall = "comp".fontSize(3).sup();
    */

	// changing text
	result_div.innerHTML = convertToLetter(userCh)/* + userWordSmall*/ + " equal " + convertToLetter(computerCh)/* + compWordSmall*/ + ". it's a draw 🙂"

	// setting grey border in case of a draw
	/*
		var style = document.createElement('style');
	 	document.head.appendChild(style);
	    style.sheet.insertRule('#r, #p, #s {border-color: #fecf4e}');
		console.log("draw");
	*/

	document.getElementById(userCh).classList.add('gray-glow');
	// ES6 one line function
	setTimeout( () => document.getElementById(userCh).classList.remove('gray-glow'), 500);
}

function lose(userCh, computerCh) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

    // changing text
	result_div.innerHTML = convertToLetter(userCh)+ " loses to " + convertToLetter(computerCh) + ". You lose 😢😟😱"

	// setting red border in case of a loss
	/*
		var style = document.createElement('style');
 		document.head.appendChild(style);
    	style.sheet.insertRule('#r, #p, #s {border-color: red}');
		console.log("loss");
	*/
	document.getElementById(userCh).classList.add('red-glow');

	setTimeout(function() {
		document.getElementById(userCh).classList.remove('red-glow');
	}, 500);
	
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;

	}
}


function main() { // ES6
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
}

main();