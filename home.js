/**
 * New node file
 */
$(function(){
        $('#DOJ').datepicker({dateFormat: 'yymmdd'});
});

var liveURL = 'http://api.railwayapi.com/live/train/';
var liveURL2 = '/doj/';
var liveURL3 = '/apikey/dfyoo6077';

//Url should be of type - http://api.railwayapi.com/live/train/<train number>/doj/<yyyymmdd>/apikey/<apikey>/
function getStations() {
	var doj = $('#DOJ').val();
	var trainNo = $('#trainNo').val();
	var url = liveURL + trainNo + liveURL2 + doj +  liveURL3;
	alert('calling URL:' + url);
	$.get( url, function( data ) {
		  alert(data);
	}, "json" );
}