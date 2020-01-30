type Shape = 
    { kind: 'circle', radius: number } |
    { kind: 'rectangle', w: number, h: number } |
    { kind: 'square', size: number}

function assertNever(obj: never) {
    throw new Error("Unexpected object");
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle": 
            return shape.w * shape.h;
        case 'square':
            return shape.size ** 2;
        default: 
            shape
    }
/*circle: Math.PI * radius ** 2;
rectangle: w * h
square: size ** 2;*/
}

const shape: Shape = { kind: "circle", radius: 10 };
const area = getArea(shape);
