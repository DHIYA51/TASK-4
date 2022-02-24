var obj1 = { name: "Person 1", age: 7 };
var obj2 = { age: 7, name: "Person 1" };
let x = JSON.stringify(obj1) === JSON.stringify(obj2)
console.log(x);