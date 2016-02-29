// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet");
// }

// alert("We made it!");


var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") < 0) {
	var answer = prompt("Are we there yet");
}

alert("We made it!");