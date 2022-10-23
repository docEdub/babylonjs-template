import { Engine } from "@babylonjs/core"
import { Main } from "./main"

(() => {
    const canvas = <HTMLCanvasElement>document.getElementById("MainCanvas");
    const engine = new Engine(canvas, true);
    const main = new Main(engine);

    window.addEventListener('resize', function() {
        engine.resize()
    })

    engine.runRenderLoop(() => {
       main.render()
    })
})()
