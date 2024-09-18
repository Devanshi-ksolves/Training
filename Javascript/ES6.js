//JavaScript ES6 Examples

//How to check two numbers are approximately equal in JavaScript ?
const checkApprox = (nums1, nums2, epsilon) => {
    return Math.abs(nums1 - nums2) < epsilon
}

console.log(checkApprox(10, 10.3, 0.5));

//let, var and const
//var - #can be redeclare, value can be reassigned #have global and function scope, variables are hoisted and can be used anywhere

var name = "Devanshi"
console.log(name)

//let - cannot be redeclare, value can be reassigned, have block scope and shoulbe be inisialised before using.( let is block-scoped. This means let variables are only accessible within the block they are declared in, and they can't be accessed before their declaration within that block. It gives ReferenceError if used without declaration)

//const - cannot be redeclared, cannot reassigned a value, have block scope and should be initialeised before using.


//How to replace the names of multiple object keys with the values provided using JavaScript ?
//naive apprach
let object = {
    name: "Devanshi",
    age: 24,
    gender: "female",
};

let renameObject = (object) => {
    object.Currentage = object.age;
    delete object.age;
}

renameObject(object);
console.log(object);

//other apprach

let renObject = (keysMap, object) =>
    Object.keys(object).reduce((acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: object[key] },
    }),
        {}
    );
// Object.keys(object) Returns an array of the object's keys: ["name", "age", "gender"]reduce() is used to iterate over each key in the array of object keys and build a new object.acc (accumulator): This starts as an empty object {} and gets populated with the renamed keys and their corresponding values.

let result = renObject({ name: "FirstName" }, object);
console.log(result);


//How to get the first non-null/undefined argument in JavaScript ?
//There are many occasions when we get to find out the first non - null or non - undefined argument passed to a function. This is known as coalescing. 

const coalescing = (...args) =>
    args.find(_ => ![null, undefined].includes(_));
console.log(coalescing(null, undefined, null, 1, 2, 3));
//The rest parameter in JavaScript allows a function to accept an indefinite number of arguments as an array. It provides a way to gather all remaining arguments passed to a function into a single array, which can then be processed as needed.


//Shorthand Syntax for Object Property Value in ES6
//Before ES6
let names = "Devanshi";
let age = 24;

let person = {
    names: names,
    age: age
};

console.log(person);

//after ES6


let persons = {
    name,
    age,
}
console.log(person);

//seven datatypes in js - number,string,object,boolean,null,undefined,sybmol
// The introduction of Symbol helped overcome this problem as unique keys could be generated without writing a complicated piece of code. Unique object keys can be generated using Symbol() function. The Symbol() function returns a value of type symbol.

var marks = {}
marks["Joe"] = 100
marks["Ana"] = 90
marks["Chloe"] = 95
marks["Marie"] = 75
console.log(marks)
console.log('Another student with'
    + ' name Chloe appears')
marks['Chloe'] = 60
console.log('After the marks of the'
    + ' fifth student is entered')
console.log(marks)

var marks = {}
var sym1 = Symbol("Joe")
marks[sym1] = 100
var sym2 = Symbol("Ana")
marks[sym2] = 90
var sym3 = Symbol("Chloe")
marks[sym3] = 95
var sym4 = Symbol("Marie")
marks[sym4] = 75
console.log(marks)
console.log('Another student '
    + 'with name Chloe appears')
var sym5 = Symbol("Chloe")
marks[sym5] = 60
console.log('After the marks of '
    + 'the fifth student is entered')
console.log(marks)

//How to clone array in ES6 ?
//The spread operator in ES6 is used to clone an array spread operator does a shallow copy. The array created by the spread operator has the same value as that of the old array but, is not as same as the old array. 
const Array1 = ['Mili', 'Devanshi', 'Alice'];
const newArray = [...Array1];
console.log(newArray);

//Array Helper Methods in ES6
//The forEach() method is used to iterate over all the entries of the array.

let sum = 0;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((nums) => {
    sum = sum + nums;
}
);

console.log(sum);

//The map() method is used to iterate through all the entries of the array, modifies them and returns a new array but the old array is not manipulated.Its mandatory to have a return while using map  The map() method can also be used to extract attributes from an array of objects and store it in another array.
let double = numbers.map((num) => {


    return num * 2;
});

console.log(double);

//The filter() method is used to iterate through all the entries of the array and filters out required entities into another array.
const results = numbers.filter(num => num < 10);
console.log(results);
