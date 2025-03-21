const coding = ['java','js','ruby','php'];

coding.forEach((val) => {
    console.log(val);
});
const code = ['java','js','ruby','php'];

coding.forEach((val,ind,arr) => {
    console.log(val,ind,arr);
});


const codeObj = [
    {
    langName : 'JS',
    langForm : 'Javascript'
    },
{
    langName: 'Py',
    langForm: 'Python'
},
{
    langName: 'RB',
    langForm: 'Ruby'
}];

codeObj.forEach((item) => {
console.log(item.langForm, item.langName);
})
