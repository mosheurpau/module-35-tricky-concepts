/*
Falsy: 
false
0
empty string
undefined
null
NaN
--------------------------------------

Truthy: 
true
any number (positive or negative)
any string including single whitespace
[]
{}
anything else is not false will be truthy
 */
let x = [];
console.log('Value of x: ', x);
if (x) {
    console.log('variable is truthy.');
}
else {
    console.log('variable is Falsy');
}
