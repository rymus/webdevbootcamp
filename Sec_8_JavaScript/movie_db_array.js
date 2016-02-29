var movies = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: "yes"
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: "no",
	},
	{
		title: "The Martian",
		rating: 5,
		hasWatched: "yes"
	},
	{
		title: "Everest",
		rating: 4,
		hasWatched: "no"
	},
]

// movies.forEach(function(item) {
// 	if (movies[item].hasWatched == "yes") {
// 		console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
// 	}
// 	else {
// 		console.log("You have not watched " + movies[i].title + " - " + movies[i].rating + " stars");
// 	}
// });

for (var i = 0; i <= movies.length -1; i++) {
	if (movies[i].hasWatched == "yes") {
		console.log('You have watched "' + movies[i].title + '" - ' + movies[i].rating + " stars");
	}
	else {
		console.log('You have not watched "' + movies[i].title + '" - ' + movies[i].rating + " stars");
	}
}