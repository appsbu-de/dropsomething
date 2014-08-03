
DropSomething = {};

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
        this.game.CS.settings.fontMap = {
            '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, '0': 9,
            'a': 10,
            'b': 11,
            'c': 12,
            'd': 13,
            'e': 14,
            'f': 15,
            'g': 16,
            'h': 17,
            'i': 18,
            'j': 19,
            'k': 20,
            'l': 21,
            'm': 22,
            'n': 23,
            'o': 24,
            'p': 25,
            'q': 26,
            'r': 27,
            's': 28,
            't': 29,
            'u': 30,
            'v': 31,
            'w': 32,
            'x': 33,
            'y': 34,
            'z': 35,
            ':': 36,
            '!': 37,
            '?': 38
        };

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
