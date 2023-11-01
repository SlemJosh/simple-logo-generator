// Shape Classes

class Shape {
    constructor () {
        this.color = "";
    }
    //
    setColor(colorVar){
        this.color = colorVar;
    }
}

// We want our shapes to use the same properties applied in our Shape class
class Circle extends Shape {
    render(){
        // x, y, and radius positions for the circle.  https://www.w3schools.com/graphics/svg_circle.asp
        return `<circle cx="150" cy="100" r="80" fill="${this.color} />` 
    }
}

class Square extends Shape {
    render(){ 
        // Our square just has the width and height. https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
        return `<rect width="160" height="160" fill="${this.color} />`
    }
}

class Triangle extends Shape{
    render(){
        // Triangles are used drawing polygon points.
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color} />`
    }
}

// Exporting the classes for the index to read

module.exports = { Circle, Square, Triangle };