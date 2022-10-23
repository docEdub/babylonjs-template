import { Main } from "../main"

import {
    MeshBuilder,
    StandardMaterial
} from "@babylonjs/core"

export class GroundMesh {
    constructor(main: Main) {
        const mesh = MeshBuilder.CreateGround("ground", {height: 10, width: 10, subdivisions: 1}, main.scene);
        const material = new StandardMaterial("groundMaterial", main.scene);
        material.emissiveColor.set(1, 1, 1);
        material.backFaceCulling = false;
        material.alpha = 0.05
        mesh.material = material;
    }
}
