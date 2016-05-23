

//event listeners
$(document).ready(function () {
    $('#map-area').click(function (e) {
        var x = Math.round(e.pageX - $(this).offset().left);
        var y = Math.round(e.pageY - $(this).offset().top);
        positionMarker(x, y);
        putMarker(x, y);
        var pt = new point(x, y);
        addPointsToPath(pt);
    });

    $('#trace-path').click(function () {
        tracePath();
    })

    $('#undo').click(function () {
        undoAddPoint();
    });

    $('#hide-path').click(function () {
        hidePath();
    });
});

//positions the red marker on the coordinate clicked on the map
function positionMarker(x, y){
    $("#map-pointer").css({top: y, left: x});
}

//point or coordinate object
function point(x, y){
    this.x = x;
    this.y = y;
}

function traffic(){
    var multiPath = [];
}

var path = [];

//adds points to a path for every point clicked on the map
function addPointsToPath(point){
    path.push(point);
    $('#coordinates-container').html('');
    
    for(var i = 0; i < path.length; i++){
        $('#coordinates-container').html($('#coordinates-container').html() + 'x: ' + path[i].x + ' y: ' + path[i].y + '<br/>');
    }
}

//leaves a red marker on the coordinate clicked on the map
function putMarker(x, y){
    var newID = 'point_' + x + '_' + y;
    $('#map-pointer').clone().attr('id', newID).appendTo('#map-area');
    $('#' + newID).attr('class', 'pin-pointer');
    $('#' + newID).css({ top: y - 5, left: x - 5});
}

var timer;
var index = 1;
var speedFactor = 700;
function tracePath(){
    $('#path-tracer').remove();
    var newID = 'path-tracer';
    $('#map-pointer').clone().attr('id', newID).appendTo('#map-area');
    $('#' + newID).attr('class', 'path-tracer');
    $('#path-tracer').css({ top: path[0].y - 5, left: path[0].x - 5 });
    timer = setInterval(trace, speedFactor);
}

function trace() {
    $('#path-tracer').css({ top: path[index].y - 5, left: path[index].x - 5 });
    index++;
    if(index >= path.length){
        clearInterval(timer);
        index = 1;
    }
}

function undoAddPoint(){
    var undoID = 'point_' + path[path.length - 1].x + '_' + path[path.length - 1].y;
    alert(undoID);
    //$('#' + undoID).remove();
}

function hidePath(){
    $('.pin-pointer').css('opacity', 0.2);
}







