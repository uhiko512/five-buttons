import {Show} from "../show";
import {Color3, Vector3} from "@babylonjs/core";

export class GreenShow extends Show {
    private static SPEED = 0.055;
    private static PING_PONG_SPEED = GreenShow.SPEED * 0.5;
    private static RADIUS = 2.0;
    private static Y = 1.8;

    protected ballCount(): number {
        return 3;
    }

    protected getColor(): Color3 {
        return new Color3(0.12, 1.0, 0.0);
    }

    protected anim(): void {
        for (let i = 0; i < this.ballCount(); i++)
        {
            this._balls[i].position = this.calcPos(i);
        }
    }

    private calcPos(i: number): Vector3 {
        const pingPong = (Math.sin(this._time * GreenShow.PING_PONG_SPEED) * 0.5 + 0.5) * Math.PI * 4.0;
        const angleOffset = 2 * Math.PI * (i / this.ballCount());
        const t = pingPong + angleOffset;

        const x = Math.cos(t) * GreenShow.RADIUS;
        const z = Math.sin(t) * GreenShow.RADIUS;
        const pos = new Vector3(x, GreenShow.Y, z);

        return pos;
    }
}