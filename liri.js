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
        getOMBD(userInput);
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

function getbands(artistSearch){

    var artistSearch = userInput;
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
