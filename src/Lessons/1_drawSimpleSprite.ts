import { Application, Assets, Sprite } from "pixi.js";
import heart from "../assets/images/heart.png";

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
console.log(heart);

await Assets.load([
  {
    alias: "heart",
    src: heart,
  },
]);

let sprite = Sprite.from("heart");

sprite.scale.set(0.15);

app.stage.addChild(sprite);
