const { Triangle, Circle, Square } = require('../shapes');

describe('Triangle', () => {
    describe('render', () => {
        it('should render a default Triangle', () => {
            const expectedRender = '<polygon points="150, 18 244, 182 56, 182" fill="" />';
            const render = new Triangle();
            expect(render.render()).toEqual(expectedRender);
        });

        it('should render a Triangle with specific color', () => {
            const expectedRender = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toEqual(expectedRender);
        });

        it('should render a Triangle with updated dimensions', () => {
            const expectedRender = '<polygon points="100, 0 200, 200 0, 200" fill="green" />';
            const triangle = new Triangle();
            triangle.setDimensions(100, 200);
            triangle.setColor('green');
            expect(triangle.render()).toEqual(expectedRender);
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should render a default Circle', () => {
            const expectedRender = '<circle cx="150" cy="150" r="50" fill="" />';
            const render = new Circle();
            expect(render.render()).toEqual(expectedRender);
        });

        it('should render a Circle with specific color', () => {
            const expectedRender = '<circle cx="150" cy="150" r="50" fill="red" />';
            const circle = new Circle();
            circle.setColor('red');
            expect(circle.render()).toEqual(expectedRender);
        });

        it('should render a Circle with an updated radius', () => {
            const expectedRender = '<circle cx="150" cy="150" r="80" fill="blue" />';
            const circle = new Circle();
            circle.setRadius(80);
            circle.setColor('blue');
            expect(circle.render()).toEqual(expectedRender);
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should render a default Square', () => {
            const expectedRender = '<rect x="100" y="100" width="100" height="100" fill="" />';
            const render = new Square();
            expect(render.render()).toEqual(expectedRender);
        });

        it('should render a Square with specific color', () => {
            const expectedRender = '<rect x="100" y="100" width="100" height="100" fill="yellow" />';
            const square = new Square();
            square.setColor('yellow');
            expect(square.render()).toEqual(expectedRender);
        });

        it('should render a Square with updated dimensions', () => {
            const expectedRender = '<rect x="50" y="50" width="150" height="150" fill="green" />';
            const square = new Square();
            square.setDimensions(50, 150);
            square.setColor('green');
            expect(square.render()).toEqual(expectedRender);
        });
    });
});