let a = {};
let b = a; // 참조에 의한 복사

console.log(a == b); // true
console.log(a === b); // true

let c = {};
let d = {};

console.log(c == d); // false
console.log(c === d); // false
