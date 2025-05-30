// const { a, add, b } = require("./file-2");
// const { a: a3, add: add3, b: b3 } = require('./file-3')

// console.log(a);
// console.log(add(2, 3, 4));
// console.log(b);

// console.log(a3);
// console.log(add3(2, 3, 4));
// console.log(b3);


const var1 = require('./file-2')
const { a: a3, add: add3, b: b3 } = require('./file-3')

console.log(var1.a);
console.log(var1.add(2, 3, 4));
console.log(var1.b3);