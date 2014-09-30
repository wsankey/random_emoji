var c=document.getElementById("XXX");
var ctx=c.getContext("2d");
var ssheet = new Image();
ssheet.src = "assets/emojione.sprites.png";

var sprite = {X:1,Y:1};

	sprite.X = 64*(Math.round(-Math.random()*20));
	sprite.Y = 64*(Math.round(-Math.random()*20));


ssheet.onload = function() {
	ctx.drawImage(ssheet, sprite.X, sprite.Y);
	$("#Randomer").on("click", function() {

		sprite.X = 64*(Math.round(-Math.random()*20));
		sprite.Y = 64*(Math.round(-Math.random()*20));
			ctx.drawImage(ssheet, sprite.X, sprite.Y);
			$(this).find("div:last").remove();
	});

};
