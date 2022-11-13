import {
  Display 
} from "rot-js";
import { Grid } from "./grid";

const SIZE_X = 40;
const SIZE_Y = 40;

const display = new Display({
  width: SIZE_X,
  height: SIZE_Y,
});

document.body.appendChild(display.getContainer() as HTMLElement);

function main() {
  const grid = new Grid({
    sizeX: SIZE_X,
    sizeY: SIZE_Y,
    drawMapCb: (x, y, contents) => {
      if (contents === 1) {
        display.draw(x, y, '#', 'white', 'black');
      }
    },
    drawDoorCb: (x, y) => {
      display.draw(x, y, '/', 'white', 'black');
    }
  });

  grid.createDungeon(SIZE_X, SIZE_Y);
}

main();