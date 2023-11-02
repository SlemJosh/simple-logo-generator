// Base class for all shapes
class Shape {
    constructor() {
        this.color = ""; // Waiting for the user's choice of color
    }

    // Method to set the color of the shape
    setColor(colorVar) {
        this.color = colorVar; // Now we take that color and set the shape to it.
    }
}

// Circle
class Circle extends Shape {
    constructor() {
        super(); // Color already established thanks to sharing the shape class
        this.radius = 80;  // default radius, separated for testing reasons
    }

    // We now render a circle with some default values and then our selected color.
    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`; 
    }

    // Making sure the radius is greater than 0
    setRadius(radius) {
        if (radius > 0) {
            this.radius = radius; 
        }
    }
}

// Square
class Square extends Shape {
    constructor() {
        super(); // Color already established thanks to sharing the shape class
        this.width = 160; // Default width for the square
        this.height = 160; // Default height for the square
    }

    // We now render a square with our default values as well as the user input color.
    render() {
        return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }

    // In order to test, we want to set some parameters for a square such as min width and height.
    setDimensions(width, height) {
        if (width > 0 && height > 0) {
            this.width = width; // Set the width to the provided value if it's valid
            this.height = height; // Set the height to the provided value if it's valid
        }
    }
}

// Triangle
class Triangle extends Shape {
    constructor() {
        super(); // Color already established thanks to sharing the shape class
        this.base = 200; // Default base for the triangle
        this.height = 150; // Default height for the triangle
    }

    // Rendering a triangle based on some default measurements. x1, y1, x2, y2, x3, y3 are the vertices in the shape we also input the user's chosen color.
    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" />`;
    }

    // Testing values for a triangle.
    setDimensions(base, height) {
        if (base > 0 && height > 0) {
            this.base = base; // Set the base to the provided value if it's valid
            this.height = height; // Set the height to the provided value if it's valid
        }
    }
}

// Export the classes to be used in other modules
module.exports = { Circle, Square, Triangle };
