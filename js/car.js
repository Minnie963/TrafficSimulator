//This is the car Class. 

var Car = function(carPath) {
	var path = carPath;
	var pathIndex = 1;
	var dist = Math.sqrt((path[pathIndex+1]['x']-path[pathIndex]['x'])*(path[pathIndex+1]['x']-path[pathIndex]['x'])+
		(path[pathIndex+1]['y']-path[pathIndex]['y'])*(path[pathIndex+1]['y']-path[pathIndex]['y']));
	this.carCoord = {};
	this.image = new Image();
	this.angle = 0;
	this.carCoord['x'] = 0;
	this.carCoord['y'] = 0;
	this.image.src = "resources/cars/taxi.png";

	//Functions

	this.move = function() {

		//change next Destination if car has arrived
		if(pathIndex < path.length){
			var x = Math.round(this.carCoord['x']);
			var y = Math.round(this.carCoord['y']);
			if(x == path[pathIndex]['x'] || y == path[pathIndex]['y']){
				pathIndex++;
				if(pathIndex >= path.length)
					return;
				//change angle
				this.angle = Math.atan2((path[pathIndex]['x'] - path[pathIndex-1]['x']),
				(path[pathIndex]['y'] - path[pathIndex-1]['y'])) * (180 / Math.PI);

				if (this.angle < 0)
					this.angle = Math.abs(this.angle);
				else 
				    this.angle = 360 - this.angle;

				//change dist
				dist = Math.sqrt((path[pathIndex]['x']-path[pathIndex-1]['x'])*(path[pathIndex]['x']-path[pathIndex-1]['x'])+
					(path[pathIndex]['y']-path[pathIndex-1]['y'])*(path[pathIndex]['y']-path[pathIndex-1]['y']));
			}

			//move Car
			var velx = (path[pathIndex]['x'] - path[pathIndex-1]['x'])/dist;
			var vely = (path[pathIndex]['y'] - path[pathIndex-1]['y'])/dist;
			var x = Math.round(this.carCoord['x']);
			var y = Math.round(this.carCoord['y']);
			this.carCoord['x']+=velx;
			this.carCoord['y']+=vely;
		}
	}
};

var CarList = function(carPath) {
	this.cars = []
	var size = 0;
	var path = carPath;

	this.drawCars = function(canvas) {
		for (var i = 0; i < size; i++) {
			var image = this.cars[i].image;
			var x = this.cars[i].carCoord['x'];
			var y = this.cars[i].carCoord['y'];
			canvas.save();
			// canvas.translate(image.width,image.height);
			// canvas.rotate(Math.PI / 180 * (this.cars[i].angle));
			canvas.drawImage(image,0,0,image.width,image.height,x,y,50,50);
			canvas.restore();
		}
	}

	this.createCars = function(userSize) {
		for (var i = 0; i < userSize; i++) {
			this.cars.push(new Car(path));
		}
		size = userSize;
	};

	this.moveCars = function() {
		for (var i = 0; i < size; i++) {
		
				this.cars[i].move();
		}
	}
};
