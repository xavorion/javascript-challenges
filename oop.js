class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  getArea() {return this.width * this.height}

  getPerimeter() {
    return (2 * (this.width + this.height));
  }

  isSquare() {
    return this.height === this.width ? true : false;
  }
}

const rec1 = new Rectangle(20,20);
const rec2 = new Rectangle(12, 15);

console.log(rec1.getArea())
console.log(rec1.getPerimeter());
console.log(rec1.isSquare());


console.log(rec2.getArea());
console.log(rec2.getPerimeter());
console.log(rec2.isSquare());
