$(document).ready(function() {
	$("#Randomer").on("click", function() {
		sprite.X = 64*(Math.round(-Math.random()*20));
		sprite.Y = 64*(Math.round(-Math.random()*20));
		ctx.drawImage(ssheet, sprite.X, sprite.Y);
	});
});