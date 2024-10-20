// contoh dengan nilai

// T sebagai alias type parameter dalam angle brackets <T>
// T sebagai parameter parentheses (T)
// T sebagai return parameter
function echo<T>(nilai: T): T {
    return nilai;
}

console.log(echo<string>("Hello"))
// console.log(echo<number>(42))
// console.log(echo<boolean>(true))

// contoh dengan array
function pertamaElement<T>(arr: T[]): T | undefined {
    return arr[2]
}

// usage
// console.log(pertamaElement<string>(["a", "b", "c"]))
console.log(pertamaElement<number>([1, 2, 3]))

// contoh dengan multiple type parameters
function pasangan<T,U>(first: T, second: U): [T, U]{
    return [first, second]
}

console.log(pasangan<string, number>("a", 1));
// console.log(pasangan<boolean, string>(true, "yes"));

// contoh praktis dengan interface
interface Box<T> {
    isi: T;
}

function buatBox<T>(isi: T): Box<T> {
    return { isi }
}

const stringBox = buatBox<string>("hello")
const numberBox = buatBox<number>(42)

// console.log([stringBox, numberBox])

// contoh dengan constraints
interface HasLength {
    length: number;
}

function logPanjang<T extends HasLength>(item: T): void {
    console.log(item.length)
}

// console.log(logPanjang<string>("hello"))
// console.log(logPanjang<number[]>([1,2,3]))