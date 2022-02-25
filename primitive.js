/* 
Data type
primitive data types
1. number
2. string
3. boolen
4. undefined
5. null
7. symbol

non-primitive
6. objects 
*/

let a = 'hellow';
let b = a;
console.log(a, b);
a = 'gello';
console.log(a, b);

const x = { job: 'web developer' }
const y = x;
console.log(x, y);
x.job = 'font end developer';
console.log(x, y);