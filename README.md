liri-node-app
=============

Siri-like app

\# liri-node-app

Siri-like app

Developed in week 5 of UCF bootcamp

Exercise to learn to find API keys, embed them in a Node/JavsaScript file
structure & then utilize them in response to specific unqiuries.

Each API key was unique (Twitter, Spotify, IMBD films (now supported as OMBD)),
had a unique & sometimes non-intuitive structure.

Therefore each API key required different logic to extract the required
information.

Each key was also handled differently in the JavaScript file structure &
accessed differently requiring different Node/JavaScript methods.

Spotify requiring a confidentail in addition to public key.

Tweets had to be created to meet the twitter requirement.

IMBD /OMBD were employed using a shared key from Trilogy.

Each API request required an error option in case it failed.

This exercise also required learning .gitignore /.end /key.js structure to
eliminate exposing private info on a public gitHub repository.

Implied in this exercise was requiring a number of NPM librarires & installing
them so that JSON file was create to manage all the dependencies.

Each type of API request was intiated with a unique keyword which was handled by
implementing a switch /case /break structure which spenned virtually

the entire program. (This, in turn, created some interesting challenges
perfecting the syntax & getting a clean compile.)

There were also unique requirements for error or blank response handling,
depending on which of the categories was invoked the console.

In some cases the failsafe was simple but in others it required that code be
re-used with different "defualt" values.

In turn those drove a couplev of code chunks into functions which were not
intuitively obvious during a top-down design plan but were fairly easy

to handle once identified.

Outputs went to the screen & also to a text files (in the case of Twitter) which
should make it slightly easier to confirm the results.
