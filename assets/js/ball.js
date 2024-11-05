class Ball {
  constructor(ctx, x, y) {
    this.ctx = ctx;

    this.w = BALL_CONFIG.width;
    this.h = BALL_CONFIG.height;

    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src = "/assets/imgs/circle.png";
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Negro con 50% de opacidad
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.w > this.ctx.canvas.width || this.x <= 0) {
      this.vx *= -1;
    }

    if (this.y <= 0) {
      this.vy *= -1;
    }
  }

  checkCollisions(object) {
    
    return this.x + this.w >= object.x &&
			this.x <= object.x + object.w &&
			this.y <= object.y + object.h && 
			this.y + this.h >= object.y;

  }
}
