/* globals pixelwidth, pixelheight */
DropSomething.MainMenu = function (game) {
	this.game = game;
	this.music = null;
};

DropSomething.MainMenu.prototype = {
	create: function () {
        //this.music = this.add.audio('titleMusic');
		//this.music.play();
        this.game.stage.backgroundColor = '#E0F8D0';
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.welcome = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWYXZ:!?');
        this.welcome.text = "Drop Something!";

        this.pressSpace = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ:!?');
        this.pressSpace.text = "Press Space to play!";

        this.titleText = this.game.add.image(this.game.world.centerX - 16, this.game.world.centerY, this.welcome);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.pressSpace = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 32, this.pressSpace);
        this.pressSpace.anchor.setTo(0.5, 0.5);

        this.game.add.tween(this.titleText)
            .to(
                { x: this.game.world.centerX + 16 },
                1000,
                Phaser.Easing.Linear.None,
                true,
                0,
                1000,
                true
            );

	},

	update: function () {
        if (this.spaceKey.isDown) {
            this.startGame();
        }
	},

	startGame: function (pointer) {
		//this.music.stop();
		this.game.state.start('Game');
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
