const month = 3;

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;

    default:
        console.log("Default case match");
        break;
}

// Note: Break key word used because if the condition matches with any of the cases then it will execute all the cases after the match
// if break keyword is not found OTHER THAN DEFAULT.
