import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/GLTFLoader.js";

(() => {
    const host = document.getElementById("three-workstation-canvas");
    const workstation = document.querySelector("[data-three-workstation]");
    const loaderUI = document.getElementById("three-workstation-loader");

    if (!host || !workstation) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = reducedQuery.matches;

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    let scene;
    let camera;
    let renderer;
    let model;
    let raf = 0;

    init();
    loadModel();
    animate();

    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(
            36,
            Math.max(host.clientWidth, 1) / Math.max(host.clientHeight, 1),
            0.1,
            100
        );
        camera.position.set(0, 0, 6.15);

        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(host.clientWidth, host.clientHeight, false);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;

        host.appendChild(renderer.domElement);

        scene.add(new THREE.HemisphereLight(0xdffcff, 0x07111f, 1.25));

        const cyan = new THREE.PointLight(0x65e6d2, 14, 10);
        cyan.position.set(3.3, 2.4, 4.2);
        scene.add(cyan);

        const violet = new THREE.PointLight(0x8aa7ff, 7, 9);
        violet.position.set(-3.5, -1.8, 2.5);
        scene.add(violet);

        workstation.addEventListener("pointermove", onPointerMove, { passive: true });
        workstation.addEventListener("pointerleave", resetPointer, { passive: true });
        window.addEventListener("resize", resize, { passive: true });

        reducedQuery.addEventListener?.("change", event => {
            reducedMotion = event.matches;
            if (reducedMotion) resetPointer();
        });
    }

    function loadModel() {
        const loader = new GLTFLoader();

        loader.load(            
            "assets/workstation-hero.glb",
            gltf => {
                model = gltf.scene;

                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());

                model.position.sub(center);

                const maxSize = Math.max(size.x, size.y, size.z) || 1;
                model.scale.setScalar(5.55 / maxSize);

                model.traverse(object => {
                    if (object.isMesh && object.material) {
                        object.material.needsUpdate = true;
                    }
                });

                scene.add(model);

                if (loaderUI) loaderUI.classList.add("is-hidden");
            },
            progress => {
                if (!loaderUI || !progress.total) return;
                const label = loaderUI.querySelector("span:last-child");
                if (label) {
                    label.textContent =
                        "Loading environment 3D " +
                        Math.round(progress.loaded / progress.total * 100) +
                        "%";
                }
            },
            error => {
                console.error("Could not load assets", error);
                if (loaderUI) {
                    const label = loaderUI.querySelector("span:last-child");
                    if (label) label.textContent = "The 3D environment could not be loaded.";
                }
            }
        );
    }

    function onPointerMove(event) {
        if (reducedMotion) return;

        const rect = workstation.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    }

    function resetPointer() {
        pointer.x = 0;
        pointer.y = 0;
    }

    function animate() {
        raf = requestAnimationFrame(animate);

        const time = performance.now() * 0.001;

        if (model && !reducedMotion) {
            target.x += (pointer.x * 0.10 - target.x) * 0.045;
            target.y += (pointer.y * 0.075 - target.y) * 0.045;

            const wantedYRotation =
                target.x + Math.sin(time * 0.42) * 0.035;

            const wantedXRotation =
                -target.y + Math.cos(time * 0.34) * 0.018;

            const wantedY =
                Math.sin(time * 0.72) * 0.045;

            model.rotation.y +=
                (wantedYRotation - model.rotation.y) * 0.055;

            model.rotation.x +=
                (wantedXRotation - model.rotation.x) * 0.055;

            model.position.y +=
                (wantedY - model.position.y) * 0.04;
        }

        if (!reducedMotion) {
            camera.position.x +=
                (pointer.x * 0.12 - camera.position.x) * 0.035;

            camera.position.y +=
                (-pointer.y * 0.07 - camera.position.y) * 0.035;
        } else {
            camera.position.x *= 0.96;
            camera.position.y *= 0.96;
        }

        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
    }

    function resize() {
        if (!renderer || !camera) return;

        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(width, height, false);
    }

    window.addEventListener("beforeunload", () => {
        cancelAnimationFrame(raf);
        renderer?.dispose();
    });
})();
