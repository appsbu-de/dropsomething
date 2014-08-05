/* globals pixelwidth, pixelheight, CPlayer, song, RIFFWAVE */
DropSomething.Preloader = function(game) {

    this.game = game;
    this.background = null;
    this.preloadBar = null;

    this.loaded = false;

};

DropSomething.Preloader.prototype = {

    preload: function() {
        var spritesheet =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAQCAYAAADOFPsRAAABuklEQVRYR+2ZMVIDMQxFd2/CESgpOQLllikpKTkCJSUl5ZYcISUlR+AmMMqMwkeRbMlymM3gNJuZ3W979fxlKZmv7+++psRnWa4S6ml6vH2eUwP8c/FMAFshrOvnRFq6tnxIOwC2RO5H0w1gdBMw/AGwI0CvkxgWOjDiRH52ODAHj9S/HMgALTfJ+xrAmhOlZjgwB/EEILoDh5aBp3sWQMvJOPZIoTlwrFYBIhzPd48TrWeGA3MgTYAMjq6YFhlEzYF4JmrOGw6sg3vaPxxbPGujbw5grS/9eHkr9o2XriesCG652R1Ir++vh6sEubkUavWlfK56AJaKMI9eZh32Cq3Bo5dVekQvAbKWQBJEF0BMkzi5LHDOUcRoAHGeSABlkooAsGIQmV+O4Zkf3SfXr0HcXBshAcozNxJAPMc5GBF9CwBcf1ZvnZLoQhVg7Xg9ZyPfIwC4flmARQBqFfhf6K0Uzu9lAqyB01KS1TfWxrKqUAbYI4VlUihqMyk8mkFo3tLv08UzsBb0EsColneZXBBXkVoh4jlDSi+f0bcWUa0ALReqAFuCf6yOOv+ddOltQHb9yAI3o9UHfgNTe4UvlswUmgAAAABJRU5ErkJggg==';
        var twitter =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgElEQVQ4T2NkgIKOAwX/YWxi6AqHCYwgdWDiwY8LJGmGWaDAYcDICLI5wiKBGEsx1Kw4sYABqwEaCgFgxTcebMBr8BAwAN396F4i6AWKDRjJgQgKPFhiQg5IrLFgkBHwf8OEBrKSckBBAyQzkWMISPOFGRsYwQbADCHFGSDNIPUA+x901a90FC0AAAAASUVORK5CYII=';
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

        this.game.load.image('twitter', twitter);

        this.player = new CPlayer();
        this.player.init(song);

        var sine = [];
        for (var i=0; i<1000; i++) {
            sine[i] = 128+Math.round(127*Math.sin(i/5));
        }

        var sinWave = new RIFFWAVE(sine);

        var noise = [];
        for (i=0; i<1000; i++) {
            noise[i] = Math.round(128*Math.random());
        }

        var noiseWave = new RIFFWAVE(noise);

        this.game.CS.audio.touch = new Audio(sinWave.dataURI);
        this.game.CS.audio.crash = new Audio(noiseWave.dataURI);

        this.loading = this.game.add.retroFont('font', 8, 8, '1234567890ABCDEFGHIJKLMNOPQRSTUVWYXZ:!?');
        this.loading.text = "loading!";
        this.loader = this.game.add.image(this.game.world.centerX , this.game.world.centerY, this.loading);
        this.loader.anchor.setTo(0.5, 0.5);

    },

    create: function() {
        this.game.stage.backgroundColor = '#E0F8D0';
    },

    update: function() {

        this.ready = this.player.generate() >= 1;

        if (this.ready === true && this.loaded === false) {
            this.loaded = true;
            var wave = this.player.createWave();
            this.game.CS.audio.song = document.createElement("audio");
            this.game.CS.audio.song.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
            this.game.CS.audio.song.play();

			this.game.state.start('MainMenu');
		}

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
