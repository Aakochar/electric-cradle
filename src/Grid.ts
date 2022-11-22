import { Map, RNG, } from "rot-js";
import type { CreateCallback } from "rot-js/lib/map/map";
import Tile from "rot-js/lib/display/tile";

type GridParams = {
  sizeX: number;
  sizeY: number;
  drawDoorCb?: (x: number, y: number) => void;
  drawMapCb: CreateCallback;
}

export class Grid {
  tilemap: Record<string, Tile>;
  sizeX: number;
  sizeY: number;
  drawMapCb: CreateCallback;
  drawDoorCb?: (x: number, y: number) => void;

  constructor(params: GridParams) {
    this.sizeX = params.sizeX;
    this.sizeY = params.sizeY;
    this.drawMapCb = params.drawMapCb;
    this.drawDoorCb = params.drawDoorCb;
  }

  findStartPosition() {

  }

  // GetUnvisitedNeighbors(

  getPartToRender() {

  }

  createDungeon(width: number, height: number) {
    const map = new Map.Digger(width, height);
    map.create(this.drawMapCb);

    const rooms = map.getRooms();

    rooms.forEach(room => room.getDoors((x, y) => {
      this.drawDoorCb?.(x, y);
    }));
  }

  // celullar automata?
  createCave() {

  }

  createMaze() {

  }

  // Voronoi Diagram
  // Manhattan distance?
  //

  // Perlin/Simplex Noise

  // mixing techniques

  // Dijkstra maps
  // hot path
}