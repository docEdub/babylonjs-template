import { Main } from "../main"

import {
    ArcRotateCamera,
    Vector3
} from "@babylonjs/core"

export class MainCamera {
    constructor(main: Main) {
        const distanceToTarget = 12;
        const target = Vector3.ZeroReadOnly;
        const camera = new ArcRotateCamera("mainCamera", -Math.PI / 2, Math.PI / 2.1, distanceToTarget, target, main.scene);
        camera.attachControl(true);
    }
}
