import {Color3} from "@babylonjs/core";
import {ButtonMesh} from "./buttonMesh";

export class ButtonLight {
    private readonly _mesh: ButtonMesh;
    private _color: Color3;

    constructor(mesh: ButtonMesh) {
        this._mesh = mesh;
        this._color = Color3.Black();
    }

    public set color(color: Color3) {
        this._color = color;
        this._mesh.mat.diffuseColor = color;
        this.setState(false);
    }

    public setState(enabled: boolean) {
        const intensity = enabled ? 0.65 : 0.05;
        this._mesh.mat.emissiveColor = Color3.Lerp(Color3.Black(), this._color, intensity);
    }
}