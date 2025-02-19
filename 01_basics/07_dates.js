//dates are defined from Jan1 1970, UTC

//Dtaes

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());  //Wed Feb 19 2025 13:46:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString()) //2/19/2025
console.log(myDate.toISOString());  //2025-02-19T13:48:15.228Z
console.log(myDate.toJSON()) //2025-02-19T13:48:15.228Z
console.log(myDate.toLocaleTimeString()) //1:49:39 PM
console.log(myDate.toDateString()) //Wed Feb 19 2025

let myCreatedDate = new Date(2024 , 2 , 21);
console.log(myCreatedDate.toDateString())      //Thu Mar 21 2024

let myNewCreatedDate = new Date("2024-01-14");
console.log(myNewCreatedDate.toLocaleString())  //1/14/2024, 12:00:00 AM

let myTimeStamp = Date.now();  //1739973447387 this is in millisecond of current time
console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000)); //to get in milliseconds

let oneNewDate = new Date();
console.log(oneNewDate.getMonth()); //output will be the value of month and it will start from 0.
console.log(oneNewDate.getDay());

oneNewDate.toLocaleString('default', {
    weekday : "long",
})