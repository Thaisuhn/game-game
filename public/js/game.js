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

	player = this.physics.add.sprite(100, 450, "dude");
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);

	this.anims.create({
		key:"left",
		frames: this.anims.generateFrameNumbers("dude",{start:0,end:3}),
		frameRate: 10,
		repeat: -1
	});


	this.anims.create({
		key: "turn",
		frames: [{key:"dude",frame:4}],
		framesRate: 20
	});

	this.anims.create({
		key: "right",
		frames: this.anims.generateFrameNumbers("dude",{start:5,end:8}),
		frameRate: 10,
		repeat: -1
	});

	this.physics.add.collider(player,platforms);

}

function update(){
	
	let cursors = this.input.keyboard.createCursorKeys();
	if(cursors.left.isDown){
		player.setVelocityX(-160);
		player.anims.play("left",true);
	}else if(cursors.right.isDown){
		player.setVelocityX(160);
		player.anims.play("right",true);
	}else{
		player.setVelocityX(0);
		player.anims.play("turn");
	}

	if(cursors.up.isDown && player.body.touching.down){
		player.setVelocityY(-330);
	}
}
