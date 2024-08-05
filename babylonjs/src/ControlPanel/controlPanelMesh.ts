import {Color3, MeshBuilder, Scene, StandardMaterial, TransformNode, Vector3} from "@babylonjs/core";

export class ControlPanelMesh {
    constructor(scene: Scene, parent: TransformNode) {
        const mat = new StandardMaterial("ControlPanelMaterial", scene);
        mat.diffuseColor = new Color3(0.77, 0.82, 1);

        const base = MeshBuilder.CreateBox("Base", {size: 1}, scene);
        base.material = mat;
        base.rotation = new Vector3(0.7, 0, 0);
        base.parent = parent;

        const base2 = MeshBuilder.CreateCylinder("Base2", {diameter: 1, height: 2}, scene);
        base2.material = mat;
        base2.position = new Vector3(0, -1, 0);
        base2.parent = parent;
    }
}