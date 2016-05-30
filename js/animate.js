
var testPoints = [{"x":1200,"y":803,"branch":[],"type":0},{"x":1153,"y":793,"branch":[],"type":0},{"x":1109,"y":801,"branch":[],"type":0},{"x":1082,"y":829,"branch":[],"type":0},{"x":1051,"y":872,"branch":[],"type":0},{"x":982,"y":954,"branch":[],"type":0},{"x":927,"y":1018,"branch":[],"type":0},{"x":899,"y":1053,"branch":[],"type":0},{"x":927,"y":1129,"branch":[],"type":0},{"x":952,"y":1196,"branch":[],"type":1},{"x":207,"y":2,"branch":[],"type":0},{"x":250,"y":42,"branch":[],"type":0},{"x":346,"y":124,"branch":[],"type":0},{"x":446,"y":218,"branch":[],"type":0},{"x":483,"y":250,"branch":[],"type":0},{"x":531,"y":314,"branch":[],"type":0},{"x":546,"y":353,"branch":[],"type":0},{"x":555,"y":450,"branch":[],"type":0},{"x":555,"y":510,"branch":[],"type":0},{"x":560,"y":577,"branch":[],"type":0},{"x":570,"y":618,"branch":[],"type":0},{"x":577,"y":689,"branch":[],"type":0},{"x":594,"y":757,"branch":[],"type":0},{"x":618,"y":804,"branch":[],"type":0},{"x":692,"y":827,"branch":[],"type":0},{"x":781,"y":863,"branch":[],"type":0},{"x":808,"y":899,"branch":[],"type":0},{"x":864,"y":999,"branch":[7],"type":0},{"x":1,"y":1012,"branch":[],"type":0},{"x":39,"y":925,"branch":[],"type":0},{"x":75,"y":816,"branch":[],"type":0},{"x":79,"y":714,"branch":[],"type":0},{"x":84,"y":611,"branch":[],"type":0},{"x":87,"y":519,"branch":[],"type":0},{"x":90,"y":418,"branch":[],"type":0},{"x":104,"y":322,"branch":[],"type":0},{"x":118,"y":282,"branch":[],"type":0},{"x":138,"y":261,"branch":[],"type":0},{"x":167,"y":243,"branch":[],"type":0},{"x":214,"y":237,"branch":[],"type":0},{"x":256,"y":252,"branch":[],"type":0},{"x":301,"y":258,"branch":[],"type":0},{"x":346,"y":254,"branch":[],"type":0},{"x":420,"y":242,"branch":[14],"type":0},{"x":388,"y":2,"branch":[],"type":0},{"x":382,"y":39,"branch":[],"type":0},{"x":378,"y":81,"branch":[],"type":0},{"x":370,"y":102,"branch":[12],"type":0}];
var index = 0;
var cars = new CarList(testPoints);
cars.createCars(100);

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