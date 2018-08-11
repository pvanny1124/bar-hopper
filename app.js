var express       = require('express');
var Twitter       = require('twitter');
var bodyParser    = require('body-parser');

var app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var client = new Twitter({
  consumer_key: 'nVZgI0PBS3xOIKfuXKqBgKj1q',
  consumer_secret: 'qLVp6FlDh3cT1euJ7NvNQk5S28B1TdEcCbyzmxaoWNzyhw0H7N',
  access_token_key: '720751681470885888-KeFeo4l7Bme05ZcZYyAxf6EUI3EUtIB',
  access_token_secret: 'aUOIgxJvGhCWoQtOfVW0719jb41pNFY3nCEQRBSzucp4S'
});

var tw = [];

client.get('search/tweets', {q: '#gameofthrones'}, function(error, tweets, response) {
    tweets.statuses.forEach(function(tweet) {
        console.log(tweet[0])
    });
 });
 
 

app.get('/', function(req, res){
    res.render('index');
});

app.post('/', function(req, res){
  var state = req.body.state;
  var movies = req.body.movies;
  res.render('results', {state: state, movies: movies});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('THE SERVER IS RUNNING');
})



