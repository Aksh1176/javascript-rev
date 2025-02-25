const user = {
    userName : "Akshat",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`)
    } 
}

//explicit return
const arrowFunction1 = (num1,num2) => {
    return num1 + num2 ;
}

console.log(arrowFunction1(2,3));

const arrowFunction2 = (num1, num2) => (num1 + num2); //it can be wrapped in parenthesis as wothout that it cannot return an object when reqired.

console.log(arrowFunction2(4,4));

//If curly braces has been used in an arrow function then return statement has to be written else not with single statements.


