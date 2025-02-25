// Immediately invoked function expression (IIFE)

//To avoid the pollution from global scope we use IIFE as well as to invoke immediately.

(function DB(name){
    console.log("Db connected", name);
})("Akshat");

( () => console.log("DB COnnected two") 
)();

