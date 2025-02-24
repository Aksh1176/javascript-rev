// object can be declared as literal and as a constructor.

//singelton arrays are created when it has been declared as a constructor.
//objects declared as literal won't be a singleton.
const mySym = Symbol("key1")
const user = {name : "Akshat",
            age : 18,
            email : "akshat@google.com",
            isLoggedIn : true,
            [mySym] : "mykey1"
};

console.log(user.name);
console.log(user["email"]);
console.log(user[mySym]);
console.log(user);
// Object.freeze(user); freezes the object and doesn't allow any changes in the object.

// user.email = "akshat@amazon.com";

user.greeting = function(){
    console.log("Hello JS user");
}

user.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

user.greeting();
user.greetingTwo();

