const balance = new Number(400);

console.log(balance);  //[Number: 400]

console.log(balance.toString()); //converts it to string and gived additional string.

console.log(balance.toFixed(2)); //use to gives precised value.

const anotherNumber = 123.8966;

console.log(anotherNumber.toPrecision(3)); //returns a string and not a number and priortise before the decimal as per the input passed.

const luckyNumber = 1123456;

console.log(luckyNumber.toLocaleString('en-in')) //converts it to string as per the standards passed in the input.

//********Maths***********

console.log(Math.abs(-6)); //converts -ve value to +ve and not vice versa.
console.log(Math.round(3434.34)); //round off the value
console.log(Math.min(4,5,3,56,3,2,5)); //gives the smallest number from the input passed.
console.log(Math.max(4,5,3,56,3,2,5));  //gives the biggest number from the input passed.

console.log(Math.floor(Math.random() * (10 - 5 + 1) + 5 ) )





