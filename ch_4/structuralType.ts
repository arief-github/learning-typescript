type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
};

const surename = {
    firstName: "Arief",
    lastName: "Kurniawan",
    age: 20
};

let withFname : WithFirstName = surename;
let withLstName : WithLastName = surename;

console.log([withFname, withLstName]);

// Object and using type
// ? is optional properties
type FirstAndLastName = {
    first: string,
    last?: string,
};

type Combine = {
    username : FirstAndLastName,
    phone: string
}

const hasBoth : Combine = {
    username: {
        first: "Arief",
    },
    phone: "0123123",
};

// const hasOnlyOne : Combine = {
//     phone: "123123"
// }

console.table(hasBoth);