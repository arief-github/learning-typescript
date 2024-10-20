type Circle = {
    radius: number;
    kind: "circle";
}

type Square = {
    x: number;
    kind: "square";
}

type Triangle = {
    x: number;
    y: number;
    kind: "triangle";
}

type Shape = Circle | Square | Triangle;

function area(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.x ** 2;
        case "triangle":
            return shape.x * shape.y / 2;
        default:
            throw Error("Invalid shape");    
    }
}

console.log(area({ kind: "circle", radius: 10 }));
console.log(area({ kind: "square", x: 10 }));
console.log(area({ kind: "triangle", x: 10, y: 20 }));

