var canvas, stage;

// Starts the whole experience
function init()
{
	// get a reference to the canvas we'll be working with:
	canvas = document.getElementById("stage");

	// create a stage object to work with the canvas. This is the top level node in the display list:
	stage = new Stage(canvas);

	var star = new Star(20);
	// Start in the center
	star.x = canvas.width / 2;
	star.y = canvas.height / 2;

	var star2 = new Star(12);
	// Start in the center
	star2.x = canvas.width / 8;
	star2.y = canvas.height / 8;
	
	var star = new Star(20);
	// Start in the center
	star.x = canvas.width / 2;
	star.y = canvas.height / 2;

	var star3 = new Star(8);
	// Start in the center
	star3.x = canvas.width / 4;
	star3.y = canvas.height / 4;

	stage.addChild(star);
	stage.addChild(star2);
	stage.addChild(star3);
	stage.update();

	// start the tick and point it at the window so we can do some work before updating the stage:
	Ticker.addListener(this);
	Ticker.setFPS(30);
}

function tick(){
	//star.tick();
	stage.update();
}