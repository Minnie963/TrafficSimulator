var testPoints = [];
var cars;
var timer = 0;
var auto = new tAutomata();

function animate(){
	if(toAnimate){
		var canvas = document.getElementById('canvas').getContext('2d');
		canvas.clearRect(0,0,1200,1200);
		cars.drawCars(canvas);
		canvas.save();
		cars.moveCars();
	}
	if(timer == 500){
		testTLight[0]['points'] = auto.doTraffic(testTLight[0]['points']);
		timer = 0;
	}
	timer++;
	window.requestAnimationFrame(animate);
}

function startAnimation(){
	testPoints = path;
	cars = new CarList(testPoints, testTLight);
	cars.createCars(100);
	window.requestAnimationFrame(animate);
}
