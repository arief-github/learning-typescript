type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WriteAndArt = Artwork & Writing;

const palahe : WriteAndArt = {
    name: "Kalehe",
    pages: 21,
    genre: "Fiction"
};

// console.log(palahe);

// Combine With Discriminated Union
// type shortPoem = { author: string } & (| { kigo: string, type: 'haiku' } | { meter: number, type: 'villanelle' });

// more readable
type shortPoemBase = { author: string };
type Haiku = shortPoemBase & { kigo: string, type: 'haiku' };
type Villanelle = shortPoemBase & { meter: number, type: 'villanele' };
type shortPoem = Haiku | Villanelle;

const morningGlory : shortPoem = {
   author: "cicik",
   meter: 20,
   type: 'villanele',
};

console.log(morningGlory);

// Type Never
type NotPossible = number & string;

// let notNum : NotPossible = 1;
// let notStr : NotPossible = "Kelana";