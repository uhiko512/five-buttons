import {Color3, Mesh, MeshBuilder, Scene, StandardMaterial, TransformNode, Vector3} from "@babylonjs/core";

export class ButtonMesh {
    public readonly core: Mesh;
    public mat: StandardMaterial;

    constructor(scene: Scene, parent: TransformNode) {
        this.mat = new StandardMaterial("ButtonMaterial", scene);
        this.mat.diffuseColor = Color3.Black();

        const frame = MeshBuilder.CreateCylinder("Frame", {diameter: 0.22, height: 0.18}, scene);
        frame.parent = parent;

        this.core = MeshBuilder.CreateCylinder("Core", {diameter: 0.205, height: 0.18}, scene);
        this.core.material = this.mat;
        this.core.position = new Vector3(0, -0.05, 0);
        this.core.parent = parent;
    }
}