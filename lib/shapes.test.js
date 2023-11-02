// Importing the shapes from the shapes file
const { Circle, Square, Triangle } = require('./shapes');

// Circle Tests
describe('Circle', () => {
   
    describe('render', () => {
        // Can we make a circle?
        it('should render a default Circle', () => {
            const expectedRender = '<circle cx="150" cy="100" r="80" fill="" />';
            const render = new Circle();
            expect(render.render()).toEqual(expectedRender);
        });

        // Can we make a circle a specific color?
        it('should render a Circle with a specific color', () => {
            const expectedRender = '<circle cx="150" cy="100" r="80" fill="blue" />';
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.render()).toEqual(expectedRender);
        });

        // Can we make a circle a different size by changing the radius?
        it('should render a Circle with an updated radius', () => {
            const expectedRender = '<circle cx="150" cy="100" r="100" fill="" />';
            const circle = new Circle();
            circle.setRadius(100);
            expect(circle.render()).toEqual(expectedRender);
        });
    });
});

// Square Tests
describe('Square', () => {
    
    describe('render', () => {
        // Can we make a square?
        it('should render a default Square', () => {
            const expectedRender = '<rect width="160" height="160" fill="" />';
            const render = new Square();
            expect(render.render()).toEqual(expectedRender);
        });

        // Can we make a square a specific color?
        it('should render a Square with a specific color', () => {
            const expectedRender = '<rect width="160" height="160" fill="red" />';
            const square = new Square();
            square.setColor('red');
            expect(square.render()).toEqual(expectedRender);
        });

        // Can we change the dimensions of a square by changing the height and width?
        it('should render a Square with updated dimensions', () => {
            const expectedRender = '<rect width="100" height="200" fill="" />';
            const square = new Square();
            square.setDimensions(100, 200);
            expect(square.render()).toEqual(expectedRender);
        });
    });
});

// Triangle Tests
describe('Triangle', () => {
    
    describe('render', () => {
        // Can we make a triangle?
        it('should render a default Triangle', () => {
            const expectedRender = '<polygon points="150, 18, 244, 182, 56, 182" fill="" />';
            const render = new Triangle();
            expect(render.render()).toEqual(expectedRender);
        });

        // Can we make a triangle a specific color?
        it('should render a Triangle with a specific color', () => {
            const expectedRender = '<polygon points="150, 18, 244, 182, 56, 182" fill="green" />';
            const triangle = new Triangle();
            triangle.setColor('green');
            expect(triangle.render()).toEqual(expectedRender);
        });

        // This test was provided for us. We want to be able to test the setColor method.
        it('should render a Triangle with specific color using setColor', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182, 56, 182" fill="blue" />');
        });
    });
});
