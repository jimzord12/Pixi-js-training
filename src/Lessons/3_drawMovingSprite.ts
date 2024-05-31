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

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;

// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick
app.ticker.add((ticker) => {
  // Add the time to our total elapsed time
  elapsed += ticker.deltaTime;
  // Update the sprite's X position based on the cosine of our elapsed time.  We divide
  // by 50 to slow the animation down a bit...
  sprite.x = 50.0 + Math.cos(elapsed / 50.0) * 200.0;
  // console.log(
  //   "Elasped time: ",
  //   elapsed,
  //   "Sprite X: ",
  //   sprite.x,
  //   "Sprite Y: ",
  //   sprite.y
  // );
});
