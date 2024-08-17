//Chapter : 3 (VARIABLES FOR NUMBERS )
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = prompt("what is your age?");
var age1 = alert("I am " + age + " years old !");



//2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visitor = prompt("how many times a visitor has visited a web page ?");
var visited = alert('" you have visited this site  ' + visitor + ' times"');

//3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

let birthYear = 2004;
document.write("My Brith Year is :   ." + birthYear + "<br>");

 let dataType="Data Type of my declared variable is number!"
document.write( dataType + "<br>" );


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.



var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;


document.write("<strong>" + visitorName + "</strong> ordered " +
 "<strong>" + quantity + "</strong> " + "<strong>" + productTitle + "(s)</strong> on XYZ Clothing store.");




