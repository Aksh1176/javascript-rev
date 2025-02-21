//array

const myArr = [1,2,3,4,5];
console.log(typeof myArr);   //object

//shallow copy of an object is a copy whose properties share the same references as those of source object from which the copy was made.

// deep copy doesnt share the same refernce point as those of source object from which the copy was made.

const myheroes = new Array(1,2,3,4);

console.log(myheroes[2]);

myArr.push(6); //add the value passed in the last of an array.
console.log(myArr);

myArr.pop();  //removes the last element from an array.
console.log(myArr); 

myArr.unshift(9); //add the input in the start of an array.
console.log(myArr);

myArr.shift() //removes the first element of an array.
console.log(myArr);

const question = myArr.includes(9) //checks whether the inout passed is available in the array or not
console.log(question)

console.log(myArr.indexOf(9)); //tells the index of the input passed and returns -1 if the input is not availble in an array.

const newArr = myArr.join('.'); //will convert the values of an array into string by separating with a comma "," if no join input is passed.
console.log(newArr);

const arr1 = [2,4,6,8,10];

const a = arr1.slice(2,1);
console.log("Orignal Array: ", arr1 ,"Sliced Array: ", a)

//slice doesnt manipulates the orignal array and needs a range of values that is the start and end 

const b = arr1.splice(2,1);
console.log("Orignal Array: ", arr1 ,"Spliced Array: ", b);

//splice manipulates the orignal array and need a start count and the no. of elements needs to be selected.




