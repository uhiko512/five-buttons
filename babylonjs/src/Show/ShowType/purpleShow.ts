import {Show} from "../show";
import {Color3, Vector3} from "@babylonjs/core";

export class PurpleShow extends Show {
    private static SPEED = 0.012;
    private static RADIUS = 2.0;
    private static CIRCLE_RADIUS = 1.4;
    private static Y = 2.0;

    protected ballCount(): number {
        return 3;
    }

    protected getColor(): Color3 {
        return new Color3(0.6, 0.0, 1.0);
    }

    protected anim(): void {
        for (let i = 0; i < this.ballCount(); i++)
        {
            this._balls[i].position = this.calcPos(i);
        }
    }

    private calcPos(i: number): Vector3 {
        const angleOffset = 2 * Math.PI * (i / this.ballCount());
        const t = this._time * PurpleShow.SPEED + angleOffset;
        const circleT = (Math.sin(t * 5) * 0.5 + 0.5) * -Math.PI;

        const x = Math.cos(t) * PurpleShow.RADIUS;
        const z = Math.sin(t) * PurpleShow.RADIUS;
        const forward = new Vector3(x, 0, z);
        const circle = (forward.scale(Math.cos(circleT)).add(Vector3.Up().scale(Math.sin(circleT)))).scale(PurpleShow.CIRCLE_RADIUS);
        const pos = forward.add(Vector3.Up().scale(PurpleShow.Y)).add(circle);

        return pos;
    }
}