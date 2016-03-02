var numSquares = 6; // Set initial number of squares. Starts by default in hard mode.
var colours = []; // Get some random colours
var pickedColour; // Set the colour code in the span inside the h1 tag

var squares = document.querySelectorAll(".square"); // Select all the squares
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message"); // Win or lose
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset"); // Reset button
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	
	setupModeButtons();
	setupSquares();
	reset();
}

// easy & hard mode buttons
function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function() {
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				reset();
			});
		}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
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
}

// Reset all the things.
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
			squares[i].style.display = "block"; // *** added this to ensure visibility of last 3 colours when changing from easy mode back to hard mode.
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function() {
	reset();
});

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