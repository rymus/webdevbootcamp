var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var resetGame = document.querySelector("#reset");
var numInput = document.querySelector("input");
var topScore = document.querySelector("#topScore");

var p1sc = document.querySelector("#p1sc");
var p2sc = document.querySelector("#p2sc");

var p1score = 0;
var p2score = 0;

var gameOver = false;
var winningScore = 5;

	player1.addEventListener("click", function() {
		if(!gameOver) {
			p1score += 1;
			if(p1score === winningScore){
				gameOver = true;
				p1sc.classList.add("winner");
			}
			p1sc.textContent = p1score;
		}
	});

	player2.addEventListener("click", function() {
		if(!gameOver) {
		p2score += 1;
		if(p2score === winningScore) {
			gameOver = true;
			p2sc.classList.add("winner");
		}
		p2sc.textContent = p2score;
	}
	});

resetGame.addEventListener("click", function() {
	reset();
});

function reset() {
		p1score = 0;
		p1sc.textContent = p1score;
		p1sc.classList.remove("winner");
		p2score = 0;
		p2sc.textContent = p1score;
		p2sc.classList.remove("winner");
		gameOver = false;	
}
	

	numInput.addEventListener("change", function() {
		winningScore = Number(this.value);
		topScore.textContent = winningScore;
		reset();
	});