type BoardGame = {
    name: string;
    price: number;
    quantity: number;
    minimumAge: number;
    players: number;
} & { replaceable: boolean; }

type Puzzle = {
    name: string;
    price: number;
    quantity: number;
    minimumAge: number;
    players: number;
} & { isExported: boolean; }

type Doll = {
    name: string;
    price: number;
    quantity: number;
    minimumAge: number;
    players: number;
} & { wollType: string; }

type Toys = Doll | BoardGame | Puzzle

function printToy(toy: Toys) {
    console.log(toy)
}

const MonopolyBoardGame: Toys = {
    name: "Monopoly",
    price: 20,
    quantity: 1,
    minimumAge: 3,
    players: 4,
    wollType: 'Sutera Woll'
}

printToy(MonopolyBoardGame)