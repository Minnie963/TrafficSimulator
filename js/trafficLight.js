var tPoint = function(x, y){
	this.x = x;
	this.y = y;
	this.status = true;
};

//type == 0 is Three-way automata
//type == 1 is Four-way automata
var tLight = function(x, y){
	this.locX = x;
	this.locY = y;
    this.points = [];
    this.type = 0;
};

//JSON = "[{"points":[[{"x":10,"y":10}],[{"x":10,"y":10}],[{"x":10,"y":10}]], "type":0]},]"
var testTLight = [{"points":[[{"x":446, "y":218, "status":true},],[{"x":420, "y":242, "status":false},],[{"x":483, "y":250, "status":true},]], "type":0},];


//Three-way Automata
var tAutomata = function() {
	this.doTraffic = function(points) {
		if(points[0][0]['status'] && !points[1][0]['status'] && !points[2][0]['status']){
			console.log('x');
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = false;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = true;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = false;
			}
		}
		else if(!points[0][0]['status'] && points[1][0]['status'] && !points[2][0]['status']){
			console.log('y');
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = false;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = false;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = true;
			}
		}
		else if(!points[0][0]['status'] && !points[1][0]['status'] && points[2][0]['status']){
			console.log('z');
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = true;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = false;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = false;
			}
		}
		//experimental
		else if(points[0][0]['status'] && !points[1][0]['status'] && points[2][0]['status']){
			console.log('z');
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = false;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = true;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = true;
			}
		}
		else if(!points[0][0]['status'] && points[1][0]['status'] && points[2][0]['status']){
			console.log('z');
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = true;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = false;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = true;
			}
		}


		return points;
	};
};

var fAutomata = function() {
	this.doTraffic() = function() {
		if(points[0][0]['status'] && !points[1][0]['status'] && !points[2][0]['status'] && !points[3][0]['status']){
			//horizontal
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = false;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = true;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = false;
			}
			for (var i = 0; i < points[3].length; i++) {
				points[3][i]['status'] = false;
			}
		}
		else if(!points[0][0]['status'] && points[1][0]['status'] && !points[2][0]['status'] && !points[3][0]['status']){
			//vertical
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = false;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = false;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = true;
			}
			for (var i = 0; i < points[3].length; i++) {
				points[3][i]['status'] = false;
			}
		}
		else if(!points[0][0]['status'] && !points[1][0]['status'] && points[2][0]['status'] && !points[3][0]['status']){
			//cross-1
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = false;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = false;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = false;
			}
			for (var i = 0; i < points[3].length; i++) {
				points[3][i]['status'] = true;
			}
		}
		else if(!points[0][0]['status'] && !points[1][0]['status'] && !points[2][0]['status'] && points[3][0]['status']){
			//cross-2
			for (var i = 0; i < points[0].length; i++) {
				points[0][i]['status'] = true;
			}
			for (var i = 0; i < points[1].length; i++) {
				points[1][i]['status'] = false;
			}
			for (var i = 0; i < points[2].length; i++) {
				points[2][i]['status'] = false;
			}
			for (var i = 0; i < points[3].length; i++) {
				points[3][i]['status'] = false;
			}
		}
	};
};