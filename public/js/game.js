// Setting the intial configuration for the game
let config = {
	type: Phaser.AUTO,
	// set width of canvas
	width: 800,
	// set height of canvas
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: {y: 300},
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

// initilies the game with the configuration above
let game = new Phaser.Game(config);
// create preload function
function preload(){
	// loads all assets and configurations before game begins
	this.load.image("sky","assets/sky.png");
	this.load.image("ground","assets/platform.png");
	this.load.image("star","assets/star.png");
	this.load.image("bomb","assets/bomb.png");
	this.load.spritesheet("dude","assets/dude.png", {frameWidth:32, frameHeight: 48})
}

function create(){
	// must be put in display order
	this.add.image(400,300,"sky");
	let platforms = this.physics.add.staticGroup();
	platforms.create(400,568,"ground").setScale(2).refreshBody();

	platforms.create(600, 400, "ground");
	platforms.create(50, 250, "ground");
	platforms.create(750, 220, "ground");
}

function update(){

}
