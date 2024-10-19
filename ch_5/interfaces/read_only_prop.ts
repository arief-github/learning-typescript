interface Page {
 readonly text: string;
 readonly number: number;
}

function read(page: Page) : void {
    console.log(page.text);

    // Cannot assign to 'text' because it is a read-only property
    // page.text += 1;

    // page.number = 10;
}
