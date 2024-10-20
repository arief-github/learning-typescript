/**
 * Jika kita menggunakan "any", maka typescript akan menerima apapun tipe datanya
 * tanpa ada komplain error. Ini menandakan bahwa kita telah melakukan bypass typing
 * check, sehingga, kita menghilangkan kemampuan typescript
 *
 */

// function greatComedian(name: any) {
//     console.log(`Perkenalkan Komedian : ${name.toUpperCase()}`);
// }

// greatComedian("Andre Taulani")

/**
 * Kita dapat melakukan sedikit pencegahan ketat dengan menggunakan unknown type, jika
 * kita menggunakan unknown type, kita harus melakukan melakukan check tipe datanya menggunakan typeof, instanceof
 * Jika kita melakukan hal yang sama seperti any, maka unknown type akan memberikan error 'property type of 'unknown''
 */

function greatComedian(name: unknown) {
    if (typeof name === "string") {
        console.log(`Perkenalkan Komedian : ${name.toUpperCase()}!`);
    } else {
        console.log(`Well, Saya Off!, Bukan Tipe Data Yang Saya Mau`)
    }
}

greatComedian(12)
