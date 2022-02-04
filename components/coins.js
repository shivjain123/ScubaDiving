AFRAME.registerComponent("coin_comp", {
    init: function () {
        for (var i = 1; i <= 12; i++) {
            const id = `coin${i}`;

            const pos_x = (Math.random() * 100 - 50);
            const pos_y = (Math.random() * 5 + 5);
            const pos_z = (Math.random() * 60 - 40);

            const position = { x: pos_x, y: pos_y, z: pos_z };
            this.create_coins(id, position);
        }
    },
    create_coins: function (id, position) {
        var coin = document.createElement("a-entity");

        //Setting Attributes
            coin.setAttribute("id", id);
            coin.setAttribute("position", position);
            coin.setAttribute("material", "color", "#ff9100");
            coin.setAttribute("geometry", { primitive: "circle", radius: 1 });
            coin.setAttribute("animation", {
                property: "rotation",
                to: "0 360 0",
                loop: "true",
                dur: 1000,
            });

            coin.setAttribute("static-body", {
                shape: "sphere",
                sphereRadius: 2.5
            });

            coin.setAttribute("game-play", {
                elementId: `#${id}`,
            });

        var coinEntity = document.querySelector("#coins");
        coinEntity.appendChild(coin);
    }
});