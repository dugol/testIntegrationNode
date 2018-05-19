var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var secret =[0,0,0,0];
var codebreaker = require('./functionTest/codeBreaker1');

const port = process.env.PORT || 8000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
setSecret();

function ramdomSecret(){
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var secret=[];

    for (var i = 1; i <= 4; i++) {
        var num = Math.floor(Math.random() * array.length);
        var roll = array.splice(num, 1);
        var yourNumber = roll[0];
        secret.push(yourNumber);
    }
    console.log(secret);
    return secret;
    
}

function setSecret() {
    secret = ramdomSecret();
}

// ingresar palabra a la bd
app.get('/api/codebreaker/:number', function (req, res) {
    var number = req.params.number;
    

    codebreaker.setSecret(secret);
    res.send(JSON.stringify(codebreaker.game(number)));
});

server.listen(port, function () {
    console.log("Corriendo por el puerto " + port)
});
