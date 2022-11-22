import {
  Display 
} from "rot-js";
import { Grid } from "./grid";

const SIZE_X = 80;
const SIZE_Y = 40;

const display = new Display({
  width: SIZE_X,
  height: SIZE_Y,
});

document.body.appendChild(display.getContainer() as HTMLElement);

const BACKGROUND_COLOR = '#002b36';
const FOREGROUND_COLOR = '#839496';
const YELLOR_COLOR = '#b58900';

function main() {
  const grid = new Grid({
    sizeX: SIZE_X,
    sizeY: SIZE_Y,
    drawMapCb: (x, y, contents) => {
      if (contents === 1) {
        display.draw(x, y, '#', FOREGROUND_COLOR, BACKGROUND_COLOR);
      } else {
        display.draw(x, y, ' ', null, BACKGROUND_COLOR);
      }
    },
    drawDoorCb: (x, y) => {
      display.draw(x, y, '+', YELLOR_COLOR, BACKGROUND_COLOR);
    }
  });

  grid.createDungeon(SIZE_X, SIZE_Y);
}

main();

function exercises() {
  // todo
}