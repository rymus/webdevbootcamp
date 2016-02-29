var todos = [];

function deleteItem() {
	var item = prompt("Delete which item?");
	todos.splice(item,1);
	console.log("Deleted item");
}

function listItems() {
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log(todos);
}

function newItem() {
	var item = prompt("What would you like to add?");
	todos.push(item);
}

while (answer !== "quit") {
var answer = prompt("What would you like to do?");

	if (answer === "new") {
		 newItem();
	}
	else if (answer === "list") {
		listItems();
	}
	else if (answer === "delete") {
		deleteItem();
	}
}
console.log("You quit the app");


