import {Scene, TransformNode, Vector3} from "@babylonjs/core";
import {Button} from "./Button/button";
import {ControlPanelMesh} from "./controlPanelMesh";
import {Show} from "../Show/show";

export class ControlPanel extends TransformNode {
    public readonly shows: [Button, Show][];

    private _buttonGroup: TransformNode;

    constructor(scene: Scene) {
        super("ControlPanel", scene);

        this.shows = [];
        new ControlPanelMesh(scene, this);

        this._buttonGroup = new TransformNode("ButtonGroup", this._scene);
        this.initButtonGroup();
    }

    private initButtonGroup() {
        this._buttonGroup = new TransformNode("ButtonGroup", this._scene);
        this._buttonGroup.position = new Vector3(0, 0.25, -0.25);
        this._buttonGroup.rotation = new Vector3(0.7, 0, 0);
        this._buttonGroup.parent = this;
    }

    public addShow(button: Button, show: Show) {
        this.shows.push([button, show]);
        button.onHit = (button) => this.onSelected(button);
        button.parent = this._buttonGroup;
    }

    private onSelected(button: Button) {
        for (const show of this.shows) {
            const isCurrent = show[0] == button;
            show[0].setState(show[0] == button);
            show[1].setEnabled(isCurrent);
        }
    }
}