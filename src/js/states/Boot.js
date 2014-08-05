window.DropSomething = {};

DropSomething.Boot = function (game) {
    this.game = game;
};

DropSomething.Boot.prototype = {
    preload: function () {
        var font =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAAICAYAAABtcuNzAAACVElEQVRoQ+2ZMXJDMQhE4y5HSOn7nypljpAumV8oQxjBW8Dfhee7syUELMsKJbe363MhcCFwIfCiCNx8Xu8f95/vr8/t72tvd31nt848/NpYqj4q9lEc64wz1m18dP6Bg99D9pQ/rR8+Mx+WFxlHlNyi/Jbt7vzI54rb+iV74niVe57DU3uq/xQ/nz999xh38FX4Rxqb9WfE3X9CRg1uC0litWvQ47dOc+xInIHRLYDaYGefv8uNBCYTAAW/in23hhl/JvlZ3kYc9nsifkZYVeKb8qPK7akAPUPgbE7EtSj/jj79CdxyqjinPVmBu81BPgnAZxL0DIJX4ieBnK53a6gIXOdsz90I/zX5TOtztv0rCxz1cbZOArdbl5+oyvSWBbDWomeuXe+O+DSpqAB1nwCWmJ0npjoVZw28i52enxY3moCi+hH2ygUUxU5nqwK3XhDT+kb8pBdAhp2tkcqDCNOqACv4KfEpPZzllgk76U8kjCWBI/WlIIioyg1PZygTAOVRJYiPaWpPExadT/a0TucrGFenEN9k3p5udvVvcJmAk0CpwpPhR9w7i98ZvorA2bgphwk/umdHl7gscOSYbmhF/KYCpzYB5dJpcCJAZX0qQGRP6538qTGJHxN8fLyd+Cf+be5dASV8qH/U+BXx7eBH8VPPKdNbZ09J4KyD6hNMKdDaQ/+Jy9bplj180Jic3UCRvUIwNb+dj9U4mX+qj5J3FCPlRwKnxE8TVJTfIwTOTgD0BI0azebo60T4ET7UPxR/Vh8ryl2BpvgzbCrCRUOMx/0XnyncVMonngcAAAAASUVORK5CYII=';

        this.game.load.image('font', font);

    },

    create: function () {

        var pixelCanvas = document.getElementById("pixel");
        this.game.CS.settings.pixelcontext = pixelCanvas.getContext("2d");
        this.game.CS.settings.pixelwidth = pixelCanvas.width;
        this.game.CS.settings.pixelheight = pixelCanvas.height;
        this.game.CS.audio = {};
        this.game.CS.highscore = 0;

        Phaser.Canvas.setSmoothingEnabled(this.game.CS.settings.pixelcontext, false);

        this.game.input.maxPointers = 1;
        this.game.stage.disableVisibilityChange = true;

        this.game.state.start('Preloader');
    },

    render: function() {
        this.game.CS.settings.pixelcontext.drawImage(
            this.game.canvas,
            0,
            0,
            this.game.CS.settings.originWidth,
            this.game.CS.settings.originHeight,
            0,
            0,
            this.game.CS.settings.pixelwidth,
            this.game.CS.settings.pixelheight
        );
    }
};
