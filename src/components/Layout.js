import React from "react";

import Clouds from "./Clouds";
import sprite from "./Guy";
import enemy from "./Enemy";

const KEY = {
		A: 65,
		D: 68,
		W: 87,
		S: 83,
		SPACE: 32,
		ESC: 27,
};

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
				screen: {
					width: window.innerWidth,
					height: window.innerHeight,
					ratio: window.devicePixelRatio || 1,
				},
				context: null,
				context2: null,
				gameStart: false,
				endGame: false,
				keys: {
					left: 0,
					right: 0,
					up: 0,
					down: 0,
					space:0,
					esc: 0,
				},
		};
		this.bullets = [];
		this.clouds = [];
		this.texts = [];
		this.frameIndex = 0;
		this.guy = null;
		this.enemy =  null;
		this.menu = true;
	}
	
	handlekeys(value, e) {
		let keys = this.state.keys;
		
        switch(e.keyCode) {
        	case KEY.A:
        		keys.left = value; break;
            
        	case KEY.D:
        		keys.right = value; break;
            
        	case KEY.W:
        		keys.up = value; break;
        	
        	case KEY.S:
        		keys.down = value; break;
            
        	case KEY.SPACE:
        		keys.space = value; break;
        		
        	case KEY.ESC:
        		keys.esc = value; break;
        		
        	 default:
				break
        }
        
        this.setState({ keys:keys });
	}
	
	hanleTouchStart(evt) {
		let keys = this.state.keys;
		keys.space = true;
		this.setState( { 
			keys:keys, 
			guyPos: {
				x: this.guy.positionX,
				y: this.guy.positionY
			},
			originalMousePos: {
				x: evt.touches[0].clientX,
				y: evt.touches[0].clientY
			}
		})
	}

	handleTouchMove(evt){
		if(!this.state.originalMousePos || !this.state.originalMousePos.x){
			return
		}
		this.setState( {
			guyMove: {
				x: evt.touches[0].clientX - this.state.originalMousePos.x,
				y: evt.touches[0].clientY - this.state.originalMousePos.y
			}
		})
	}
	
	hanleTouchEnd(evt) {
		let keys = this.state.keys;
		keys.space = false;
		this.setState( { keys:keys, guyPos: null, originalMousePos: null , guyMove: null})
	}
	
	
	componentDidMount() {
		window.addEventListener('keyup', this.handlekeys.bind(this, false));
		window.addEventListener('keydown', this.handlekeys.bind(this, true));
		window.addEventListener('resize',  this.handleResize.bind(this, false));
		
		const ctx = this.refs.canvas.getContext("2d");
		const ctx2 = this.refs.canvas2.getContext("2d");
		document.getElementById("app").classList.add("game")

		
		window.addEventListener('touchstart', this.hanleTouchStart.bind(this), false);
		window.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
		window.addEventListener('touchend', this.hanleTouchEnd.bind(this), false);
		
		this.initialize();	
		this.setState({context2:ctx2});
		this.setState({context: ctx}, () => {
			this.gameLoop();
		});
	}
	
	
	componentDidUpdate() {
		this.guy.render(this.state);
	}
	

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handlekeys);
		window.removeEventListener('keydown', this.handlekeys);
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('touchstart', this.hanleTouchStart);
		window.removeEventListener('touchend', this.hanleTouchEnd);
		window.removeEventListener('touchmove', this.hanleTouchEnd);
		document.getElementById("app").classList.remove("game")
	}
	
	handleResize(value, e){
	    this.setState({
	      screen : {
	        width: window.innerWidth,
	        height: window.innerHeight,
	        ratio: window.devicePixelRatio || 1,
	      },
	    });
	  }
	
	initialize() {
		
		this.guy = new sprite({
			positionX: 10,
			positionY: 10,
			frameIndex: 0,
			width: 520,
			height: 300,
			image: "https://raw.githubusercontent.com/bwcheung/ResumeGameProj/master/src/images/Piskel.png",
			numberOfFrames: 2,
			ticksPerFrame: 2,
			bullets: this.addBullet.bind(this),
		});
		
		this.enemy = new enemy({
			positionY: 10,
			moveDown: true,
			texts: this.addText.bind(this),
			health: 5,
		});
		
	}

	gameLoop() {
		if (this.state.gameStart) {
			requestAnimationFrame(() => {this.gameLoop()});
		}
		
		if (this.enemy.health <= 0) {
			this.setState({endGame: true});
		}
	
		const ctx = this.state.context;
		
		ctx.save();
		ctx.scale(this.state.screen.ratio, this.state.screen.ratio);
		ctx.canvas.width = this.state.screen.width;
		ctx.canvas.height = this.state.screen.height;
		
		const my_gradient=ctx.createLinearGradient(150,0,150,this.state.screen.height);
		
		my_gradient.addColorStop(0.000, 'rgba(5, 121, 175, 1.000)');
		my_gradient.addColorStop(0.554, 'rgba(70, 207, 244, 1.000)');
		ctx.fillStyle = my_gradient;
		ctx.fillRect(0,0,this.state.screen.width,this.state.screen.height);
		
		if (this.state.keys.esc) {
			this.menu = true;
			this.setState({gameStart: false})
		}
		
		if (this.clouds.length < 4) {
			this.createClouds();
		}
		
		if (this.enemy.positionY >= this.state.screen.height-200) {
			this.enemy.moveDown = false;
		} else if (this.enemy.positionY <= 0) {
			this.enemy.moveDown = true;
		}
		
		this.update();
		ctx.restore();	
	}
	
	update() {
		this.enemy.render(this.state);
		this.updateTexts(this.texts);
		this.checkHit();
		this.updateBullets(this.bullets);
		this.updateClouds(this.clouds);
	}
	
	checkHit() {
		for (let x of this.bullets) {
			const bulletX = x.positionX * this.state.ratioX
			const bulletY = x.positionY * this.state.ratioY
			if ((bulletX >= this.state.screen.width-400) &&
				(bulletX <= this.state.screen.width-300) &&
				(bulletY >= this.enemy.positionY) && 
				(bulletY <= this.enemy.positionY+200)) {
				x.delete = true;
				this.enemy.health -= 1;
			}
		}
		if (!this.state.endGame) {
			for (let x of this.texts) {
				if ((x.positionX <= this.guy.positionX+200) && 
					(x.positionY >= this.guy.positionY-90) &&
					(x.positionY <= this.guy.positionY+30) &&
					(x.positionX >= this.guy.positionX-40)) {
						x.delete = true;
						this.guy.gotHit += 1;
				}
			}
		}
	}
	
	createClouds() {
		var min = this.state.screen.width-300
		const cloud = new Clouds({
			positionX: Math.random() * (this.state.screen.width - min) + min,
			positionY: Math.random() * (20 - 1) + 1,
			speed: Math.random() * (5 - 2) + 2,
		});
		this.clouds.push(cloud);
	}
	
	updateTexts(texts) {
		let index = 0;
		for (let x of texts) {
			if (x.delete) {
				this.texts.splice(index,1);
			} else {
				x.render(this.state);
				x.positionX = x.positionX - 5;
			}
			index++;
		}
	}
	
	
	updateClouds(clouds) {
		let index = 0;
		for (let x of clouds) {
			if (x.delete) {
				this.clouds.splice(index,1);
			} else {
				x.render(this.state);
				x.positionX = x.positionX - x.speed;
			}
			index++;
		}
	}
	
	addBullet(bullet) {
		this.bullets.push(bullet);
	}
	
	addText(text) {
		this.texts.push(text);
	}
	
	updateBullets(bullets) {
		let index = 0;
		for (let x of bullets) {
			if (x.delete) {
				this.bullets.splice(index,1);
			} else {
				x.render(this.state);
				x.positionX = x.positionX + 20;
			}
			index++;
		}
	}
	
	startGame () {
		this.menu = false;
		this.setState({gameStart: true}, () => {
			this.gameLoop();
		});
		const canvasWidth2 = this.state.context2.canvas.width
		const canvasWidth = this.state.context.canvas.width

		const canvasHeight2 = this.state.context2.canvas.height
		const canvasHeight = this.state.context.canvas.height

		this.state.ratioX = canvasWidth / canvasWidth2
		this.state.ratioY = canvasHeight / canvasHeight2
	}

	handleClick(e){
		if(e.currentTarget.value === "play"){
			window.location.reload()
		}else if(e.currentTarget.value === "home"){
			window.location.href = "/"
		}
	}
	
	render(){
		let menuText;
		let endGame;
		if (this.menu) {
			menuText = (<div id = "Menu">
						<div className = "Menu"> Hi! My name is Brandon Cheung and welcome to my interactive resume!</div>
						<div className = "Menu"> Visit my 
						<a href="https://github.com/bwcheung/ResumeGameProj"target="_blank" rel="noopener noreferrer">github</a> 
						for more information.</div>
						<button onClick = {this.startGame.bind(this)}>Start Game</button>
		     			</div>)
		}
		
		if (this.state.endGame) {
			endGame = (<div id = "Menu">
					   	<div className = "Menu">Congratulations!! You have defeated my Resume. Thank you for playing my game!  </div>
					   	<div className = "Menu">You got hit {this.guy.gotHit} times. Try to get hit less next time!</div>
						<div class="game-btns">
							<button onClick = {this.handleClick} value="play">Play Again</button>
							<button onClick = {this.handleClick} value="home" >Back</button>
						</div>
					   </div>)
		}
		
	    return (
	     <div id="resume-game">
	     	<canvas ref="canvas" id = "background"
	     		width = {this.state.screen.width * this.state.screen.ratio}
	     		height = {this.state.screen.height * this.state.screen.ratio} 	 
	    	 	/>
	     	<canvas ref = "canvas2" id = "player"
	     		width = {this.state.screen.width * this.state.screen.ratio}
	 	 		height = {this.state.screen.height * this.state.screen.ratio}
		 		/>
	     	{menuText}
	     	{endGame}
	     	<div id = "Instructions">
	     		<p className = "Instructs"> Use [W][A][S][D] to move and [SPACE] to shoot </p>
	     	</div>
	      </div>
	    );
	}
}
