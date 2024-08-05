import {Stage} from "./stage";
import {Vector3} from "@babylonjs/core";
import {Button} from "../ControlPanel/Button/button";
import {RedShow} from "../Show/ShowType/redShow";
import {OrangeShow} from "../Show/ShowType/orangeShow";
import {Show} from "../Show/show";
import {GreenShow} from "../Show/ShowType/greenShow";
import {BlueShow} from "../Show/ShowType/blueShow";
import {PurpleShow} from "../Show/ShowType/purpleShow";

export class FiveButtonStage extends Stage {

    protected build(): void {
        this._controlPanel.position = new Vector3(1.2, 0.2, -6.5);
        this._controlPanel.rotation = new Vector3(0, 0.5, 0);

        const buttons = this.createButtons();
        this.createShows(buttons);
    }

    private createButtons(): Button[] {
        const posList: Vector3[] = [
            new Vector3(-0.25, 0.25, -0.1),
            new Vector3(0.25, 0.25, -0.1),
            new Vector3(0.0, 0.0, -0.1),
            new Vector3(-0.25, -0.25, -0.1),
            new Vector3(0.25, -0.25, -0.1)
        ];

        const buttons: Button[] = [];
        for (const pos of posList) {
            const button = new Button(this._scene);
            button.position = pos;

            buttons.push(button);
        }

        return buttons;
    }

    private createShows(buttons: Button[]) {
        const shows: Show[] = [
            new RedShow(this._scene, buttons[0]),
            new OrangeShow(this._scene, buttons[1]),
            new GreenShow(this._scene, buttons[2]),
            new BlueShow(this._scene, buttons[3]),
            new PurpleShow(this._scene, buttons[4]),
        ];

        for (let i = 0; i < shows.length; i++) {
            this._controlPanel.addShow(buttons[i], shows[i]);
        }
    }
}