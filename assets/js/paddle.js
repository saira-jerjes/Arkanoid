class Paddle {
  constructor(ctx) {
    this.ctx = ctx;
   
    this.w = PADDLE_MEASURES.width
    this.h = PADDLE_MEASURES.height
    this.x = (ctx.canvas.width - this.w) / 2;
    this.y = ctx.canvas.height - this.h;
    this.vx = 0;

    this.img = new Image();
    this.img.src = "/assets/imgs/pincel.png";
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;
    //Canvas Limit
    if (this.x + this.w > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }
    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }
  }

}
