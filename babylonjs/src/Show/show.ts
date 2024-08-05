import {Ball} from "./ball";
import {Button} from "../ControlPanel/Button/button";
import {Color3, Scene, TransformNode} from "@babylonjs/core";

export abstract class Show extends TransformNode {
    protected _balls: Ball[];
    protected _time: number;

    protected _enabled: boolean;
    private _button: Button;

    public constructor(scene: Scene, button: Button) {
        super("Show", scene);

        this._balls = [];
        this._time = 0;

        this._enabled = true;
        this._button = button;

        this.createBalls();
        this.initColor();

        scene.registerBeforeRender(() => this.Launch());

        this.setEnabled(false);
    }

    public setEnabled(value: boolean) {
        super.setEnabled(value);

        if (value) {
            this._time = 0;
        }
    }

    private createBalls() {
        const count = this.ballCount();

        for (let i = 0; i < count; i++) {
            const ball = new Ball(this._scene);
            ball.parent = this;

            this._balls.push(ball);
        }
    }

    private initColor() {
        const color = this.getColor();

        this._button.color = color;
        for (const ball of this._balls) {
            ball.color = color;
        }
    }

    protected abstract getColor(): Color3;

    protected abstract ballCount(): number;

    protected Launch()
    {
        if (!this.isEnabled) {
            return;
        }

        this.anim();
        this._time++;
    }

    protected abstract anim(): void;
}