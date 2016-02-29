// Problem 1: Print the reverse of an array

//The cheeky "I just fucking googled it" way...
var array = [1,2,3,4,5];

function printReverse(arr) {
	arr.reverse();
	console.log(arr);
}

//Another Way. The way I was fucking trying to do from the start!
function printReverse(arr) {
	for (var ai = arr.length -1; ai >= 0; ai--) {
		console.log(arr[ai]);
	}
}


// Problem 2: write a function that takes an array as an argument and returns true if all elements are identical

function isUniform(arr) {
	var firstItem = arr[0];
	// console.log(firstItem);

	var results = 0;
	for (var ai = 1; ai < arr.length; ai++) {
		if (firstItem !== arr[ai]) {
			results = 0;
			// console.log("no match");
		}
		else {
			results = 1;
			// console.log("match");
		}
	}
	if (results !== 0){
		return true;
	}
	else {
		return false;
	}
}

// Problem 3: sum of all array numbers

function sumArray(arr) {
	var total = 0;

	arr.forEach(function(item) {
		total += item;
	});

	return total;
}


// Problem 4: return maximum (highest) number in array

function max(arr) {
	var highnum = 0;

		arr.forEach(function(item) {
			if (highnum < item) {
				highnum = item;
			}
		});

	return highnum;
}