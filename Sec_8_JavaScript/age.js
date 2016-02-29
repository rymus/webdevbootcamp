var age = prompt("Enter your age");

if (age < 0) {
	console.log("Error Message");
}

else if (age == 21) {
	console.log("Happy 21st birthday!!");
}

else if (age % 2) {
	console.log("your age is odd!");
}

else if (age / 2) {
	console.log("perfect square");
}

else {
	console.log("invalid result");
}