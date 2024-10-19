let mathematician = Math.random() > 0.5 ? undefined : "Mark Golberd";

// UNION : Memungkinkan kita extends tipe data dari satu variabel
// Misalnya satu variabel dapat memiliki dua tipe data
let thinker : string | null = null;
let physicist : number | string;

thinker = "Arief";

physicist = "Arief";

physicist.toLocaleString();

console.log(typeof(physicist));