// falsy values :-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Apart from that everything is truthy values:-

// "0", 'false', " ", [], {}, function(){}, 

const obj = {};

if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalesing operator (??)

const val1 = 5 ?? 10;


console.log(val1);

// Terniary operator 

const price = 100;
price >=80 ? console.log("Price more than 80") : console.log("Price less than 80");

