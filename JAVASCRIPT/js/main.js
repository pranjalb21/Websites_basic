//variable declaration with var, let and const;
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
        hobby: ['Football', 'Carrom', 'Photography'],
    },
    hi: 'a'
}
console.log(ob.like.hobby[2])
