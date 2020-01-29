type Shape = {}

function assertNever(obj: never) {
    throw new Error("Unexpected object");
}

function getArea(shape: Shape) {
/*circle: Math.PI * radius ** 2;
rectangle: w * h
square: size ** 2;*/
}

const shape: Shape = { kind: "circle", radius: 10 };
const area = getArea(shape);
