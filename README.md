# Dropsomething

My [gbjam3](http://jams.gamejolt.io/gbjam3) entry: http://gamejolt.com/games/platformer/dropsomething/31337/

Implemented using [Phaser](http://phaser.io)

Music composed (by me) using [Soundbox](sb.bitsnbites.eu) and added as plain javascript (song.js) and using their javascript "player".

Graphics made by me, using [Piskel](http://www.piskelapp.com/), build as a node-webkit app. Graphics are imported using data-urls.

Everything is being loaded as plain javascript. No external assets.

## build instructions

You need [Grunt](http://gruntjs.com/). Just read at their page how to install if not already done.

run `npm install`

Build a debug version using: `grunt` (default task) - It will also fire up a static server and uses live-reload.

Build a distribution version using: `grunt build` - The distribution is located in `game/`
