"use strict";
let username = "Jodn Dave";
console.log(username);
let a = 5;
let b = 10;
// let c: string = '2';
let c = 2;
console.log(a + b - c); // ts doesn't like this as c is a string
// javascript still shows the output as it changes the data type of c to 
// carry out the operation
console.log(a * c);
