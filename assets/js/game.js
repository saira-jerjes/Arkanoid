class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Background(ctx);
    this.ball = new Ball(
      ctx,
      600 - BALL_CONFIG.width / 2,
      ctx.canvas.height - PADDLE_MEASURES.height - BALL_CONFIG.height - 1
    );
    this.paddle = new Paddle(ctx);
    this.bricks = [];
    this.score = 0;
    this.addBricks();
    this.bricksDestroyed = 0;
    this.started = false;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();
      this.clearBricks();
      this.win();
      this.drawScore();
    }, 1000 / 60);
  }

  pause() {
    clearInterval(this.intervalId); // Detener el bucle de actualización
    this.intervalId = null;
  }

  checkCollisions() {
    if (this.started) {
      if (this.ball.checkCollisions(this.paddle)) {
        this.ball.vy *= -1;
      }
      this.bricks.forEach((brick) => {
        if (this.ball.checkCollisions(brick)) {
          brick.isAlive = false;
          this.ball.vy *= -1;
          this.score += 10;
          this.bricksDestroyed += 1;
          if (this.bricksDestroyed < 20) {
            if (this.bricksDestroyed % 2 === 0) {
              this.ball.vx *= 1.1;
              this.ball.vy *= 1.1;
              this.paddle.vx *= 1.1;
            }
          }
        }
      });
    }
    if (this.ball.y + this.ball.h >= this.ctx.canvas.height) {
      this.lose();
    }
  }

  drawScore() {
    this.ctx.font = "25px Calibri";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${this.score}`, 10, 20);
  }

  gameOver() {
    window.location.reload();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  clearBricks() {
    this.bricks = this.bricks.filter((brick) => brick.isAlive);
  }

  draw() {
    this.background.draw();
    this.ball.draw();
    this.paddle.draw();
    this.bricks.forEach((brick) => {
      brick.draw();
    });
  }

  move() {
    this.paddle.move();
    this.ball.move();
  }

  win() {
    if (this.bricks.length === 0) {
      const winModal = document.getElementById("winModal");
      const pauseButton = document.getElementById("pauseMusic");
      this.clear();
      this.stopSound();
      if (winModal) {
        winModal.style.display = "block";
        const scoreElement = document.getElementById("scoreDisplay");
        if (scoreElement) {
          scoreElement.textContent = `Your final score: ${this.score}`; // Muestra la puntuación final
        }
        pauseButton.style.display = "none";
      }
    }
  }
  lose() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.clear();
    this.stopSound();

    const loseModal = document.getElementById("loseModal");
    const pauseButton = document.getElementById("pauseMusic");
    
    if (loseModal) {
      loseModal.style.display = "block";
      const scoreElement = document.getElementById("loseScoreDisplay");
      if (scoreElement) {
         console.log(`${this.score}`)
        scoreElement.textContent = `Your final score: ${this.score}`;

      }
      pauseButton.style.display = "none";
    }
  }


  addBricks() {
    for (
      let y = BRICKS_CONFIGURATIONS.air;
      y < BRICK_CONFIG.height * 10;
      y += BRICK_CONFIG.height
    ) {
      for (
        let x = BRICKS_CONFIGURATIONS.air;
        x < this.ctx.canvas.width - BRICKS_CONFIGURATIONS.air;
        x += BRICK_CONFIG.width
      ) {
        this.bricks.push(
          new Brick(this.ctx, x, y, BRICKS_CONFIGURATIONS.colors[x] ?? "white")
        );
      }
    }
  }

  onKeyDown(keyCode) {
    switch (keyCode) {
      case KEY_LEFT:
        this.paddle.vx = -12;
        if (!this.started) this.ball.vx = -12;
        break;
      case KEY_RIGHT:
        this.paddle.vx = 12;
        if (!this.started) this.ball.vx = 12;
        break;

      case KEY_SPACE:
        if (this.started) break;
        this.ball.vy = -4;
        this.ball.vx = 4;
        this.started = true;
        break;
      default:
        break;
    }
  }

  onKeyUp(keyCode) {
    switch (keyCode) {
      case KEY_LEFT:
      case KEY_RIGHT:
        this.paddle.vx = 0;
        if (!this.started) this.ball.vx = 0;
        break;
      default:
        break;
    }
  }

  
}
