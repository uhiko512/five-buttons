import {Show} from "../show";
import {Color3, Vector3} from "@babylonjs/core";

export class RedShow extends Show {
    private static SPEED: number = 0.055;
    private static RADIUS: number = 2.0;

    protected ballCount(): number {
        return 1;
    }

    protected getColor(): Color3 {
        return new Color3(1, 0.1, 0.1);
    }

    protected anim(): void {
        const t = this._time * RedShow.SPEED;

        const x = Math.cos(t) * RedShow.RADIUS;
        const z = Math.sin(t) * RedShow.RADIUS;
        this._balls[0].position = new Vector3(x, 1.8, z);
    }
}