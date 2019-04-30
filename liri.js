require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var spotifyAPI = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

