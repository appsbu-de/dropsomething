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

        var font =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAAICAYAAABtcuNzAAACVElEQVRoQ+2ZMXJDMQhE4y5HSOn7nypljpAumV8oQxjBW8Dfhee7syUELMsKJbe363MhcCFwIfCiCNx8Xu8f95/vr8/t72tvd31nt848/NpYqj4q9lEc64wz1m18dP6Bg99D9pQ/rR8+Mx+WFxlHlNyi/Jbt7vzI54rb+iV74niVe57DU3uq/xQ/nz999xh38FX4Rxqb9WfE3X9CRg1uC0litWvQ47dOc+xInIHRLYDaYGefv8uNBCYTAAW/in23hhl/JvlZ3kYc9nsifkZYVeKb8qPK7akAPUPgbE7EtSj/jj79CdxyqjinPVmBu81BPgnAZxL0DIJX4ieBnK53a6gIXOdsz90I/zX5TOtztv0rCxz1cbZOArdbl5+oyvSWBbDWomeuXe+O+DSpqAB1nwCWmJ0npjoVZw28i52enxY3moCi+hH2ygUUxU5nqwK3XhDT+kb8pBdAhp2tkcqDCNOqACv4KfEpPZzllgk76U8kjCWBI/WlIIioyg1PZygTAOVRJYiPaWpPExadT/a0TucrGFenEN9k3p5udvVvcJmAk0CpwpPhR9w7i98ZvorA2bgphwk/umdHl7gscOSYbmhF/KYCpzYB5dJpcCJAZX0qQGRP6538qTGJHxN8fLyd+Cf+be5dASV8qH/U+BXx7eBH8VPPKdNbZ09J4KyD6hNMKdDaQ/+Jy9bplj180Jic3UCRvUIwNb+dj9U4mX+qj5J3FCPlRwKnxE8TVJTfIwTOTgD0BI0azebo60T4ET7UPxR/Vh8ryl2BpvgzbCrCRUOMx/0XnyncVMonngcAAAAASUVORK5CYII=';

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

        this.game.load.image('font', font);

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
        this.game.state.start('MainMenu');

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
