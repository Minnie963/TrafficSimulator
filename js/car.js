//This is the car Class. 

var Car = function(uOrigCoord,uDestCoord) {
	var dist = 1;
	this.carCoord = {};
	var origCoord = uOrigCoord;
	var destCoord = uDestCoord;
	this.image = new Image();
	this.angle = 0;

	this.carCoord['x'] = 0;
	this.carCoord['y'] = 0;
	this.image.src = "resources/cars/taxi.png";

	this.canMove = function() {
		return Math.round(this.carCoord['x']) != destCoord['x'];
	}

	this.move = function() {
		var velx = (destCoord['x'] - origCoord['x'])/dist;
		var vely = (destCoord['y'] - origCoord['y'])/dist;
		var x = Math.round(this.carCoord['x']);
		var y = Math.round(this.carCoord['y']);

		this.carCoord['x']+=velx;
		this.carCoord['y']+=vely;
	}
	// change dest when car reaches destination
	this.changeDest = function(userDestCoord) {
		origCoord = destCoord;
		destCoord = userDestCoord;
		this.angle = Math.atan2(destCoord['x'] - origCoord['x'],
		 destCoord['y'] - origCoord['x']) * (180 / Math.PI);
		if (this.angle < 0) {
			this.angle = Math.abs(this.angle);
		} 
		else {
		    this.angle = 360 - this.angle;
		}
		console.log(this.angle);
		dist = Math.sqrt((destCoord['x']-origCoord['x'])*(destCoord['x']-origCoord['x'])+
			(destCoord['y']-origCoord['y'])*(destCoord['y']-origCoord['y']));
		console.log(dist);
	}
}