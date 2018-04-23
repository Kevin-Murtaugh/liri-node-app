// ***********liri like siri 
require("dotenv").config();
let request = require("request");
let fs = require("fs");
let keys = require("./keys.js");
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

//***********written code... should govern the whole program (I think) */
var askLiri = process.argv[2];

switch (askLiri) {
    case `my-tweets`:

        console.log("tweets");
        var twitterHandle = { screen_name: 'codeucf' };
        client.get('statuses/user_timeline', twitterHandle, function (error, tweets, response) {
            console.log("tweets", tweets);
            if (!error) {
                for (i = 0; i < 20; i++); {
                    console.log("codeucf: " + tweets[i].text + "Created: " + tweets[i].created_at);
                    console.log("-----------------------");

                    //adds text to log.txt file
                    fs.appendFile('log.txt', "@codeucf: " + tweets[i].text + "created_at:" + tweets[i].created_at.substring(0, 19));
                    console.log('copy to txt file', i);
                    fs.appendFile('log.txt', "-----------------------");
                }
            } else {
                console.log("Error occurred", twitterHandle);
            }
        })
    break;

    case 'spotify-this-song':
        console.log("song");
        buildIt(inputString);
        spotify.search({ type: 'track', query: inputString, limit: "1" }, function (err, data) {
            if (err) {
                a
                console.log("Artist: Ace of Bass");
                console.log("Song Title: The Sign");
                console.log("Preview URL:" + data.tracks.items[0].preview_url);
                console.log("Album:" + data.tracks.items[0].album.name);
            }
            else {
                console.log("Artists" + data.tracks.items[0].album.artists[0].name);
                console.log("Song Title" + data.tracks.items[0].name);
                console.log("Preview URL:" + data.tracks.items[0].preview_url);
                console.log("Album:" + data.tracks.items[0].album.name);
                // output ace of base, the sign, link & album also
            }
        })
        break;

    case 'movie-this':
        console.log("movie option reached");
        buildIt(inputString);
        console.log(inputString);

        // ******** code insertions  **********//

        var omdbURL = 'http://www.omdbapi.com/?t=' + inputString + '&plot=short';

        request(omdbURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);

                console.log("Title: " + body.Title);
                console.log("Release Year: " + body.Year);
                console.log("IMdB Rating: " + body.imdbRating);
                console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
                console.log("Country: " + body.Country);
                console.log("Language: " + body.Language);
                console.log("Plot: " + body.Plot);
                console.log("Actors: " + body.Actors);

                // 	* Title of the movie.    * Year the movie came out.    * IMDB Rating of the movie.    * Rotten Tomatoes Rating of the movie.    * Country where the movie was produced.    * Language of the movie.    * Plot of the movie.    * Actors in the movie.
            }})
               break;
    
    case 'do-what-it-says' :
        console.log("do it");
        break;
    };