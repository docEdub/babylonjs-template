import { Playground } from "./playground";
// import { Playground } from "./playground-with-datgui";

(() => {
    const canvas = <HTMLCanvasElement>document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = Playground.CreateScene(engine, canvas);

    window.addEventListener("resize", () => {
        engine.resize();
    });

    engine.runRenderLoop(() => {
        scene.render(true);
    });
})();
