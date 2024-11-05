class Brick {
    constructor(ctx, x, y, color) {
        this.ctx = ctx;

        this.w = BRICK_CONFIG.width;
        this.h = BRICK_CONFIG.height;
  
        this.x = x;
        this.y = y;

        this.color = color;

        this.isAlive = true;
    }


    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.shadowColor = "black";
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.fillRect(this.x + 1, this.y + 1, this.w - 4, this.h - 4);
        this.ctx.shadowColor = "transparent";
        this.ctx.shadowBlur = 0;
        this.ctx.restore();
    }

    
}