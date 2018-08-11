var express         = require("express"),
    mongoose        = require("mongoose"),
    Event           = require('./models/event.js');
    
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

var url = "mongodb://localhost/barhopper";
mongoose.connect(url);


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Event.create({
//     eventName: 'At and t hackathon',
//     capacity: '100',
//     city: 'new york city',
//     state: 'new york',
//     date: '11/11/2004',
//     time: '10:50:20',
//     title: 'big ass hackathon',
//     address: '601 27st',
//     type: 'code event'
// })

var users = [];
var registeredLocations = [];

//Testing
var events = [
    {
        name: "Game of Thrones",
        location: "New York",
        rating: 4.8,
        venue: "Bob's Bar"
    },
    {
        name: "Money Ball",
        location: "New York",
        ratin: 3.6,
        venue: "Joe's Joint"
    },
    {
        name: "Basketball game",
        location: "New York",
        rating: 4.3,
        Venue: "Laura's Lounge"
    }
    ];
var results = [];


//ROUTES
app.get("/", function(req, res){
    res.render("home");
});

app.get('/aboutUs', function(req, res){
    //logic for about us page    
});

app.get('/events')

app.post("/search", function(req, res){
    // app.get("/search", function(req, res){
    var mySearch = req.body.mySearch;
    // var mySearch = "game";
    var nearMe = req.body.nearMe;
    var byName = req.body.byName;
    var byLocation = req.body.byLocation;
    
    // if(nearMe) {
        mySearch = mySearch.toLowerCase();
        events.forEach(function(event){
            var eventName = event.name.toLowerCase();
            var newWord = "";
            
            //Parse event name into a string
            for(var i=0; i < eventName.length; i++) {
                if(eventName[i] !== " ") {
                    newWord += eventName[i];
                    console.log(newWord);
                    
                    //Check if the search query is the same as an event
                    if(newWord === mySearch) {
                        results.push(event);
                        newWord = "";
                    }
                } else {
                    newWord = "";
                }
            }
            newWord == "";
        });
    // }
    res.send(results);
});

app.get('/createForm', function(req, res){
    const states = ['New York', 'Chicago', 'Los Angeles'];
    
    res.render('createForm', {states: states});
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Bar Hopper App has started!");
});