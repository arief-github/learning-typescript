// making an array with the fixed size and type
let yearAndWarrior : [number, string];

yearAndWarrior = [2, "Liane"];

// assignability
const pairLoose = ["Andri", 20];

// this code return error Type '(string | number)[]' is not assignable to type '[string, number]'.
// Target requires 2 element(s) but source may have fewer.
// const pairUpToLoose : [string, number] = pairLoose;

const tupleThree: [boolean, number, string] = [false, 12, "nigga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

// kelebihan assign value
// const tupleTwoExtra: [boolean, number] = tupleThree;

// tuple as rest params
function logPair(name: string, value: number) : void {
    console.log(`${name} has ${value}`);
}

const pairArray = ["Amage",1 ];

// logPair(...pairArray);

const pairTupleIncorrect: [number, string] = [1, "Amage"];
// logPair(...pairTupleIncorrect);

const pairTupleCorrect: [string, number] = ["Amage", 1];
logPair(...pairTupleCorrect);

