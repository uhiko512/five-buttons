import {Color3, MeshBuilder, Scene, StandardMaterial, TransformNode} from "@babylonjs/core";
import {ControlPanel} from "../ControlPanel/controlPanel";

export abstract class Stage extends TransformNode {
    protected _controlPanel: ControlPanel;

    constructor(scene: Scene) {
        super("Stage", scene);

        this._controlPanel = new ControlPanel(this._scene);

        const mat = new StandardMaterial("StageMaterial", scene);
        mat.diffuseColor = new Color3(1, 0.9, 0);

        const mesh = MeshBuilder.CreateCylinder("Stage", {diameter: 5, height:　0.5});
        mesh.material = mat;
        mesh.parent = this;

        this.build();
    }

    protected abstract build(): void;
}