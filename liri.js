// ***********liri like siri 
var request = require("request");
var dotenv = require("dotenv").config();
var key = require("keys");

var inputArray = process.argv;

//copy the next two lines described as "access your keys information"...
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//**************code insertion experiment******* */
var nodeArgs = process.argv;
var inputString = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    inputString = inputString + "+" + nodeArgs[i];
  }
  else {
    inputString += nodeArgs[i];
  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);
//***********written code... should work at the end (I think) */
switch (askLiri) {
    case `my-tweets`:
        console.log("tweets");
        break;

    case 'spotify-this-song': 
        console.log("song");
        break;

    case 'movie-this':
        console.log("movie");
        break;
    
    case `do-what-it-says`: 
        console.log("do it");
        break;
};

var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);