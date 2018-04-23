// ***********liri like siri 
require("dotenv").config();
let request = require("request");
let fs = require("fs");
let keys = require("./keys.js");
let exec = require('child_process').exec;
console.log(keys.spotify);
 
//start with Twitter
let Twitter = require("twitter");
let client = new Twitter(keys.twitter);
 
let inputArray = process.argv;
 
//copy the next two lines described as "access your keys information"...
//changed (spotify) to (node-spotify-api)
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
 
//**************code experiment******* */
let nodeArgs = process.argv;
let inputString = "";
 
function buildIt() {
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 2 && i < nodeArgs.length) {
            inputString = inputString + "+" + nodeArgs[i];
        }
        else {
            inputString += nodeArgs[i];
        }
    }
};
function movieInfo () {     
var omdbURL = 'http://www.omdbapi.com/?apikey=trilogy&t=' + inputString + '&plot=short';
request(omdbURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var body = JSON.parse(body);
        console.log(body);
        console.log("Title: " + body.Title);
        console.log("Release Year: " + body.Year);
        console.log("IMdB Rating: " + body.imdbRating);
        console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
        console.log("Country: " + body.Country);
        console.log("Language: " + body.Language);
        console.log("Plot: " + body.Plot);
        console.log("Actors: " + body.Actors);
    }
    else {
    console.log("movie call failed");
    };
});
 
function handleRequest(liriRequest) {
    switch (liriRequest) {
        case `my-tweets`:
            console.log("tweets");
            var twitterHandle = { screen_name: 'codeucf' };
            client.get('statuses/user_timeline', twitterHandle, function (error, tweets, response) {
                if (!error) {
                    for (i = 0; i < tweets.length; i++) {
                        console.log("codeucf: " + tweets[i].text + "Created: " + tweets[i].created_at);
                        console.log("-----------------------");
 
                        //add text to log.txt file
                        fs.appendFile('log.txt', "@codeucf: " + tweets[i].text + ".  created_at:" + tweets[i].created_at.substring(0, 19), function (error) {
                            if (error) {
                                console.log("Error occurred when saving file", error);
                            }
                        });
                        fs.appendFile('log.txt', "-----------------------", function (error) {
                            if (error) {
                                console.log("Error occurrd when saving file", error);
                            }
                        });
                    }
                } else {
                    console.log('Error occurred', twitterHandle);
                }
            });
            break;
 
        case 'spotify-this-song':
            console.log("song");
            buildIt(inputString);
            console.log(inputString);
            inputString = inputString ? inputString : 'the sign%20ace of base'
            spotify.search({ type: 'track,artist', query: inputString, limit: "1" }, function (err, data) {
                console.log("Artists: " + data.tracks.items[0].album.artists[0].name);
                console.log("Song Title: " + data.tracks.items[0].name);
                console.log("Preview URL: " + data.tracks.items[0].preview_url);
                console.log("Album: " + data.tracks.items[0].album.name);
                // output ace of base, the sign, link & album also
            });
            break;
 
        case 'movie-this':
            console.log("movie option reached");
            buildIt(inputString);
            console.log(inputString);
 
            if (inputString != "") {
 
            var omdbURL = ('http://www.omdbapi.com/?apikey=trilogy&t=' + inputString + '&plot=short');
            request(omdbURL, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var body = JSON.parse(body);
                    console.log(body);
                    console.log("Title: " + body.Title);
                    console.log("Release Year: " + body.Year);
                    console.log("IMdB Rating: " + body.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
                    console.log("Country: " + body.Country);
                    console.log("Language: " + body.Language);
                    console.log("Plot: " + body.Plot);
                    console.log("Actors: " + body.Actors);
                }
                else {
                    console.log("movie call failed");
                };
            });
            }
            else {
                console.log("If you haven't watched 'Mr. Nobody,' then you should:");
            };
 
            //  * Title of the movie.    * Year the movie came out.    * IMDB Rating of the movie.    * Rotten Tomatoes Rating of the movie.    * Country where the movie was produced.    * Language of the movie.    * Plot of the movie.    * Actors in the movie.
            break;
 
        case 'do-what-it-says':
//          console.log("do it");
            fs.readFile('random.txt', 'utf8', function (error, data) {
                if (error) {
                    console.log("Error while reading file.");
                } else {
                    var res = data.split(',');
                    inputString = res[1];
                    handleRequest(res[0]);
                };
            });
            break;
        };
    };
var askLiri = process.argv[2];
 
handleRequest(askLiri);
