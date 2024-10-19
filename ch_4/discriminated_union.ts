// 1. Declaring Type
type PoemWithPages = {
    name: string;
    pages: number;
    type: 'pages';
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
};

type Poem = PoemWithPages | PoemWithRhymes;

// 2. Using Type and Checking Values
const pum: Poem = Math.random() > 0.5 ? { name: "Poporto", pages: 7, type: "pages" } : { name: "KOKOLOTEUN", rhymes: true, type: "rhymes" };

// 3. Checking Property Pages and Rhymes if existed
// if(pum.type === "pages") {
//     console.log(`Halaman : ${pum.pages}`);
// } else {
//     console.log(`Rhymes : ${pum.rhymes}`);
// }

// Another Example
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind : "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
    if(s.kind === "square") {
        return s.size * s.size;
    } else {
        return s.width * s.height;
    }
}
