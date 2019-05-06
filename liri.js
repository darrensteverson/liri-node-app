require("dotenv").config();


// Variables for getting data from API's
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var liriCommand = process.argv[2];
var userInput = process.argv.slice(3).join("");



// Switch cases for each command
function liriBot(liriCommand, userInput) {
switch(liriCommand) {

    case "movie-this":
        getOMDB(userInput);
        break;

    case "concert-this":
        getBands(userInput);
        break;

    case "spotify-this-song":
        getSpotify(userInput);
        break;

    case "do-what-it-says":
        getRandomTxt();
        break;
    }
};
// BandsInTown API
function getBands(){

    var artist = userInput;
    var bandURL =  "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


    axios.get(bandURL).then(
        function(response) {
            console.log("Venue: " + response.data[0].venue.name + "\n");
            console.log("City: " + response.data[0].venue.name + "\n");
            console.log("Venue: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n");
            console.log("_____________________________________________" + "\n");

            fs.appendFile("log.txt", getbands, function (err) {
                if (err) throw err;
            });

        });
};

// Spotify API
function getSpotify () {

     if(!songSearch){
        songSearch = "The Sign";
     } else {
         songSearch = userInput;
     }
};
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } else {

            var spotifyResults = 
            console.log("Artist: " + data.tracks.items[0].album.artists[0].name + "\n")
            console.log("Song: " + data.tracks.items[0].name + "\n")
            console.log("Album: " + data.tracks.items[0].album.name + "\n")
            console.log("_____________________________________________" + "\n")
        }

        fs.appendFile("log.txt", spotifyResults, function (err) {
            if (err) throw err;
        });
      });

    //   OMDB API

    function getOMDB () {
        if (!movieSearch) {
            movieSearch = "Mr.Nobody";
        } else {
            movieSearch = userInput;
        }

        var movieApiKey = "http://www.omdbapi.com/?t=" + movieSearch + "&y=short&apikey=trilogy";

        axios.request(movieApiKey).then(
            function(response) {
                var movieResults =
                    console.log("Title: " + response.data.title + "\n")
                    console.log("Year: " + response.data.year + "\n")
                    console.log("Rating: " + response.data.imbdRating + "\n")
                    console.log("_____________________________________________" + "\n")
            });

            fs.appendFile("log.txt", movieResults, function (err) {
                if (err) throw err;
            });
        };

        // FS Random

        function getRandomTxt() {
            fs.append("random.text", "utf8", function (err, data) {
                if(err) {
                    throw err
                } else {
                    console.log (data);
                }
            });
        };

        liriBot(liriCommand, userInput);





