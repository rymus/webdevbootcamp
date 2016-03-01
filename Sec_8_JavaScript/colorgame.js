var numSquares = 6; // Set initial number of squares. Starts by default in hard mode.
var colours = generateRandomColours(6); // Get some random colours
var squares = document.querySelectorAll(".square"); // Select all the squares
var pickedColour = pickColour(); // Set the colour code in the span inside the h1 tag
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message"); // Win or lose
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset"); // Reset button
var easyBtn = document.querySelector("#easyBtn"); // Easy mode button
var hardBtn = document.querySelector("#hardBtn"); // Hard more button

var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

		// NOTE TO SELF!!!
		// For some reason, after the above (and below) changes,
		// only three squares are appearing, even in hard mode.
		//
		// Check if 6 colours are being added to the array
		// or if 6 colours are being added, check that the last
		// three squares aren't remaining hidden (style.display = "none")



function reset() {
	colours = generateRandomColours(numSquares); // generate new colours
	pickedColour = pickColour(); // pick a new random colour
	colourDisplay.textContent = pickedColour; //change colour of squares
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		if(colours[i]) {
			squares[i].style.background = colours[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

// // What happens when the easy mode button is clicked
// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colours = generateRandomColours(numSquares);
// 	pickedColour = pickColour();
// 	colourDisplay.textContent = pickedColour;

// 	for (var i = 0; i < squares.length; i++) {
// 		if (colours[i]) {
// 			squares[i].style.background = colours[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}	
// });

// // What happens when the hard mode button is clicked
// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colours = generateRandomColours(numSquares);
// 	pickedColour = pickColour();
// 	colourDisplay.textContent = pickedColour;

// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colours[i];
// 		squares[i].style.display = "block";
// 	}
// });

// Reset all the things.
resetButton.addEventListener("click", function() {
	colours = generateRandomColours(numSquares); // generate new colours
	pickedColour = pickColour(); // pick a new random colour
	colourDisplay.textContent = pickedColour; //change colour of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colours[i];
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
});

colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colours[i];
	squares[i].addEventListener("click", function() { //add click listener to squares
		var clickedColour = this.style.background //grab colour of clicked square
		if(clickedColour === pickedColour) { //compare to pickedColour. If it matches, you're correct. If not, you're an idiot.
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
	var r = Math.floor(Math.random() * 256); // pick red 0 - 255
	var g = Math.floor(Math.random() * 256); // pick green 0 - 255
	var b = Math.floor(Math.random() * 256); // pick blue 0 - 255
	return("rgb(" + r + ", " + g + ", " + b + ")"); // return an RGB code
}