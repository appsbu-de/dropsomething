/* globals pixelwidth, pixelheight */
DropSomething.Preloader = function(game) {

    this.game = game;
    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

DropSomething.Preloader.prototype = {

    preload: function() {
        //       this.background = this.add.sprite(0, 0, 'preloaderBackground');
        // this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

        // this.load.setPreloadSprite(this.preloadBar);

        //	Here we load the rest of the assets our game needs.
        var spritesheet =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAQCAYAAADOFPsRAAABuklEQVRYR+2ZMVIDMQxFd2/CESgpOQLllikpKTkCJSUl5ZYcISUlR+AmMMqMwkeRbMlymM3gNJuZ3W979fxlKZmv7+++psRnWa4S6ml6vH2eUwP8c/FMAFshrOvnRFq6tnxIOwC2RO5H0w1gdBMw/AGwI0CvkxgWOjDiRH52ODAHj9S/HMgALTfJ+xrAmhOlZjgwB/EEILoDh5aBp3sWQMvJOPZIoTlwrFYBIhzPd48TrWeGA3MgTYAMjq6YFhlEzYF4JmrOGw6sg3vaPxxbPGujbw5grS/9eHkr9o2XriesCG652R1Ir++vh6sEubkUavWlfK56AJaKMI9eZh32Cq3Bo5dVekQvAbKWQBJEF0BMkzi5LHDOUcRoAHGeSABlkooAsGIQmV+O4Zkf3SfXr0HcXBshAcozNxJAPMc5GBF9CwBcf1ZvnZLoQhVg7Xg9ZyPfIwC4flmARQBqFfhf6K0Uzu9lAqyB01KS1TfWxrKqUAbYI4VlUihqMyk8mkFo3tLv08UzsBb0EsColneZXBBXkVoh4jlDSi+f0bcWUa0ALReqAFuCf6yOOv+ddOltQHb9yAI3o9UHfgNTe4UvlswUmgAAAABJRU5ErkJggg==';
        var localAtlasData = {
            "frames": [{
                "filename": "ground1",
                "frame": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 16
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 16
                },
                "sourceSize": {
                    "w": 16,
                    "h": 16
                }
            }, {
                "filename": "ground2",
                "frame": {
                    "x": 16,
                    "y": 0,
                    "w": 16,
                    "h": 16
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 32,
                    "h": 16
                },
                "sourceSize": {
                    "w": 16,
                    "h": 16
                }
            }, {
                "filename": "ball",
                "frame": {
                    "x": 100,
                    "y": 7,
                    "w": 9,
                    "h": 9
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 9,
                    "h": 9
                },
                "sourceSize": {
                    "w": 9,
                    "h": 9
                }
            }, {
                "filename": "extra1",
                "frame": {
                    "x": 36,
                    "y": 8,
                    "w": 8,
                    "h": 8
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 8,
                    "h": 8
                },
                "sourceSize": {
                    "w": 8,
                    "h": 8
                }
            }, {
                "filename": "extra2",
                "frame": {
                    "x": 52,
                    "y": 8,
                    "w": 8,
                    "h": 8
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 8,
                    "h": 8
                },
                "sourceSize": {
                    "w": 8,
                    "h": 8
                }
            }, {
                "filename": "extra3",
                "frame": {
                    "x": 68,
                    "y": 8,
                    "w": 8,
                    "h": 8
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 8,
                    "h": 8
                },
                "sourceSize": {
                    "w": 8,
                    "h": 8
                }
            }, {
                "filename": "extra4",
                "frame": {
                    "x": 84,
                    "y": 8,
                    "w": 8,
                    "h": 8
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 8,
                    "h": 8
                },
                "sourceSize": {
                    "w": 8,
                    "h": 8
                }
            }],
            "meta": {
                "app": "http://www.leshylabs.com/apps/sstool/",
                "version": "Leshy SpriteSheet Tool v0.8.1",
                "size": {
                    "w": 112,
                    "h": 16
                },
                "scale": 1
            }
        };

        this.game.load.atlas('sprites', spritesheet, null, localAtlasData, Phaser.Loader
            .TEXTURE_ATLAS_JSON_ARRAY);

        //this.load.audio('titleMusic', ['assets/audio/title.mp3']);
        //this.load.bitmapFont('caslon', 'assets/img/desyrel-pink.png', 'asstes/img/desyrel-pink.xml');
    },

    create: function() {
        //this.preloadBar.cropEnabled = false;
    },

    update: function() {

        //	You don't actually need to do this, but I find it gives a much smoother game experience.
        //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
        //	You can jump right into the menu if you want and still play the music, but you'll have a few
        //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
        //	it's best to wait for it to decode here first, then carry on.

        //	If you don't have any music in your game then put the game.state.start line into the create function and delete
        //	the update function completely.

        this.ready = true;
        this.game.state.start('Game');

        /*if (this.cache.isSoundDecoded('titleMusic') && this.ready === false)
		{
			this.ready = true;
			this.game.state.start('MainMenu');
		}*/

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
