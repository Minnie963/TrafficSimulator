
var testPoints = [{'x':0, 'y':0},{'x':10, 'y':10},{'x':20, 'y':50},{'x':50, 'y':30},{'x':500, 'y':320},
{'x':50, 'y':300},{'x':150, 'y':320},{'x':590, 'y':130},{'x':560, 'y':380},{'x':540, 'y':330},{'x':890, 'y':750},];
var index = 0;
var cars = new CarList(testPoints);
cars.createCars(1);

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

window.requestAnimationFrame(animate);