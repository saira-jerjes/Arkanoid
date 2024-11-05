document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  const game = new Game(ctx);

  const startScreen = document.getElementById("startscreen");
  const button = document.getElementById("start-button");
  const pauseButton = document.getElementById("pauseMusic");
  const mutedNote = pauseButton.querySelector(".muted-note");
  const winModal = document.getElementById("winModal");
  const loseModal = document.getElementById("loseModal");
  const audio = new Audio("/assets/music/claire_de_lune.mp3");
  audio.volume = 0.05;

  winModal.style.display = "none";
  loseModal.style.display = "none";
  pauseButton.style.display = "none";

  button.addEventListener("click", () => {
    if (game.started === false) {
      game.start();
      startScreen.classList.add("hidden");
      setTimeout(() => {
        startScreen.style.display = "none";
      }, 200);
      audio.play();
      pauseButton.style.display = "block";
    } else {
      game.paused();
    }
  });

  pauseButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      mutedNote.classList.remove("paused");
    } else {
      audio.pause();
      mutedNote.classList.add("paused");
    }
  });

  game.stopSound = function () {
    if (!audio.paused) audio.pause();
  };

  game.playSound = function () {
    if (!audio.paused) audio.play();
  };
  
  document.addEventListener("keydown", (event) => {
    game.onKeyDown(event.keyCode);
  });

  document.addEventListener("keyup", (event) => {
    game.onKeyUp(event.keyCode);
  });
});
