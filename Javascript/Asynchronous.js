//Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result. It handle asynchronous operations,
// examples - Making HTTP requests using fetch(),Asking a user to select files using showOpenFilePicker()
//The async keyword makes the function asynchronous, allowing the use of await inside it.

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error("Network response is not ok")
        }
        const data = await response.json();
        console.log(data);

    }
    catch (error) {
        console.log("The error is", error);
    }
}



//different from traditional function in two aspect - traditional function is synchronous and it returns value whereas asynchronous function return promise
//The await keyword is for making the JavaScript function execution wait until a promise is settled(either resolved or rejected)
//we can use the await with a non-async function but, we can not use it within(or inside) a non-async function.

function sync() {
    return 'Hi';
}

async function caller() {
    const message = await sync();
    console.log(message);

}

caller();

//If the promise rejects, it throws the error, and we need to catch it to handle it.A promise is a JavaScript object that allows you to make asynchronous(aka async) calls. It produces a value when the async operation completes successfully or produces an error if it doesn't complete.

async function fetchData() {
    try {
        const data = await fetch(url);
        processData(data);
    } catch (err) {
        console.error(err);
    }
}
// three states (pending, fulfilled, rejected)A promise that is either resolved or rejected is called settled.These properties are internal. They are code-inaccessible, but they are inspectable. It means that we will be able to inspect the state and result property values using a debugger tool, but we will not be able to access them directly using the program.

//callback-Callbacks are functions passed as arguments to other functions. They are called once the task is complete. This helps manage the order of operations, especially when dealing with asynchronous tasks.
function fetchdata(callback) {
    setTimeout(() => {
        console.log("data fetched");
        callback();

    }, 1000);

}

function processdata(callback) {
    setTimeout(() => {
        console.log("data processes");
        callback();
    }, 1000)
}

function savedata(callback) {
    setTimeout(() => {
        console.log("data saved");
        callback();
    }, 1000)
}

fetchdata(() => {
    processdata(() => {
        savedata(() => {
            console.log('All operations completed!');
        });
    });
});

//Callback hell occurs when you have multiple nested callbacks within callbacks, leading to code that is hard to understand and prone to errors. Here are some strategies to escape callback hell: Use Promises or async await

//closures - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
function main() {
    const Name = "Devanshi";
    function myName() {

        console.log(Name);
    }
    myName();

}
main();


//Currying is a functional programming technique where a function returns another function that takes the next argument. It transforms a function that takes multiple arguments into a series of functions that each take a single argument.

function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
const add = (a) => (b) => (c) => a + b + c;
const result = curriedAdd(1)(2)(3);
console.log(result)

function sendAutoEmail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending email to ${to} with ${subject} and ${body}`);

        }
    }
}
let step1 = sendAutoEmail("devanshi");
let step2 = step1("currynig");
step2("Hii This is concept of currying");