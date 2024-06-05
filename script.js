//initialize variables	
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneName = '';
let playerTwoName = '';

function roll(){
	
	if (document.getElementById('player1').value != '' && document.getElementById('player2').value != '' ){
		playerOneName = document.getElementById('player1').value;
		playerTwoName = document.getElementById('player2').value;
		
		document.getElementById('player1-name').textContent = playerOneName;
		document.getElementById('player2-name').textContent = playerTwoName;
	
    }

	
	if (document.getElementById('player1').value == ''|| document.getElementById('player2').value == ''){
		playerOneName = 'Player 1';
		playerTwoName = 'Player 2';
		
		document.getElementById('player1-name').textContent = 'Player 1';
		document.getElementById('player2-name').textContent = 'Player 2';
		
	}
	
	
	
	//Generate random number for each player
	let playerOne = randomInt();
	let playerTwo = randomInt();
	
	//Handling player score
	if (playerOne == playerTwo) {
		document.getElementById('total').textContent = "It's a tie!!";
	}
	
	if (playerOne > playerTwo) {
		playerOneScore++;
		document.getElementById('total').textContent = playerOneName + ' wins!';
	}
	
	if (playerOne < playerTwo){
		playerTwoScore++
		document.getElementById('total').textContent = playerTwoName + ' wins!';
	}


	updateScore();


	//Handle images
	let playerOneDice = document.getElementById('dice-1');
	playerOneDice.src = 'dice-' + playerOne + '.jpg';
	
	let playerTwoDice = document.getElementById('dice-2');
	playerTwoDice.src = 'dice-' + playerTwo + '.jpg';


}

//helper function to get a random integer between 1 and 6
function randomInt(){
 return Math.floor(Math.random() * 6) + 1;	
}

function updateScore(){
document.getElementsByClassName("score h-score")[0].textContent = playerOneScore;
document.getElementsByClassName("score g-score")[0].textContent = playerTwoScore;

}

//funtion to reset game to beginning
function resetGame(){
playerOneScore = 0;
playerTwoScore = 0;
playerOneName = '';
playerTwoName = '';

updateScore();

document.getElementById('player1-name').textContent = 'Player 1';
document.getElementById('player2-name').textContent = 'Player 2';
document.getElementById('player1').value = '';
document.getElementById('player2').value = '';
document.getElementById('dice-1').src = 'dice-1.jpg';
document.getElementById('dice-2').src = 'dice-1.jpg';
}