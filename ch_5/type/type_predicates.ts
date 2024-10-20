// Mendefinisikan type guard function dengan type predicate 'value is number | string'
// - parameter 'value' bertipe 'unknown' untuk keamanan tipe
// - returnnya memberitahu TypeScript bahwa jika true, value pasti number atau string
function isNumberOrString(value: unknown): value is number | string {
    // Memeriksa apakah tipe dari value termasuk dalam array ['number', 'string']
    // typeof value akan mengembalikan string representasi tipe data
    return ['number', 'string'].includes(typeof value);
}

// Mendefinisikan union type yang bisa menerima 4 kemungkinan tipe:
// number, string, null, atau undefined
type PossibleTypes = number | string | null | undefined

// Fungsi yang menerima parameter value dengan tipe PossibleTypes
function logValueIfExists(value: PossibleTypes) {
    // Menggunakan type guard function untuk narrowing tipe
    // Jika true, TypeScript tahu bahwa value adalah number | string
    if(isNumberOrString(value)) {
        // Di sini value sudah dipastikan bertipe number | string
        // toString() aman digunakan karena both number dan string memiliki method ini
        value.toString()
 
        // Melakukan type narrowing lebih lanjut
        // Memeriksa apakah value bertipe string
        if(typeof value === 'string') {
            // Di sini TypeScript tahu bahwa value pasti bertipe string
            // toUpperCase() aman digunakan karena value sudah dipastikan string
            console.log("Tipe String : ", value.toUpperCase())
        }
    } else {
        // Jika isNumberOrString returns false, berarti value adalah null atau undefined
        // Di blok else ini, TypeScript tahu value bertipe null | undefined
        console.log("Nilai Tidak Ada : ", value)
    }    
}

// Memanggil fungsi dengan parameter string "arief"
// String adalah salah satu tipe yang valid dalam PossibleTypes
// Dan akan masuk ke blok if karena isNumberOrString akan return true
logValueIfExists("arief")