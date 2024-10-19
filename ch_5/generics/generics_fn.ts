function realId<T>(input: T) {
    return input;
}

realId([1]);
realId("real")
realId(123);

// function identity<T>(input: T) {
//     return input;
// }

// const numeric = identity<number>(1234);
// const stringify = identity<string>("Kelas Malam");

// console.log(typeof(numeric));

// interface Product {
//     id: number;
//     name: string;
//     price: number;
// }

// function createInventory<T extends Product>() {
//     const items:T[] = [];

//     function addItem(item: T): void {
//         items.push(item);
//     }

//     function getItemById(id: number): T | undefined {
//         return items.find((item) => item.id === id);
//     }

//     function getAllItems(): T[] {
//         return items;
//     }

//     return {
//         addItem,
//         getItemById,
//         getAllItems,
//     }
// }

// const bookInventory = createInventory<{ id: number, name: string, price: number, author: string }>();

// bookInventory.addItem({ id: 1, name: "Book 1", price: 10, author: "Author 1" });
// bookInventory.addItem({ id: 2, name: "Book 2", price: 15, author: "Author 2" });

// const allBooks = bookInventory.getAllItems();
// allBooks.forEach((book) => { console.log(`${book.name} by ${book.author}, Price $${book.price} `);
//  })

// const getSingleBook = bookInventory.getItemById(2);
// console.log(getSingleBook);

// generic : relasi antara input dan output/return pada sebuah fungsi
function identity<T>(input: T) {
    return input;
}

const numberT = identity(123);
const stringT = identity("Al");

