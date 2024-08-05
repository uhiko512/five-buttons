import {Color3, Scene, TransformNode, Vector3} from "@babylonjs/core";
import {ButtonMesh} from "./buttonMesh";
import {ButtonLight} from "./buttonLight";
import {ButtonAnim} from "./buttonAnim";

export class Button extends TransformNode {
    public onHit: ((button: Button) => void) | undefined;

    private readonly _light: ButtonLight;
    private readonly _anim: ButtonAnim;

    constructor(scene: Scene) {
        super("Button", scene);

        this.rotation = new Vector3(1.56, 0, 0);

        const mesh = new ButtonMesh(scene, this);
        this._light = new ButtonLight(mesh);
        this._anim = new ButtonAnim(scene, mesh);
    }

    public set color(color: Color3) {
        this._light.color = color;
        this.setState(false);
    }

    public setState(enabled: boolean) {
        this._light.setState(enabled);

        if (!enabled) {
            return;
        }

        this._anim.play();
    }
}