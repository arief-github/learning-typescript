// Type is a function that returns an array of strings
let createStrings: () => string[];

function generateStr() {
    return ["Hello", "World"];
}

createStrings = generateStr;
const strings = createStrings();

console.log(strings);

// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

function sayHello() {
    return "hello";
}

function sayWorld() {
    return "world";
}

stringCreators = [sayHello, sayWorld];

const hello =  stringCreators[0]();
const world = stringCreators[1]();

console.log([hello, world]);


