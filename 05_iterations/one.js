for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

const arr = ["Batman", "Superman", "Spiderman"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}

// break & continue


for (let index = 0; index < 10; index++) {
    const element = index
    if (element == 5) {
        console.log("5 is best");
        break;
    }

    console.log(element);

}
for (let index = 0; index < 10; index++) {
    const element = index
    if (element == 5) {
        console.log("5 is best");
        continue;
    }

    console.log(element);

}

