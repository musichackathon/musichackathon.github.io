// tabletop
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1y3i5pz1w38oLihZqDqDp2gDB2mcd5HLQ_qa6A7K8xB4/pubhtml';
var faqs_url = 'https://docs.google.com/spreadsheets/d/1OL2s1eLGcb-nGJYh16Gvf3Wo_NlFWrtgIKKubfDf1Kc/pubhtml';
var events_url = 'https://docs.google.com/spreadsheets/d/1VctYiTe3sYDsbbK0BlUYF0d4JQ_GkP790MFY5aYrv2o/edit#gid=0';

function init() {
		Tabletop.init( { key: public_spreadsheet_url,
                   callback: readData,
                   simpleSheet: true } )
}
function init2(){
	Tabletop.init( { key: faqs_url,
                   callback: readFaqs,
                   simpleSheet: true } )
}

function init3(){
		Tabletop.init( { key: events_url,
                   callback: readEvents,
                   simpleSheet: true } )
}

var events;

function readEvents(data,tabletop){
	events=data;
	console.log('hey');
	showEvents();
}

function showEvents(){
	console.log("xavier sucks");
}
var faqs;
function readFaqs(data,tabletop){
	faqs=data;
	showFaqs();
}

function showFaqs(){

	for (i=0; i < faqs.length; i++) {
		$('.questions').append('<div id = "member" class = "col-md-3"><p>' + faqs[i].question + '<br>' + faqs[i].answer + '</p> </div>');
	}
}
// read data
var team;
function readData(data, tabletop) { 
	team = data;
	showTeam();
}

function showTeam() {
	for (i=0; i < team.length; i++) {
		$('.members').append('<div id = "member" class = "col-md-3"><img src="' + team[i].image + '" /> <a href = "' + team[i].link +'">' + team[i].name + ' </a><p>' + team[i].description + '</p> </div>');
	}
}



$(document).ready(function() {

	init();
	init2();
	init3();
});