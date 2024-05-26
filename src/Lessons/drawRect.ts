import { Application, Graphics, Color } from "pixi.js";

const app = new Application();

// Intialize the application.
await app.init({
  background: "#1099bb",
  resizeTo: window,
  // width: 800,
  // height: 600,
  antialias: true,
});

// Then adding the application's canvas to the DOM body.
document.body.appendChild(app.canvas);

const graphics = new Graphics();
const color = new Color(0xff0000);
graphics.rect(0, 0, 100, 100);
graphics.fill(color);

app.stage.addChild(graphics);
