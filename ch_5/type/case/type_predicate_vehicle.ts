interface Vehicle {
    name: string;
    year: number;
    type?: () => string;
}

interface Car extends Vehicle {
    wheels: number;
    honk(): void;
}

interface Boat extends Vehicle {
    propellers: number;
    anchor(): void;
}

function isCar(vehicle: Vehicle): vehicle is Car {
    return (vehicle as Car).wheels !== undefined;
}

// Data Modeling
const myCar: Car = {
    name: "Toyota",
    year: 2020,
    wheels: 4,
    honk: () => console.log("Beep"),
}

const myBoat: Boat = {
    name: "Titanic",
    year: 1911,
    propellers: 3,
    anchor: () => console.log("Swoosh"),
}

// type alias untuk type predicates
type CarCheck = (v: Vehicle) => v is Car;
type BoatCheck = (v: Vehicle) => v is Boat;

// fungsi type guard
const checkCarFn: CarCheck = (vehicle): vehicle is Car => {
    return 'wheels' in vehicle && 'honk' in vehicle;
}

const checkBoatFn: BoatCheck = (vehicle): vehicle is Boat => {
    return 'propellers' in vehicle && 'anchor' in vehicle;
}

function processVehicle(vehicle: Vehicle, isCarFn: CarCheck = checkCarFn, isBoatFn: BoatCheck = checkBoatFn) {
    console.log(`Processing ${vehicle.name}...`);

    if (isCarFn(vehicle)) {
        console.log(`This is a car with ${vehicle.wheels} wheels.`);
        vehicle.honk();
    } else if (isBoatFn(vehicle)) {
        console.log(`This is a boat with ${vehicle.propellers} propellers.`);
        vehicle.anchor();
    } else {
        console.log("This is some other type of vehicle");
    }
}
processVehicle(myBoat);
