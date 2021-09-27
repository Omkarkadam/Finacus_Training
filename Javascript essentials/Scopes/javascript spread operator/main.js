
/*
JavaScript ES6 (ECMAScript 6) introduced the spread operator. 
The syntax is three dots(...) followed by the array (or iterable*). 
It expands the array into individual elements. 
So, it can be used to expand the array in a places where zero or more elements are expected.

/*
Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
It is mostly used in the variable array where there is more than 1 values are expected. 
It allows us the privilege to obtain a list of parameters from an array.

1. Copying an array
*/

let fruits = ['Apple','Orange','Banana'];

let newFruitArray = [...fruits];

console.log(copiedList); // ['Apple','Orange','Banana']

/*
2. Concatenating arrays
*/

let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

/*
3. Spreading elements together with an individual element
*/
let fruits = ['Apple','Orange','Banana'];

let newFruits = ['Cherry', ...names];

console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']

/*
4. Spreading elements on function calls
*/
let fruits = ['Apple','Orange','Banana'];

var getFruits = (f1, f2, f3) => {
console.log(Fruits: ${f1}, ${f2} and ${f3}); };

getFruits(...fruits); // Fruits: Apple, Orange and Banana

/*
5. Spread syntax for object literals
*/
var obj1 = { id: 101, name: 'Jhon Doe' }

var obj2 = { age: 25, country: 'USA'}

const employee = { ...obj1, ...obj2 }

console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }