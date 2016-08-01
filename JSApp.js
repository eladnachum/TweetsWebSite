
var tweets = [
    ['Title', 'Content','Posted at'],
    ['Sample Title', 'Sample Content.......','Sample postDate']	
];


var html1 ='<h1>' + 'IBM Tweets Windows' + '</h1>';

var html2 = '<div style="width: 1000px; height: 300px; background-color: lightblue">' + 'Tweets....' + createTable(tweets)+'</div>';

var html3 = '<br>' +'LastUpdated: ' +  TheDate() + '<br>';

function run() {
    document.getElementById('test1').innerHTML = html1;
    document.getElementById('test2').innerHTML = html2;
	document.getElementById('test3').innerHTML = html3;
}
// Run everything when the document loads.
//window.onload = run;
