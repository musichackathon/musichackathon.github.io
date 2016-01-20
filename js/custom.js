// tabletop
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1y3i5pz1w38oLihZqDqDp2gDB2mcd5HLQ_qa6A7K8xB4/pubhtml';
function init() {
		Tabletop.init( { key: public_spreadsheet_url,
                   callback: readData,
                   simpleSheet: true } )
	}

// read data
var team;
function readData(data, tabletop) { 
	team = data;
	console.log(team);
	showTeam();
}

function showTeam() {
	for (i=0; i < team.length; i++) {
		$('.members').append('<div id = "member" class = "col-md-3"><img src="' + team[i].image + '" /></div>');
	}
}


$(document).ready(function() {

	init();
});