// Problem 1: Even or Odd?
function isEven(x) {
	if (x % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function isEvenBetter(x) {
	return x 2 === 0;
}

// Problem 2: Factorial
function factorial(x) {
	var answer = x;
	if (x = 1) {
		return 1;
	}
	
	while (x > 1) {
		answer *= x -1;
		x -= 1;
	}
	return answer;
}


// Problem 3: Kebab to Snake
function	kebabToSnake(x) {
	return x.replace(/-/g, "_");
}