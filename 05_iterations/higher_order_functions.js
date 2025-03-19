const myarr = [1,2,3,4,5];
for (const element of myarr) {
    console.log(element);
}

const map = new Map();
map.set('mov1', 'Hallo');
map.set('mov2', 'Ocean');

console.log(map);

for (const [mov,name] of map){
console.log(mov ,'-' , name);
}

const greetings = 'Hello World';

for (const greet of greetings) {
    if(greet == ' ') continue;
    console.log(greet);
}