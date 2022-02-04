AFRAME.registerComponent("fish", {
    init: function () {
        for (var i = 1; i <= 10; i++) {
            const id = `fish${i}`;

            const posX = Math.random() * 100 + -50;
            const posY = Math.random() * 5 + 5;
            const posZ = Math.random() * 60 + -40;
            const position = { x: posX, y: posY, z: posZ };
            this.genrateFish(id, position);
        }
    },
    genrateFish: function (id, position) {
        const fishModel = document.querySelector("#fish");
        var fish = document.createElement("a-entity");

        fish.setAttribute("id", id);
        fish.setAttribute("position", position);
        fish.setAttribute("scale", { x: 0.6, y: 0.6, z: 0.6 });
        fish.setAttribute("gltf-model", "./assets/fish/scene.gltf");

        fish.setAttribute("animation", {
            property: "position",
            to: "100 10 -20",
            loop: "true",
            dur: 20000,
        });

        fish.setAttribute("animation-mixer", {});

        fish.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2
        });

        fish.setAttribute("game-play", {
            elementId: `#${id}`,
        });

        fishModel.appendChild(fish);
    }
});