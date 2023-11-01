// Importing the shapes from the shapes file
const { Circle, Square, Triangle } = require('./shapes');

// Test suite for the Circle class
describe('Circle', () => {
    // Test suite for rendering circle shapes
    describe('render', () => {
        // Test for default circle rendering
        it('should render a default Circle', () => {
            const expectedRender = '<circle cx="150" cy="100" r="80" fill="" />';
            const render = new Circle();
            expect(render.render()).toEqual(expectedRender);
        });

        // Test for rendering a circle with a specific color
        it('should render a Circle with a specific color', () => {
            const expectedRender = '<circle cx="150" cy="100" r="80" fill="blue" />';
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.render()).toEqual(expectedRender);
        });

        // Test for rendering a circle with an updated radius
        it('should render a Circle with an updated radius', () => {
            const expectedRender = '<circle cx="150" cy="100" r="100" fill="" />';
            const circle = new Circle();
            circle.setRadius(100);
            expect(circle.render()).toEqual(expectedRender);
        });
    });
});

// Test suite for the Square class
describe('Square', () => {
    // Test suite for rendering square shapes
    describe('render', () => {
        // Test for default square rendering
        it('should render a default Square', () => {
            const expectedRender = '<rect width="160" height="160" fill="" />';
            const render = new Square();
            expect(render.render()).toEqual(expectedRender);
        });

        // Test for rendering a square with a specific color
        it('should render a Square with a specific color', () => {
            const expectedRender = '<rect width="160" height="160" fill="red" />';
            const square = new Square();
            square.setColor('red');
            expect(square.render()).toEqual(expectedRender);
        });

        // Test for rendering a square with updated dimensions
        it('should render a Square with updated dimensions', () => {
            const expectedRender = '<rect width="100" height="200" fill="" />';
            const square = new Square();
            square.setDimensions(100, 200);
            expect(square.render()).toEqual(expectedRender);
        });
    });
});

// Test suite for the Triangle class
describe('Triangle', () => {
    // Test suite for rendering triangle shapes
    describe('render', () => {
        // Test for default triangle rendering
        it('should render a default Triangle', () => {
            const expectedRender = '<polygon points="150, 18, 244, 182, 56, 182" fill="" />';
            const render = new Triangle();
            expect(render.render()).toEqual(expectedRender);
        });

        // Test for rendering a triangle with a specific color
        it('should render a Triangle with a specific color', () => {
            const expectedRender = '<polygon points="150, 18, 244, 182, 56, 182" fill="green" />';
            const triangle = new Triangle();
            triangle.setColor('green');
            expect(triangle.render()).toEqual(expectedRender);
        });

        // Test for rendering a triangle with specific color using setColor
        it('should render a Triangle with specific color using setColor', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182, 56, 182" fill="blue" />');
        });
    });
});
