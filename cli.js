// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var choice = process.argv[2];
var subject = process.argv.slice(3).join(" ");
console.log(subject + " is a type of " + choice);