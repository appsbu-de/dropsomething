/* globals pixelwidth, pixelheight */
DropSomething.MainMenu = function (game) {
	this.game = game;
};

DropSomething.MainMenu.prototype = {
	create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.stage.backgroundColor = '#E0F8D0';

        this.platform = this.game.add.group();
        this.platform.createMultiple(5, 'sprites', 'ground1');
        this.game.physics.enable(this.platform);

        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.helpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.H);

        this.welcome = this.addTextElement("Drop Something!");
        this.scorefont = this.addTextElement("Highscore: " + this.game.CS.highscore);
        this.pressSpace = this.addTextElement("Press Space to play!");
		this.help = this.addTextElement("Press H for help");

        this.titleText = this.game.add.image(this.game.world.centerX - 16, this.game.world.centerY, this.welcome);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.pressSpace = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 16, this.pressSpace);
        this.pressSpace.anchor.setTo(0.5, 0.5);

        this.highscore = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 32, this.scorefont);
        this.highscore.anchor.setTo(0.5, 0.5);

        this.helpHint = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 32, this.help);
        this.helpHint.anchor.setTo(0.5, 0.5);

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

        this.game.time.events.loop(Phaser.Timer.SECOND, this.platformGenerator, this);
	},

    platformGenerator: function() {
        var myPlatform = this.platform.getFirstDead();
        if (myPlatform !== null) {
            myPlatform.reset(this.game.rnd.integerInRange(16, 160-16), 160);

            myPlatform.outOfBoundsKill = true;
            myPlatform.checkWorldBounds = true;
            myPlatform.body.velocity.y = -75;
        }
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

		if (this.helpKey.isDown) {
			this.showHelp();
		}
	},

	showHelp: function() {
        this.cleanUp();
        this.game.state.start('Help');
	},

	startGame: function () {

        this.cleanUp();
		this.game.state.start('Game');
	},

    cleanUp: function() {
        this.titleText.destroy();
        this.helpHint.destroy();
        this.highscore.destroy();
        this.pressSpace.destroy();
        this.platform.destroy();
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
