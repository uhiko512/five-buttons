import {
    Color3,
    FreeCamera,
    HemisphericLight, Mesh,
    MeshBuilder,
    Scene,
    SpotLight,
    StandardMaterial,
    Vector3
} from "@babylonjs/core";

export class StaticSceneObject {
    private static _scene: Scene;

    public static build(scene: Scene) {
        StaticSceneObject._scene = scene;

        this.createLights();
        this.createCamera();
        this.createRoom();
    }

    private static createLights() {
        const spotLight = new SpotLight("SpotLight", new Vector3(0, 18, 0), new Vector3(0, -1, 0), Math.PI, 30, StaticSceneObject._scene);
        spotLight.intensity = 1.0;

        const ambientLight = new HemisphericLight("AmbientLight", new Vector3(0, 1, 0), StaticSceneObject._scene);
        ambientLight.intensity = 0.1;
    }

    private static createCamera() {
        const camera  = new FreeCamera("MainCamera", new Vector3(0, 1, -9.5), StaticSceneObject._scene);
        camera.rotation = new Vector3(0, 0.1, 0);
    }

    private static createRoom() {
        const mat = new StandardMaterial("RoomMaterial", StaticSceneObject._scene);
        mat.diffuseColor = new Color3(0.4, 0.43, 0.63);

        const room = MeshBuilder.CreateBox("Room", {size: 20, sideOrientation: Mesh.DOUBLESIDE}, StaticSceneObject._scene);
        room.position = Vector3.Up().scale(9);
        room.material = mat;
    }
}