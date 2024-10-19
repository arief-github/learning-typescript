function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input:", input);
        callback(input);
    }
}

logWrapper((input: string) => {
    console.log(input.length);
});

logWrapper((input: number) => {
    console.log(input.toFixed(2));
})