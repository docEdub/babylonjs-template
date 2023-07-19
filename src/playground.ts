
class Playground {
    public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);

        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'sphere' shape. Params: name, options, scene
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;

        // Our built-in 'ground' shape. Params: name, options, scene
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

        // Setup GUI.
        let canvasZone = document.getElementById("canvasZone")!;
        canvasZone.style.position = "relative";

        const oldGui = document.getElementById("datGui");
        if (oldGui) {
            canvasZone.removeChild(oldGui);
        }

        const gui = new dat.GUI({ autoPlace: false });
        canvasZone.appendChild(gui.domElement);
        gui.domElement.id = "datGui";
        gui.domElement.style.position = "absolute";
        gui.domElement.style.top = "0";
        gui.domElement.style.right = "0";

        // Hack to force dat.gui to use floats for the gui instead of integers.
        // NB: The gui rounds the text off to the nearest step value given in the `add` functions.
        camera.position.x += 0.0001;
        camera.position.y += 0.0001;
        camera.position.z += 0.0001;

        const cameraGui = gui.addFolder("camera");
        cameraGui.add(camera.position, "x", -10, 10, 0.01);
        cameraGui.add(camera.position, "y", -10, 10, 0.01);
        cameraGui.add(camera.position, "z", -50, -5, 0.01);
        cameraGui.open();

        return scene;
    }
}

declare var dat: any;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { Playground };
