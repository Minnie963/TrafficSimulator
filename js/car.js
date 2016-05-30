//This is the car Class. 

var Car = function(carPath) {
	var path = carPath;
	var pathIndex = 1;
	var prevIndex = pathIndex - 1;
	var dist = 0;
	this.carCoord = {};
	this.image = new Image();
	this.image.src = "resources/cars/taxi.png";

	dist = initDist();
	this.angle = initAngle();
	prevIndex = goToEntry();
	pathIndex = prevIndex + 1;
	this.carCoord['x'] = carPath[prevIndex]['x'];
	this.carCoord['y'] = carPath[prevIndex]['y'];

	//Functions

	function goToEntry() {
		var entryPoints = [];
		entryPoints.push(0);
		for (var i = 0; i < path.length; i++) {
			if(path[i]['type'] == 1) {
				entryPoints.push(i+1);
			}
			if(path[i]['branch'].length > 0 && i < path.length-1 ) {
				entryPoints.push(i+1);
			}
		}
		
		var entry = Math.floor((Math.random() * 10)) % entryPoints.length;
		return entryPoints[entry];
	}

	function initDist() {
		//change dist
		dist = Math.sqrt((path[pathIndex]['x']-path[prevIndex]['x'])*(path[pathIndex]['x']-path[prevIndex]['x'])+
			(path[pathIndex]['y']-path[prevIndex]['y'])*(path[pathIndex]['y']-path[prevIndex]['y']));
		return dist;
	};

	function initAngle(){
		//change angle
		var angleY = path[pathIndex]['y'] - path[prevIndex]['y'];
		var angleX = path[pathIndex]['x'] - path[prevIndex]['x'];

		this.angle = Math.atan2(angleY, angleX) * (180 / Math.PI);

		if (this.angle < 0)
			this.angle = Math.abs(this.angle);
		else 
			this.angle = 360 - this.angle;

		if(angleX > 0) {
			//if going to the right
			this.angle = 90 - this.angle;
		}
		else {
			this.angle = 360 + 90 - this.angle;
		}

		return this.angle;
	}

	this.move = function() {

		//change next Destination if car has arrived
		if(pathIndex < path.length){
			var x = Math.round(this.carCoord['x']);
			var y = Math.round(this.carCoord['y']);
			if(x == path[pathIndex]['x'] && y == path[pathIndex]['y']){
				prevIndex = pathIndex;
				if(path[pathIndex]['branch'].length > 0) {
					var pathJump = path[pathIndex]['branch'].length;
					var randomPath = Math.floor((Math.random() * 10) % pathJump);
					pathIndex = path[pathIndex]['branch'][randomPath];
				}
				else
					pathIndex++;

				//if type is dead point, go to another point
				if(path[prevIndex]['type'] == 1 || pathIndex >= path.length){
					prevIndex = goToEntry();
					pathIndex = prevIndex + 1;
					this.carCoord['x'] = path[prevIndex]['x'];
					console.log(path[prevIndex]['x']);
					this.carCoord['y'] = path[prevIndex]['y'];
					dist = initDist();
					this.angle = initAngle();
					return;
				}

				//change angle
				this.angle = initAngle();

				//change dist
				this.dist = initDist();
			}

			//move Car
			var velx = (path[pathIndex]['x'] - path[prevIndex]['x'])/dist;
			var vely = (path[pathIndex]['y'] - path[prevIndex]['y'])/dist;
			x = Math.floor(this.carCoord['x']);
			y = Math.floor(this.carCoord['y']);
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
			var x = Math.round(this.cars[i].carCoord['x']);
			var y = Math.round(this.cars[i].carCoord['y']);
			canvas.save();
			canvas.translate(x,y);
			canvas.rotate(this.cars[i].angle*(Math.PI / 180));
			canvas.drawImage(image,0,0,image.width,image.height,-25,-25,50,50);
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
