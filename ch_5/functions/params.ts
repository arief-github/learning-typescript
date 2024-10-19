function sing(song: number | string) {
    console.log(`Singing ${song}`);
}

sing("Alamak");

// required params
function singTwo(first: number, second: number) {
    console.log(`${first / second}`);
}

singTwo(10,2);

// optional params
function announceSong(song: string, singer?: string) {
    console.log(`${song}`);

    if(singer) {
        console.log(`${singer}`);
    }
}

announceSong("La La Land", "NIKI 😍");

// default params
function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars ⭐`);
}

rateSong("cupid", 4.2);

// rest params
function singAllSong(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`);
    }
}

singAllSong("APA", "LAGU", "MUU", "NENE");
