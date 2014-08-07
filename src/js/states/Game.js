/* globals pixelwidth, pixelheight */
DropSomething.Game = function (game) {
    this.game = game;
    this.platformTimer = null;
};

DropSomething.Game.prototype = {

	create: function () {
        this.game.stage.backgroundColor = '#E0F8D0';

        this.dead = false;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.initialVelocity = this.levelVelocity = -25;
        this.platformCounter = 0;
        this.game.CS.score = 0;

        this.endModalBmp = this.game.add.bitmapData(160, 144);
        this.endModalBmp.context.lineWidth = 2;
        this.endModalBmp.context.fillStyle = 'rgba(136, 192, 112, 1)';

        this.modalLayer = this.game.add.sprite(0, 0, this.endModalBmp);

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

        this.scoreText = this.addTextElement("score " + this.game.CS.score);
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
        return this.ball.y > - 24 && this.ball.y < this.game.world.height + 24;
    },

    getExtraCallback: function(ball, extra) {
        extra.kill();
        this.game.CS.score += 25;
        this.game.CS.audio.touch.play();
    },

	quitGame: function () {

        var newHighscore = (this.game.CS.score >= this.game.CS.highscore);

        if (!this.dead) {
            this.ball.kill();
            this.game.CS.audio.crash.play();
            this.game.time.events.remove(this.platformTimer);
            this.setVelocities(0);
            this.game.CS.highscore = Math.max(this.game.CS.highscore, this.game.CS.score);
            this.showEndModal(newHighscore);
            var continueKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            continueKey.onUp.add(function() {
                this.ball.destroy();
                this.platform1.destroy();
                this.platform2.destroy();
                this.extra.destroy();
                this.modalLayer.destroy();
                this.endTextImg.destroy();

                this.game.state.start('MainMenu');
            }, this);


            this.dead = true;
        }
	},

    addTextElement: function (endTextValue) {
        var newText = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ:!?');
        newText.text = endTextValue;
        return newText;
    },

    showEndModal: function(isHighscore) {

        var endText = '';

        if (isHighscore) {
            endText += 'New Highscore!';
        }
        else {
            endText += 'No Highscore!';
        }

        this.modalLayer.bringToTop();

        this.endModalBmp.context.fillRect(16, 16, 128, 112);
        this.endModalBmp.dirty = true;

        this.endText = this.addTextElement(endText);
        this.endTextCtn = this.addTextElement('Press spacebar!');

        this.endTextImg = this.game.add.image(this.game.world.centerX ,-16, this.endText);
        this.endTextCtnImg = this.game.add.image(this.game.world.centerX , this.game.world.centerY + 32, this.endTextCtn);
        this.endTextImg.anchor.setTo(0.5, 0.5);
        this.endTextCtnImg.anchor.setTo(0.5, 0.5);

        var bounce = this.game.add.tween(this.endTextImg);

        bounce.to({ y: this.game.world.centerY }, 2000, Phaser.Easing.Bounce.Out);
        bounce.start();
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

    setVelocities: function (velocity) {
        this.platform1.setAll('body.velocity.y', velocity);
        this.platform2.setAll('body.velocity.y', velocity);
        this.extra.setAll('body.velocity.y', velocity);
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
        this.setVelocities(this.levelVelocity);
        this.platformTimer = this.game.time.events.add(
            Phaser.Timer.SECOND * this.game.rnd.integerInRange(1,maxTimeToSpawn), this.spawnPlatform, this
        );
        this.platformTimer.autoDestroy = true;
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
