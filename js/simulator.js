
/*------------------- OBJECT DEFINITIONS & GLOBAL VARIABLES -------------------------*/

function point(x, y, pointType){
    this.x = x;
    this.y = y;
    this.branch = [];
    this.type = pointType;
}

var path = [];

var mapVisibility = 1;

/*------------------------------------------------------------------------- */

/*------------------- EVENT LISTENERS  --------------------------------------*/

$(document).ready(function () {

    //snap control panel left
    $('#cp-left').click(function () {
        $('#sidebar').css({ 'left': '0px', 'right': 'auto' });
    });
    //snap control panel right
    $('#cp-right').click(function () {
        $('#sidebar').css({ 'left': 'auto', 'right': '0px' });
    });

    $('#load-map').click(function () {
        loadMap($('#map-filename-input').val());
    });

    $('#show-hide-map').click(function () {
        if (mapVisibility == 0) {
            showMap();
            mapVisibility = 1;
        }
        else {
            hideMap();
            mapVisibility = 0;
        }
    });

});

/*------------------------------------------------------------------------- */




/*------------------- METHODS/FUNCTIONS  --------------------------------------*/

function loadMap(filename){
    currentMapImage = 'resources/maps/' + filename;
    $('#map-area').css('background-image', 'url(' + currentMapImage + ')');
    mapVisibility = 1;
}

function showMap(){
    $('#map-area').css('background-image', 'url(' + currentMapImage + ')');
}

function hideMap(){
    $('#map-area').css('background-image', "url('')");
}

/*------------------------------------------------------------------------- */
