const names = ["akshat", "shubham", "aman"];
const anotherNames = ["amit","ravi","ashi"];

const newArr = names.concat(anotherNames); //merges two arrays
console.log(newArr);

const anotherArr = [...names,...anotherNames];
console.log(anotherArr);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const flatArr = anotherArray.flat(Infinity)
console.log(anotherArray.flat(Infinity)); //merges all the sub arrays into one single array.

console.log(Array.isArray("AKshat")) //checks whether the input is an array or not.
console.log(Array.from("Akshat")); //converts  the input into an array if it's not possible it will gie an empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

