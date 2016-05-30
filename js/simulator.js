
/*------------------- OBJECT DEFINITIONS & GLOBAL VARIABLES -------------------------*/

function point(x, y, pointType){
    this.x = x;
    this.y = y;
    this.branch = [];
    this.type = pointType;
}

var path = [];

var mapVisibility = 1;

var toAnimate = false;

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

    $('#parse-data').click(function () {
        loadData($('#pathdata-tbox').val());
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
    $('#sim-start').click(function () {
        toAnimate = true;
        generateEntryPoint();
    });

    $('#sim-stop').click(function () {
        toAnimate = false;
    });

    $('#input-data').click(function () {
        DataBox(1);
    });

    $('#close-databox-button').click(function () {
        DataBox(0);
    });

});

/*------------------------------------------------------------------------- */

/*------------------- METHODS/FUNCTIONS  --------------------------------------*/

function loadMap(filename){
    currentMapImage = 'resources/maps/' + filename;
    $('#map-area').css('background-image', 'url(' + currentMapImage + ')');
    printToConsole('<br /> You loaded "' + filename + '" as your map.');
    mapVisibility = 1;
}

function showMap(){
    $('#map-area').css('background-image', 'url(' + currentMapImage + ')');
}

function hideMap(){
    $('#map-area').css('background-image', "url('')");
}

function printToConsole(msg){
    $('#console').html(msg);
}

function DataBox(dataBoxStatus){
    if(dataBoxStatus == 0){
        $('#get-data-box').attr('class', 'hidden');
    }
    else{
        $('#get-data-box').attr('class', '');
        printToConsole('<br />### Input Path and Automata Data ###. <br /><br /> Copy and Paste data to the textboxes provided.')
    }
}


function loadData(datafile){
    path = JSON.parse(datafile);
}
/*------------------------------------------------------------------------- */
