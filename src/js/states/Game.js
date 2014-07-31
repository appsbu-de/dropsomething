/* globals pixelwidth, pixelheight */
BasicGame.Game = function (game) {
    this.game = game;
    console.log(this.game.CS);
};

BasicGame.Game.prototype = {

	create: function () {
        this.game.stage.backgroundColor = '#E0F8D0';
        this.ball = this.game.add.sprite(5, 5, 'sprites', 'ball');
        // Game init Code here.
    },

	update: function () {

        this.ball.x++;

        if (this.ball.x > 160 ) {
            this.ball.x = -16;
        }
	},

	quitGame: function (pointer) {
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.game.state.start('MainMenu');
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
