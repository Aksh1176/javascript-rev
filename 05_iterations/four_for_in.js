const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift'
};

for(const key in myObj){
    console.log(key, '-', myObj[key]);
}

const arr = ['hello', 'buffalo', 'cat'];

for(const key in arr){
    console.log(arr[key]);
}