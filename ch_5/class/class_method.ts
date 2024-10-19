class Greeter {
    constructor(message: string) {
        console.log(`As I Always Say: ${message}`)
    }

    greet(name: string) {
        console.log(`${name}, do your stuff`);
    }
}

// new Greeter().greet("Miss Anjay");

// Expected 1 arguments, but got 0.
// new Greeter().greet();

new Greeter("Khantall");
