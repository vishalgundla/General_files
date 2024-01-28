class shape {
    draw() {
        console.log("Shape");
    }
}
class Circle extends shape {
    draw() {
        console.log('Circle');
    }
}
class Rectangle extends shape {
    draw() {
        console.log('Rectangle');
    }
}
class Triangle extends shape {
    draw() {
        console.log('Triangle');
    }
}
function getShape(shape) {
    shape.draw();
}
let shape = new shape();
let circle = new circle();
let rectangle = new Rectangle();
let triangle = new triangle();