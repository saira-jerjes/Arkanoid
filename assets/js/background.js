class Background {
    constructor(ctx) {
      this.ctx = ctx;  
      this.x = 0;
      this.y = 0;
      this.w = this.ctx.canvas.width;  
      this.h = this.ctx.canvas.height; 
      
      this.img = new Image();
      this.img.src = "/assets/imgs/level2.webp";
     }
  
  
    draw() {  
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Negro con 50% de opacidad
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
    } 
}