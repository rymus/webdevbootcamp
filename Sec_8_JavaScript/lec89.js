//lecture 89

var count = -10;

while (count <= 19) {
	console.log("Number is " + count);
	count++;
}

var count = 10;

while (count <= 40) {
	if (count % 2 == 0) {
		console.log("Even number is " + count);
	}
	count++;
}

var count = 300;

while (count <= 333) {
	if (count % 2 == 1) {
		console.log("Odd number is " + count);
	}
	count++;
}

var count = 5;

while (count <= 50) {
	if (count % 5 == 0){
		console.log(count + " is divisible by 5");
	}
	else if (count % 3 == 0) {
		console.log(count + " is divisible by 3");
	}
	count++;
}