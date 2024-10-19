class FieldTrip {
    destination: string;
    // nonexist: string;

    constructor(destination: string) {
        this.destination = destination;
        console.log(`Kita mau pergi ke ${this.destination}!`);

        // this.nonexist = destination;
    }
}