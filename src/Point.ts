export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.set(x, y);
  }

  clone() {
    
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equals(p: Point) {
    return p.x === this.x && p.y === this.y;
  }

  distance() {
    // ??
  }
}
