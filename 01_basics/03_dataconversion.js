let score = "33abc";

let convertedNumber = Number(score);
console.log(convertedNumber);

// When converted via Number method beow are the following results :-
// "33abc" => NaN
// null => 0
// undefined => NaN
// "" => 0
// true => 1 & false => 0 

let someScore = 32;
let convertedBoolean = Boolean(someScore);
console.log(convertedBoolean);
// When converted via Boolean method beow are the following results :-
//"33abc" => true
// "" => false
// null => false
// undefined => false

// **************Operations*****************

let str1 = "hello";
let str2 = " Akshat";
let str3 = str1 + str2;
console.log(str3);

