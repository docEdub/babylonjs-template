import { MainCamera } from "./Cameras/mainCamera"
import { GroundMesh } from "./Meshes/groundMesh"

import {
    Engine,
    Scene
} from "@babylonjs/core";

export class Main {
    constructor(engine: Engine) {
        const scene = new Scene(engine);
        scene.clearColor.set(0, 0, 0, 1);
        this._.scene = scene;

        const camera = new MainCamera(this);
        this._.camera = camera;

        new GroundMesh(this);
    }

    public render() {
        this.scene.render();
    }

    public get scene() {
        return this._.scene;
    }

    private _ = new class {
        scene: Scene;
        camera: MainCamera;
    }
}
