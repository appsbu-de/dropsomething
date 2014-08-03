/* globals pixelwidth, pixelheight */
DropSomething.Game = function (game) {
    this.game = game;
    this.currentTimer = null;
};

DropSomething.Game.prototype = {

	create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.initialVelocity = this.levelVelocity = -25;
        this.platformCounter = 0;
        this.game.CS.score = 0;

        // Some settings
        this.game.stage.backgroundColor = '#E0F8D0';

        this.ball = this.add.sprite(this.game.world.width / 2, 32, 'sprites', 'ball');

        this.platform1 = this.game.add.group();
        this.platform2 = this.game.add.group();
        this.extra = this.game.add.group();
        this.platform1.createMultiple(30, 'sprites', 'ground1');
        this.platform2.createMultiple(30, 'sprites', 'ground2');
        this.extra.createMultiple(5, 'sprites', 'extra1');

        this.game.physics.enable(this.ball);
        this.game.physics.enable(this.platform1);
        this.game.physics.enable(this.platform2);
        this.game.physics.enable(this.extra);

        this.ball.body.bounce.set(0.5);

        this.ball.body.collideWorldBounds = false;
        this.ball.body.mass = 1;
        this.ball.body.gravity.y = 200;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.scoreText = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWYXZ:!?');
        this.scoreText.text = "score " + this.game.CS.score;

        this.scoreValue = this.game.add.image(2, 4, this.scoreText);

        this.setInitialPlatforms();
        this.spawnPlatform();
    },

	update: function () {
        this.ball.body.velocity.x = 0;
        this.handleInput();
        this.checkBoundaries();

        if (!this.checkAlive()) {
            this.quitGame();
        }

        if (this.ball.body.velocity.y > 100) {
            this.ball.body.velocity.y = 100;
        }

        this.game.physics.arcade.overlap(this.ball, this.extra, this.getExtraCallback, null, this);
        this.game.physics.arcade.collide(this.platform1, this.ball);
        this.game.physics.arcade.collide(this.platform2, this.ball);

        this.levelVelocity = this.initialVelocity - this.platformCounter;

        this.scoreText.text = "score " + this.game.CS.score;

    },

    checkAlive: function() {
        return this.ball.y > - 24 && this.ball.y <  this.game.world.height + 24;
    },

    getExtraCallback: function(ball, extra) {
        extra.kill();
        this.game.CS.score += 25;
    },

	quitGame: function (pointer) {
        //	Then let's go back to the main menu.
		this.game.state.start('MainMenu');
	},

    handleInput: function() {
        if (this.cursors.left.isDown) {
            this.ball.body.velocity.x = -75;
        }

        if (this.cursors.right.isDown) {
            this.ball.body.velocity.x = 75;
        }
    },

    checkBoundaries: function() {
        if (this.ball.x > this.game.world.width + 16) {
            this.ball.x = -16;
        }

        if (this.ball.x < -16) {
            this.ball.x = this.game.world.width + 16;
        }
    },

    setInitialPlatforms: function() {
        var i = 4;
        var firstLength = 3;

        while(firstLength--) {
            this.setPlatform('1', (this.game.world.width / 2) - 24, firstLength, 48);
        }

        while(i--) {
            var platformLength = this.game.rnd.integerInRange(1, 4);
            var initX = this.game.rnd.integerInRange(0, 160 - (16 * platformLength));

            while (platformLength--) {
                this.setPlatform('1', initX, platformLength, 96 + (48 * i));
            }
        }
    },

    setPlatform: function (type, initX, platformLength, initY) {
        var usePlatformTile1 = this['platform' + type].getFirstDead();

        if (usePlatformTile1 !== null) {
            usePlatformTile1.reset(initX + (16 * platformLength), initY);

            usePlatformTile1.outOfBoundsKill = true;
            usePlatformTile1.checkWorldBounds = true;

            usePlatformTile1.body.immovable = true;
            usePlatformTile1.body.checkCollision.up = true;
            usePlatformTile1.body.checkCollision.down = true;
            usePlatformTile1.body.checkCollision.left = true;
            usePlatformTile1.body.checkCollision.right = true;
        }
    },

    spawnPlatform: function () {

        this.platformCounter++;
        this.game.CS.score++;

        var type = this.game.rnd.integerInRange(1, 2);
        var platformLength = this.game.rnd.integerInRange(1, 3);
        var initX = this.game.rnd.integerInRange(0, 160 - (16 * platformLength));
        var initY = 160;
        var initYExtra = 160 - 10;
        var maxTimeToSpawn = (this.platformCounter > 44 ? 2 : 1);

        if (this.platformCounter > 5 && Math.random() > 0.65)  {
            var extra = this.extra.getFirstDead();
            if (extra !== null) {
                extra.reset(initX +12, initYExtra);
                extra.outOfBoundsKill = true;
                extra.checkWorldBounds = true;
            }
        }

        while (platformLength--) {
            this.setPlatform(type, initX, platformLength, initY);
        }

        this.platform1.setAll('body.velocity.y', this.levelVelocity);
        this.platform2.setAll('body.velocity.y', this.levelVelocity);
        this.extra.setAll('body.velocity.y', this.levelVelocity);

        this.platformTimer = this.game.time.events.add(
            Phaser.Timer.SECOND * this.game.rnd.integerInRange(1,maxTimeToSpawn), this.spawnPlatform, this
        );
    },


    render: function() {

        this.game.debug.text( "Velocity: " + this.levelVelocity, 5, 132);

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
