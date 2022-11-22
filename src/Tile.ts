interface TileParams {
  x: number;
  y: number;
  isSolid: boolean;
  interact?: () => void;
  name: string;
}

export class Tile {
  x: TileParams['x'];
  y: TileParams['y'];
  isSolid: TileParams['isSolid'];
  interact: TileParams['interact'];

  constructor(params: TileParams) {
    this.x = params.x;
    this.y = params.y;
    this.isSolid = params.isSolid;
    this.interact = params.interact;
  }

  toString() {
    return `${this.x}:${this.y}`;
  }
}