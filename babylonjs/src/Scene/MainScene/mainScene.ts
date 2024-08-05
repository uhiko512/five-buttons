import {Engine} from "@babylonjs/core/Engines/engine";
import {PickingInfo, Scene, Vector3} from "@babylonjs/core";
import {StaticSceneObject} from "./staticSceneObject";
import {FiveButtonStage} from "../../Stage/fiveButtonStage";
import {Button} from "../../ControlPanel/Button/button";

export class MainScene extends Scene {

    constructor(engine: Engine) {
        super(engine);
        StaticSceneObject.build(this);

        const stage = new FiveButtonStage(this);
        stage.position = Vector3.Up().scale(-1);

        this.onPointerDown = this.pointerDown;
    }

    private pointerDown(_: PointerEvent, pickResult: PickingInfo) {
        if (pickResult.hit && pickResult.pickedMesh && pickResult.pickedMesh.parent) {
            const button = pickResult.pickedMesh.parent as Button;
            if (!button.onHit) {
                return;
            }

            button.onHit!(button);
        }
    }
}