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
// var testTLight = [{"points":[[{"x":446, "y":218, "status":true},],[{"x":420, "y":242, "status":false},],[{"x":483, "y":250, "status":true},]], "type":0},];
var testTLight = [{"points":[
[{"x":517,"y":343,"status":true},{"x":526,"y":353,"status":true},{"x":534,"y":362,"status":true},{"x":544,"y":374,"status":true}],
[{"x":445,"y":477,"status":false},{"x":451,"y":487,"status":false},{"x":461,"y":495,"status":false},{"x":468,"y":508,"status":false}],
[{"x":572,"y":462,"status":false},{"x":562,"y":473,"status":false},{"x":551,"y":482,"status":false}]
], "type":0},];
// [{"x":62,"y":50,"status":true},{"x":68,"y":60,"status":true}],
// [{"x":88,"y":108,"status":false},{"x":78,"y":120,"status":false}],
// [{"x":36,"y":138,"status":false},{"x":28,"y":122,"status":false}]
// [{"x":74,"y":34,"branch":[],"type":0},{"x":88,"y":48,"branch":[],"type":0}
// {"x":90,"y":114,"branch":[],"type":0},{"x":78,"y":126,"branch":[],"type":0}
// {"x":28,"y":142,"branch":[],"type":0},{"x":18,"y":130,"branch":[],"type":0}]

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
	this.doTraffic = function() {
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
