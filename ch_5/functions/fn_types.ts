// example code
// Type berikut mengembalikan fungsi yang nilai returns bisa berupa string atau undefined
let returnsStringOrUndefined: () => string | undefined;

// Type berikut mengembalikan sebuah fungsi yang mengembalikan string atau sebuah undefined
let maybeReturnsString: (() => string) | undefined;


// practice
// if input is string, output must be string
let singer : (song: string) => string;

singer = function(song) {
    return `Singing: ${song.toUpperCase()}!`;
}

// console.log(singer("Malam"))

// Function Type Aliases
// function params can received string , function return number
type StringToNumber = (input: string) => number;

let strToNumber : StringToNumber;

// because length is method of number OK
strToNumber = (input) => input.length;

// strToNumber = (input) => input.toUpperCase;

type NumberToString = (input: number) => string;

function useNumberToString(numberToString: NumberToString) {
    console.log(`The string is ${numberToString(1234)}`);
}

// useNumberToString((input) => `${input} Hooray`);
// useNumberToString((input) => input * 2);
