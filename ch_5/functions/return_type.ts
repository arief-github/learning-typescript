// Return Explicit
function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

function getSongRecordingDate(song: string): Date | undefined {
    switch(song) {
        case "Strange Fruit" :
            return new Date("April 20, 1983");
        default :
            return undefined; 
    }
}

// console.log(getSongRecordingDate("Strange Fruit"));

// Example 2
const songs = ["Juice", "Shake It Off", "Whats Up"];

function runOnSongs(getSongAt: (index: number) => string) {
    for(let i = 0; i < songs.length; i += 1) {
        console.log(typeof(getSongAt(i)));
    }
}

function getSongAt(index: number) {
    return `${songs[index]}`;
}

runOnSongs(getSongAt);

function logSong(song: string) {
    return `${song}`;
}

// runOnSongs(logSong);

// void : for functions that returns nothing
function modSong(song: string|undefined): void {
    if(!song) {
        return;
    }

    console.log(`${song}`);
}

console.log(modSong("Kipli"))

// never : for functions that no returnings value at all

function validateParameters(param: string): boolean | never {
    if(param.length > 10) {
        return true;
    } else {
        throw new Error("Panjang harus lebih dari 10 Karakter");
    }
}

function main() {
    const input = "feeka nafeeka";

    try {
        const isValid = validateParameters(input);
        console.log(`Input ${input} valid: ${isValid} ✔`);
    } catch (err) {
        if (err instanceof Error) {
          console.error(`❌ Error: ${err.message}`);
        } else {
          console.error(`Error: ${err}`);
        }
      }
}

main();
