const user = {
    email : "akshat@gmail.com",
    fullName : {
        firstName: "Akshat",
        lastName: "CHoudhary"
    }
};

console.log(user.fullName.firstName);

const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};
const obj4 = {}
const obj3 = Object.assign(obj4, obj1 , obj2); //make sure to give an empty object as it will be considered as source
console.log(obj3);
console.log(obj4 === obj3);

const obj5 = {...obj1, ...obj2};
console.log(obj5)

console.log(Object.keys(user)); //
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('email'));
