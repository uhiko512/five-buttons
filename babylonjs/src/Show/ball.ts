import {Color3, MeshBuilder, Scene, StandardMaterial, TransformNode} from "@babylonjs/core";

export class Ball extends TransformNode {
    private readonly _mat: StandardMaterial;

    constructor(scene: Scene) {
        super("Ball", scene);

        this._mat = new StandardMaterial("BallMaterial", scene);
        this._mat.diffuseColor = Color3.Black();

        const mesh = MeshBuilder.CreateSphere("Ball", {diameter: 0.6});
        mesh.material = this._mat;
        mesh.parent = this;
    }

    public set color(color: Color3) {
        this._mat.diffuseColor = color;
    }
}