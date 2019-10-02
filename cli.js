// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var choice = process.argv[2];
var subject = process.argv.slice(3).join(" ");

if (choice === "show") {
    console.log("Your choose a " + choice);
    console.log(subject);
} else if (choice === "actor") {
    console.log("Your choose an " + choice);
    console.log(subject);
} else {
    console.log("You did not request a show or an actor.\nPlease choose again in the following format: \nnode cli.js actor Brad Pitt\nnode cli.js show The Simpsons")
}