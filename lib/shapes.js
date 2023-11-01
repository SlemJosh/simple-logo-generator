class Shape {
    constructor() {
        this.color = "";
    }

    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 80; // Default radius
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }

    setRadius(radius) {
        if (radius > 0) {
            this.radius = radius;
        }
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.width = 160; // Default width
        this.height = 160; // Default height
    }

    render() {
        return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }

    setDimensions(width, height) {
        if (width > 0 && height > 0) {
            this.width = width;
            this.height = height;
        }
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.base = 200; // Default base
        this.height = 150; // Default height
    }

    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}" />`;
    }

    setDimensions(base, height) {
        if (base > 0 && height > 0) {
            this.base = base;
            this.height = height;
        }
    }
}

module.exports = { Circle, Square, Triangle };