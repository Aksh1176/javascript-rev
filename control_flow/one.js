const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("Logged in");
}
else {
    console.log("Not logged in");
}

const balance = 1000;
if (balance < 500) {
    console("Blance is less than 500");
}
else if (balance < 750) {
    console.log("Balance is less than 750");
}
else {
    console.log("Balance is more than 750");
}

const loggedInUser = true;
const debitCard = true;
const emailLog = false;

if(loggedInUser && debitCard){
    console.log("Allowed to buy course");
}
else{
    console.log("Not allowed to buy course");
}

if (loggedInUser || emailLog) {
    console.log("Allowed")
}
else{
    console.log("not aloowed");
}
