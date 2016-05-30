var testPoints = [];
var cars;


function animate(){
	if(toAnimate){
		var canvas = document.getElementById('canvas').getContext('2d');
		canvas.clearRect(0,0,1200,1200);
		cars.drawCars(canvas);
		canvas.save();
		cars.moveCars();
	}
	window.requestAnimationFrame(animate);
}

function startAnimation(){
	testPoints = path;
	cars = new CarList(testPoints);
	cars.createCars(100);
	window.requestAnimationFrame(animate);
}
