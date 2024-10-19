// Type Poem
type PoemWithPages = {
    name: string;
    pages: number;
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
};
// poem may or may not have pages or rhymes
type Poem = PoemWithPages | PoemWithRhymes;
// end Type of Poem

const poem : Poem = Math.random() > 0.5 ? { name: "kurungkal", pages: 7 } : { name: "Iplos", rhymes: true };

if("pages" in poem) {
    console.log(poem.pages);
} else {
    console.log(poem.rhymes);
}