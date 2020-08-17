/*//variable declaration with var, let and const;
var c = 8;
c = 80;
let a = 10;
a = 40;
const b = 20;
console.log(c, a, b);

//Data types String, Numbers, Boolean, Null, Undefined;
const name = 'Pranjal';
const age = 22;
const status = false;
const g = null;
const x = undefined;
console.log(typeof name);
console.log(typeof age);
console.log(typeof status);
console.log(typeof g);
console.log(typeof x);

//Array
console.log(name.split('a'));
console.log(name[3]);
const arr = ['Hi', 'Hello'];
arr.push('Bye');
arr.unshift('Tata');
arr[0] = 'a';
arr[5] = 'b';
arr.pop();
console.log(arr);
console.log(Array.isArray(arr));
console.log(arr.indexOf('Hi'));
console.log(arr.indexOf(''));

//Objects
const ob = {
    name: name,
    age: age,
    status: status,
    like: {
        hobby: ['Football', 'Carrom', 'Photography', 'Picture'],
    },
    hi: 'a'
}
/*console.log(ob.like.hobby[2]);
 
//For loop
for(let i = 0; i<ob.like.hobby.length; i++){
    console.log(ob.like.hobby[i]);
}
for(let i of ob.like.hobby){
    console.log(i);
}
//Foreach
ob.like.hobby.forEach(function(hobby){
    console.log(hobby)
})
//Map
const l = ob.like.hobby.map(function(y){
    return y;
})
console.log(l);
//Filter
const p = ob.like.hobby.filter(function(hob){
    return hob[0] == 'P';
}).map(function(y){
    return y[0];
})
console.log(p);
//If else
const x = 20;
if(x == 10){
    console.log(typeof(x));
}
const y = '19';
if(y === '10'){
    console.log('y is a string');
}
else{
    console.log('y is a number');
}
//Ternary operator
const big = x < y ? x : y;
console.log(big);
//Switch
switch(big){
    case 20:
        console.log('This is 20');
        break;
    default:
        console.log('Unknown');
}*/
//function
function add(num1=2, num2=3){
    console.log(num1+num2);
}
add(6,8);
//Arrow
const res = (num1=3 , num2=4) => num1 + num2;

console.log(res(5,6));

x = [1,2,3,4,5,6];
x.forEach((y) => console.log(y));