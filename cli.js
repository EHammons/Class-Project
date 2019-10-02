var TV = require("./tv.js");

var choice = process.argv[2];
var subject = process.argv.slice(3).join(" ");
var show;
var actor;

if (choice === "show") {
    console.log("Your choose a " + choice);
    show = subject;
    console.log(show);
} else if (choice === "actor") {
    console.log("Your choose an " + choice);
    actor = subject;
    console.log(actor);
} else {
    console.log("You did not request a show or an actor.\nPlease choose again in the following format: \nnode cli.js actor Brad Pitt\nnode cli.js show The Simpsons")
}

var tv = new TV();
tv.findShow(show);