(function(window) {

	// Star that extends Container
	function Star(radius) {
	  this.initialize(radius);
	}

	Star.prototype = new Container();

	// public properties:
	Star.prototype.vX = 0;
	Star.prototype.vY = 0;
	Star.prototype.x = 0;
	Star.prototype.y = 0;
	Star.prototype.starBody = null;
	Star.prototype.bounds = 0;
		
	// constructor:
	Star.prototype.Container_initialize = Star.prototype.initialize; //unique to avoid overiding base class
		
	Star.prototype.initialize = function(radius) {
		
		this.Container_initialize();
		
		this.starBody = new Shape();
		this.addChild(this.starBody);
		this.drawStar(radius);
		this.bounds = radius*2;
		this.vX = 8;
		this.vY = -8;
	}
		
	// public methods:
	Star.prototype.drawStar = function(r){

		var o = this.starBody, g = o.graphics;
		
		g.clear();
		g.setStrokeStyle(1);
		g.beginStroke(Graphics.getRGB(0,0,0));
		g.beginFill(Graphics.getRGB(255,0,0));
		g.drawPolyStar(0,0,r, 8, 3, 180);//x , y , radius , sides , pointSize , angle

	}

	Star.prototype.outOfBounds = function(bounds){
		return this.x < this.bounds || this.y < this.bounds || this.x > canvas.width+this.bounds || this.y > canvas.height+bounds;
	}

	// tick callback
	Star.prototype.tick = function() {
		
		//log('star ticker incorporated');

		if(this.outOfBounds()) {
			//log('out of bounds');
			this.vX = -this.vX;
			this.vY = -this.vY;
		} else {
			//log('in bounds');
			this.vX = this.vX;
			this.vY = this.vY;
		}

		this.x += this.vX;
		this.y += this.vY;

	}
		
	window.Star = Star;

}(window));