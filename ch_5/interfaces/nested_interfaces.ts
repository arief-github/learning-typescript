interface Novel {
    author: {
        name: string;
    };
    // interface set here
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let myNovel: Novel;

myNovel = {
    author : {
        name: "Athaya"
    },
    setting : {
        place: "Nagrog",
        year: 2000
    }
}

console.log(myNovel);