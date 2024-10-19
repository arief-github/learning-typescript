interface Box<T> {
    inside: T;
}

let stringifyBox: Box<string> = {
    inside: "abc"
}

let numberBox: Box<number> = {
    inside: 123
}
