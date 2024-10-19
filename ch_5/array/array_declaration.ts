// assignable array just for number value
let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

// assignable array just for string value
let strCollection: string[];
strCollection = ["Arkana", "Sujana", "Rilliadi"];

// Array and Type Function

// Type is a function that returns an array of strings 
let createString: () => string[];

// Type is a return of functions that each return a string
let stringCreators: (() => string)[];

// Union Type in Arrays

let strOfArrayNum: string | number[];
strOfArrayNum = "Aka";

// this either number or string of array
let arrOfStringNum: (string | number)[];
arrOfStringNum = ["aka", 1];

// Evolving Array <any>
let values : any = [];

values.push(2);

console.log(typeof(values[0]));

// multidimensional arrays
let multiDimsArray : number[][];

multiDimsArray = [[1,2], [1,2]]

// Array Members
const defenders = ["Clarenza", "Dina"];

const defender = defenders[0];
type Nice = string | number[];
type OnNice = (string | number)[];

let nice: Nice = [1,2,3]
console.log(typeof(nice[0]));


