window.DropSomething = {};

DropSomething.Boot = function (game) {
    this.game = game;
};

DropSomething.Boot.prototype = {
    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        // this.load.image('preloaderBackground', 'assets/img/water_texture.jpg');
        // this.load.image('preloaderBar', 'assets/img/plane-sheet.png');

    },

    create: function () {

        var pixelCanvas = document.getElementById("pixel");
        this.game.CS.settings.pixelcontext = pixelCanvas.getContext("2d");
        this.game.CS.settings.pixelwidth = pixelCanvas.width;
        this.game.CS.settings.pixelheight = pixelCanvas.height;

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
