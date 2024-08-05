import {ButtonMesh} from "./buttonMesh";
import {Scene, Vector3} from "@babylonjs/core";

export class ButtonAnim {
    private static HEIGHT: number = -0.05;
    private static PRESSED_HEIGHT: number = 0.0;
    private static SPEED: number = 0.01;

    private readonly _mesh: ButtonMesh;
    private _isPlaying: boolean;

    constructor(scene: Scene, mesh: ButtonMesh) {
        this._mesh = mesh;
        this._isPlaying = false;

        scene.registerBeforeRender(() => this.anim());
    }

    public play()
    {
        this._isPlaying = true;
        this.reset();
    }

    private reset()
    {
        this._mesh.core.position = Vector3.Up().scale(ButtonAnim.HEIGHT);
    }

    private anim()
    {
        if (!this._isPlaying) {
            return;
        }

        this._mesh.core.translate(Vector3.Up(), ButtonAnim.SPEED);
        if (this._mesh.core.position.y > ButtonAnim.PRESSED_HEIGHT)
        {
            this._isPlaying = false;
            this.reset();
        }

    }
}