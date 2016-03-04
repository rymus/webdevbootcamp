// check off specific items by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click X to remove
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
	if (event.which === 13){
		var todoText = $(this).val()
		$("ul").append("<li><span><i class='fa fa-trash'></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle()
});
// Note
// 1. Use on(click) listeners to listen for EXISTING html elements when page loads. Not future elements.
// 2. Use x.stopPropagation to prevent click events from bubbling up to parent elements
// 3. Using append, select the parent element and append to that.