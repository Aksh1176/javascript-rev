function one(){
    const userName ="Akshat";

    function two(){
        const website = "Youtube";
        console.log(userName);
    }

    // console.log(website);

    two();
}

one();

//inner function can access outside function;s variable and not vice versa.

//This is called function expression when we hold a function in a variable and it cannot be executed before initialization unlike function statements.
const secondFunction = function(num){
    return num + 1;
}
