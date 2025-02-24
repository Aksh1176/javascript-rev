function addTwoNumbers(num1,num2){
    return num1 + num2;
};

console.log(addTwoNumbers(2,3));

function loginUserMessage(userName){
    return `${userName} just logged in`;
};

console.log(loginUserMessage("Akshat"));

function newMessage(userName = "Shubham"){
    return `${userName} has logged in`
}

console.log(newMessage("Akhat")) //Akhat has logged in
console.log(newMessage()) //Shubham has logged in

function calculatePrice(...numberArr){
    return numberArr;
}

console.log(calculatePrice(233,433,544));
