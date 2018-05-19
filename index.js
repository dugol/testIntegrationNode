var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var codebreaker = require ('./functionTest/codeBreaker1');

const port = process.env.PORT || 8000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// ingresar palabra a la bd
app.get('/api/codebreaker/:number',function(req, res){	
    var number = req.params.number;
	res.send(JSON.stringify(codebreaker.game(number)));
});

server.listen(port, function(){
	console.log("Corriendo por el puerto "+port)
});
