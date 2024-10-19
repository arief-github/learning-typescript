interface HasBothFunctionTypes {
    readonly property?: () => string;
    method(): string;
}

const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return "";
    }
}

// Another Example

type TypeDict = (x: number) => string;

interface InterfaceDict {
    (x: number): string;
}

// SAME!
const toStrT: TypeDict = x => '' + x;
const toStrI: InterfaceDict = x => '' + x;

type NameOhs = {
    name: string;
    chese: string;
}

interface KantorOhs {
    parallax: number;
}

// call signatures
// assignable

interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`Called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
    console.log("No Idea!");
}

// hasCallCount = doesNotHaveCount;

// index signatures
interface WordCounts {
    [i: string]: number;
}

const counts : WordCounts = {};

counts.apple = 1;
counts.strawberry = 2;

// mixing properties and index signatures
interface Book {
    nameopeneer: string;
    [author: string]: string;
}

let bookOr: Book;

bookOr = {
    nameopeneer: "Haji",
    author: "brioo"
}



