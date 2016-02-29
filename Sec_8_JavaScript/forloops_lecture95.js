
// Numbers between -10 and 19
for (i = -10; i <=19; i++) {
	console.log(i);
}

// Even numbers between 10 and 40

//First way. Faulty. Won't always work correctly...
for (j = 10; j <= 40; j+=2) {
	console.log(j);
}

//Second Way. Works better.
for (j = 10; j <=40; j++) {
	if (j % 2 === 0) {
		console.log(j)
	}
}

// Odd numbers between 300 and 333
for (k = 300; k <= 333; k++) {
	if (k % 2 === 1) { // or (k % 2 !== 0)
		console.log(k);
	}
}

// Numbers between 5 and 50 that are divisble by 5 and 3. 
// Badly phrased, what he really meant was divisible by the product of 5 and 3. (5*3)
for (l = 5; l <= 50; l++) {
	if (l % (5*3) === 0) {
		console.log(l);
	}
}
