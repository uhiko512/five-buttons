import {Color3, Vector3} from "@babylonjs/core";
import {Show} from "../show";

export class OrangeShow extends Show {
    private static SPEED: number = 0.055;
    private static SPEED_Y: number = OrangeShow.SPEED * 1.8;
    private static RADIUS: number = 2.0;
    private static OFFSET_Y: number = 0.5;
    private static Y: number = 1.8;

    protected ballCount(): number {
        return 2;
    }

    protected getColor(): Color3 {
        return new Color3(1, 0.45, 0.09);
    }

    protected anim(): void {
        const t = this._time * OrangeShow.SPEED;
        const ty = this._time * OrangeShow.SPEED_Y;

        const x0 = Math.cos(t) * OrangeShow.RADIUS;
        const z0 = Math.sin(t) * OrangeShow.RADIUS;
        const y0 = OrangeShow.Y + Math.sin(ty) * OrangeShow.OFFSET_Y;
        this._balls[0].position = new Vector3(x0, y0, z0);

        const x1 = Math.cos(t + Math.PI) * OrangeShow.RADIUS;
        const z1 = Math.sin(t + Math.PI) * OrangeShow.RADIUS;
        const y1 = OrangeShow.Y + Math.sin(ty + Math.PI) * OrangeShow.OFFSET_Y;
        this._balls[1].position = new Vector3(x1, y1, z1);
    }
}