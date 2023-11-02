// Base class for all shapes
class Shape {
    constructor() {
        this.color = ""; // Waiting for the users choice of color
    }

    // Method to set the color of the shape
    setColor(colorVar) {
        this.color = colorVar; // Now we take that color and set the shape to it.
    }
}

// Circle class extending the Shape class
class Circle extends Shape {
    constructor() {
        super(); // Color already established thanks to sharing the shape class
        this.radius = 80; 
    }

    // Rendering the circle into an svg element.
    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`; 
    }

    // Method to set the radius of the circle
    setRadius(radius) {
        if (radius > 0) {
            this.radius = radius; // Set the radius to the provided value if it's valid
        }
    }
}

// Square class extending the Shape class
class Square extends Shape {
    constructor() {
        super(); // Color already established thanks to sharing the shape class
        this.width = 160; // Default width for the square
        this.height = 160; // Default height for the square
    }

    // Method to render the square as an SVG element
    render() {
        return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`; // Return an SVG rectangle element with specific width, height, and color
    }

    // Method to set the dimensions of the square
    setDimensions(width, height) {
        if (width > 0 && height > 0) {
            this.width = width; // Set the width to the provided value if it's valid
            this.height = height; // Set the height to the provided value if it's valid
        }
    }
}

// Triangle class extending the Shape class
class Triangle extends Shape {
    constructor() {
        super(); // Color already established thanks to sharing the shape class
        this.base = 200; // Default base for the triangle
        this.height = 150; // Default height for the triangle
    }

    // Method to render the triangle as an SVG element
    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" />`; // Return an SVG polygon element with specific points and color
    }

    // Method to set the dimensions of the triangle
    setDimensions(base, height) {
        if (base > 0 && height > 0) {
            this.base = base; // Set the base to the provided value if it's valid
            this.height = height; // Set the height to the provided value if it's valid
        }
    }
}

// Export the classes to be used in other modules
module.exports = { Circle, Square, Triangle };
