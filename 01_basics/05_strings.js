const name = "Akshat";
const repoCount = "50";
console.log(`Hi my name is ${name} and repocount is ${repoCount}`);

const newname = new String("Akshat");

// Practice most of the commonly used string functions;

console.log(`Hi My name is ${name} and my repocount is ${repoCount}`); //Modern way of syntax and is called string interpolation.

const gameName = new String("Akshat-AC");

// console.log(typeof name, typeof gameName); 

console.log(gameName.toUpperCase());
console.log(gameName.charAt("4"));
console.log(gameName.indexOf("h"));
console.log(gameName.substring(1,3)); // wont be including the end character range.


console.log(gameName.slice(1,4))

const newString = "  hallabol       ";
console.log(newString.trim()); //removes the staring and ending extra spaces and line terminatore. It has trimStart() and trimEnd().

const anotherString = "https://akshat.com/akshat%20";
console.log(anotherString.replace('%','-'))  

console.log(anotherString.includes("akshat"));
console.log(anotherString.includes("akshatac")); //will check if the given input is available in the string or not and returns true/false.

//String conversion into array-

console.log(gameName.split('-')); //will split on the basis of separator provided if there isn't any separator it will store the string in an array.














// Notes : 
/* String created by single quotes and double quotes are literals and strings created by "new" keyword (new instance) are objects.
    */

