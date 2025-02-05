export default class Bullet {
	constructor(args) {
		this.positionX = args.guy.positionX;
		this.positionY = args.guy.positionY;
	}
	
	render(state) {
		const ctx = state.context;
		const ctx2 = state.context2;
		
		if (this.positionX >= ctx2.canvas.width) {
			this.delete = true;
			return
		}

		const ratioX = ctx.canvas.width / ctx2.canvas.width
		const ratioY = ctx.canvas.height / ctx2.canvas.height

		ctx.save();
		ctx.beginPath();
		ctx.arc((this.positionX * ratioX) + 100, (this.positionY * ratioY) + 50, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.lineWidth=5;
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	
}