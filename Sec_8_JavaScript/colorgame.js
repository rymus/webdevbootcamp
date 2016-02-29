var numSquares = 6;
var colours = generateRandomColours(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;

	for (var i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.background = colours[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}	
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colours[i];
		squares[i].style.display = "block";
		
	}
});

resetButton.addEventListener("click", function() {
	// generate new colours
	colours = generateRandomColours(numSquares);
	// pick a new random colour
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	//change colour of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colours[i];
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colours";

});

colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colours[i];

	//add click listener to squares
	squares[i].addEventListener("click", function() {
		//grab colour of clicked square
		var clickedColour = this.style.background
		//compare to pickedColour
		if(clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct";
			changeColours(clickedColour);
			h1.style.background = clickedColour;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";

		}
		
	});
}

function changeColours(colour) {
	//loop through all squares
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background = colour;
	}	
}

function pickColour() {
	var random = Math.floor(Math.random() * colours.length)
	return colours[random];
}

function generateRandomColours(i) {
	var arr = [];

	for(var x=0;x < i; x++) {
		arr.push(randomColour());
	}

	return arr;
}

function randomColour() {
	// pick red 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick green 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick blue 0 - 255
	var b = Math.floor(Math.random() * 256);

	return("rgb(" + r + ", " + g + ", " + b + ")");
}