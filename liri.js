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
var askLiri = process.argv[3];
switch (askLiri) {
    case `my-tweets`:
        console.log("tweets");
        var twitterHandle = {screen_name: 'coderucf'};
  client.get('statuses/user_timeline', twitterHandle, function(error, tweets, response){
    if(!error){
      for(i = 0; i<tweets.length; i++){
        var tweetDate = tweets[i].created_at;
//example created at:
//"created_at": (10 spaces between quotes, 13 total)
//"Wed Aug 27 13:08:45 +0000 2008" (30 chars between quotes, 32 total)
        console.log("coderucf: " + tweets[i].text + " " + date.substring(0, 45));
        console.log("-----------------------");
        
        //adds text to log.txt file
        fs.appendFile('log.txt', "@coderucf: " + tweets[i].text + " " + date.substring(0, 45));
        fs.appendFile('log.txt', "-----------------------");
      }
    }else{
      console.log('Error occurred');
    }
});
 //       buildIt(inputString);
        break;

    // case 'spotify-this-song': 
    //     console.log("song");
    //     buildIt(inputString);
    //     if (!error) {
    //         // output song: artist, song-name, preview link, ,album
    //     }
    //     else {
    //         // output ace of base, the sign, link & album also
    //     }
    //     break;

    case 'movie-this':
        console.log("movie option reached");
        buildIt(inputString);
        if (nodeArgs[3] != "") {
            //output Mr Nobody movie data
        }
        else {

    // Then run a request to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + inputString + "&y=&plot=short&apikey=trilogy";
    // 	* Title of the movie.    * Year the movie came out.    * IMDB Rating of the movie.    * Rotten Tomatoes Rating of the movie.    * Country where the movie was produced.    * Language of the movie.    * Plot of the movie.    * Actors in the movie.
        }
        console.log("movie", queryUrl);
        break;
    
    case `do-what-it-says`: 
        console.log("do it");
        break;
};
