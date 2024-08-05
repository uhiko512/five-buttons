import './style.css'

import {Engine} from "@babylonjs/core/Engines/engine";
import {MainScene} from "./Scene/MainScene/mainScene";
import {GameScreen} from "./gameScreen";

const screen = new GameScreen();
const engine = new Engine(screen.canvas);
const scene = new MainScene(engine);

engine.runRenderLoop(() => {
    scene.render();
});

window.onresize = () => {
    screen.resize();
    engine.resize();
}
