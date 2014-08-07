/* globals pixelwidth, pixelheight */
DropSomething.Help = function (game) {
	this.game = game;
};

DropSomething.Help.prototype = {
	create: function () {
        this.game.stage.backgroundColor = '#E0F8D0';

        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.platform = this.add.sprite(12, 12,'sprites', 'ground1');
        this.extra = this.add.sprite(20, 36, 'sprites', 'extra1');
        this.ball = this.add.sprite(8, 52, 'sprites', 'ball');

        this.platformHelp = this.addTextElement("Hit platforms!");
        this.collectHelp = this.addTextElement("Collect extras!");
        this.cursorHelp = this.addTextElement("Use cursor l:r");
        this.pressSpace = this.addTextElement("Back: Press Space!");
		this.copyrightHelp1 = this.addTextElement("Made by");
		this.copyrightHelp2 = this.addTextElement("Carsten Sandtner");

        this.platformHelpImg = this.game.add.image(32, 16, this.platformHelp);
        this.collectHelpImg = this.game.add.image(32, 36, this.collectHelp);
        this.cursorHelpImg = this.game.add.image(32, 52, this.cursorHelp);

        this.copyrightHelp1Img = this.game.add.image(16, this.game.world.height - 22, this.copyrightHelp1);
        this.copyrightHelp2Img = this.game.add.image(16, this.game.world.height - 12, this.copyrightHelp2);

        this.pressSpace = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 16, this.pressSpace);
        this.pressSpace.anchor.setTo(0.5, 0.5);

        this.game.add.tween(this.ball)
            .to(
                { x: 24 },
                500,
                Phaser.Easing.Linear.None,
                true,
                0,
                1000,
                true
            );

        /*
        this.tweet = this.game.input.keyboard.addKey(Phaser.Keyboard.T);
        this.tweet.onUp.add(function(){
            this.tweetScore();
        }, this);

        var twitter = this.game.add.image(this.game.world.width - 18, this.game.world.height - 18, 'twitter');
        */
	},

    addTextElement: function (endTextValue) {
        var newText = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ:!?');
        newText.text = endTextValue;
        return newText;
    },

	update: function () {
        if (this.spaceKey.isDown) {
            this.back();
        }
	},

	back: function () {
        this.platformHelpImg.destroy();
        this.collectHelpImg.destroy();
        this.copyrightHelp1Img.destroy();
        this.copyrightHelp2Img.destroy();
        this.pressSpace.destroy();
        this.cursorHelpImg.destroy();

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
