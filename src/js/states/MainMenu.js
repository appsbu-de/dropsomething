/* globals pixelwidth, pixelheight */
DropSomething.MainMenu = function (game) {
	this.game = game;
	this.music = null;
};

DropSomething.MainMenu.prototype = {
	create: function () {
        this.game.stage.backgroundColor = '#E0F8D0';
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.welcome = this.addTextElement("Drop Something!");
        this.scorefont = this.addTextElement("Highscore: " + this.game.CS.highscore);
        this.pressSpace = this.addTextElement("Press Space to play!");

        this.titleText = this.game.add.image(this.game.world.centerX - 16, this.game.world.centerY, this.welcome);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.pressSpace = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 32, this.pressSpace);
        this.pressSpace.anchor.setTo(0.5, 0.5);

        this.highscore = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 32, this.scorefont);
        this.highscore.anchor.setTo(0.5, 0.5);

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

        /*
        this.tweet = this.game.input.keyboard.addKey(Phaser.Keyboard.T);
        this.tweet.onUp.add(function(){
            this.tweetScore();
        }, this);

        var twitter = this.game.add.image(this.game.world.width - 18, this.game.world.height - 18, 'twitter');
        */
	},

    tweetScore: function() {
        var twtTitle  = "Wow! I've dropped a score of  " + this.game.CS.highscore + " points! How much do you get?";
        var twtUrl    = location.href;
        var twtLink = 'http://twitter.com/home?status='+encodeURIComponent(twtTitle + ' ' + twtUrl);
        window.open(twtLink,'_blank');
    },

    addTextElement: function (endTextValue) {
        var newText = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ:!?');
        newText.text = endTextValue;
        return newText;
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
