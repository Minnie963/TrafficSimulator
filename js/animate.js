
var testPoints = [{'x':10, 'y':10},{'x':20, 'y':50},{'x':50, 'y':30},];
var index = 0;
var car1 = new Car({'x':0, 'y':0},{'x':10, 'y':10});
function animate(){
	var canvas = document.getElementById('canvas').getContext('2d');
	var x = car1.carCoord['x'];
	var y = car1.carCoord['y'];
	
	if(index >= 2){

	}
	else if(Math.round(x) == testPoints[index]['x']) {
		index++;
		car1.changeDest(testPoints[index]);
		console.log(index);
	}
	canvas.clearRect(0,0,1200,1200);
	canvas.save();
	var image = car1.image;
	var x = car1.carCoord['x'];
	var y = car1.carCoord['y'];
	canvas.translate(car1.carCoord['x']+(car1.image.width/2),car1.carCoord['y']+(car1.image.height/2));
	canvas.rotate(car1.angle);
	canvas.drawImage(image,0,0,image.width,image.height,x,y,50,50);
	canvas.restore();
	canvas.save();
	if(car1.canMove())
		car1.move();
	window.requestAnimationFrame(animate);
}
