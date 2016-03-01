
// function changeColour() {
// 	var bg = document.querySelector("body");
// 	bg.style.background = "red";
// }

var btn = document.querySelector("button");
var isRed = false;

btn.addEventListener("click", function() { 

	if(isRed) {
		document.querySelector("body").style.background = "white";
		btn.innerHTML = "Change to Red";
		isRed = false;
	}
		else if (isRed = true) {
		document.querySelector("body").style.background = "red";
		btn.innerHTML = "Change to White";
		isRed = true;
	}
});

