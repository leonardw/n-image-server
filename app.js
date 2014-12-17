var express = require('express'),
	http = require('http');

var DEFAULT_DELAY = 1000; //one second

var app = express();
app.set('port', process.env.PORT || 8000);

var imgs = [
'img-00.png',
'img-01.png',
'img-02.jpg',
'img-03.png',
'img-04.jpg',
'img-05.jpg',
'img-06.jpg',
'img-07.gif',
'img-08.jpg',
'img-09.jpg'
];


function n(req, resp) {
	var seq = parseInt(req.params.seq, 10);
	var delay = parseInt(req.params.delay, 10) || DEFAULT_DELAY;
	var imgfile = __dirname + '/num/' + imgs[seq % 10];
	console.log("Request: sequence[%d] delay[%d]", seq, delay);
	setTimeout(function() {
		resp.sendFile(imgfile);
		console.log("Sent image ", imgfile);
	}, delay);
}


// Image Number REST API
app.route('/img/n/:seq').get(n);
app.route('/img/delay/:delay/n/:seq').get(n);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port', app.get('port'));
});
