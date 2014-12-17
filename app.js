var express = require('express'),
	http = require('http');

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

function sendImg(resp, file) {
	resp.sendFile(file);
	console.log("Sent image file ", file);
}

function n(req, resp) {
	var seq = parseInt(req.params.seq, 10);
	var delay = parseInt(req.params.delay, 10);
	var imgFile = __dirname + '/num/' + imgs[seq % 10];
	console.log("Request: sequence[%d] delay[%d]", seq, delay);
	if (delay) {
		setTimeout(function() {
			sendImg(resp, imgFile);
		}, delay);
	} else {
		sendImg(resp, imgFile);
	}
}


// Image Number REST API
app.route('/img/n/:seq').get(n);
app.route('/img/delay/:delay/n/:seq').get(n);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port', app.get('port'));
});
