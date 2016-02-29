//create secret number
var secretNumber = 4;

var guess = prompt("Guess a number");

if (guess < secretNumber) {
	alert("Your guess was too low");
}
else if (guess > secretNumber) {
	alert("Your guess was too high");
}
else if (Number(guess) === secretNumber) {
	alert("You guessed correctly");
}

var number = 1;

while (number < 100) {
	console.log("Number is " + number);
	number += 1;
}


