const soldiers: string[] = ["Alkana", "Riweuha", "ELenka"];
const majority: number[] = [10,20,30];
const decision: boolean[] = [true, false, true]

// also can use any[]
const combineInAcquisition: (string|number|boolean)[] = [...soldiers, ...majority, ...decision];

// log : [ 'Alkana', 'Riweuha', 'ELenka', 10, 20, 30 ]
console.log(combineInAcquisition);

function logWarriors(greeting: string, ...names:string[]): void {
    for(const name of names) {
        console.log(`${greeting}, ${name},`);
    }
}

const warriors = ["Ayah", "Ibu", "Neng"];
const numberFav = [1,2,4];
logWarriors("Hello", ...warriors);
