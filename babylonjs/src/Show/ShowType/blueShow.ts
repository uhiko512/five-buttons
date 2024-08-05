import {Show} from "../show";
import {Color3, Vector3} from "@babylonjs/core";

export class BlueShow extends Show {
    private static SPEED = 0.02;
    private static RADIUS = 2.0;
    private static CIRCLE_RADIUS = 0.6;
    private static Y = 1.8;

    protected ballCount(): number {
        return 3;
    }

    protected getColor(): Color3 {
        return new Color3(0.1, 0.27, 1.0);
    }

    protected anim(): void {
        for (let i = 0; i < this.ballCount(); i++)
        {
            this._balls[i].position = this.calcPos(i);
        }
    }

    private calcPos(i: number): Vector3 {
        const angleOffset = 2 * Math.PI * (i / this.ballCount());
        const t = this._time * BlueShow.SPEED + angleOffset;
        const circleT = t * 10;

        const x = Math.cos(t) * BlueShow.RADIUS;
        const z = Math.sin(t) * BlueShow.RADIUS;
        const forward = new Vector3(x, 0, z);
        const right = Vector3.Cross(forward, Vector3.Up());
        const circle = (right.scale(Math.cos(circleT)).add(Vector3.Up().scale(Math.sin(circleT)))).scale(BlueShow.CIRCLE_RADIUS);
        const pos = forward.add(Vector3.Up().scale(BlueShow.Y)).add(circle);

        return pos;
    }
}