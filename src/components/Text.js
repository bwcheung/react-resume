export default class Text {
	constructor(args) {
		this.positionX = args.positionX;
		this.positionY = args.enemy.position;
		this.string = args.string;
		this.colour = args.colour;
	}
	
	
	render(state) {
		
		if (this.positionX <= 0) {
			this.delete = true;
		}

		const context = state.context;
		context.save();
		
		context.font = "bold 30pt Calibri";
		context.fillStyle = this.colour;
		context.textAlign = "center";
		context.textBaseline = "middle";
		
		context.fillText(this.string, this.positionX, this.positionY+150);
	
		context.restore();
	}
}




