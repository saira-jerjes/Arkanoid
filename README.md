# Arkanoid
This project is a **Arkanoid** built with HTML, CSS, and JavaScript. It draws inspiration of the classic 80s arcade name with the same name, which was inspired by the Atari's "Breakout".

## How to Play
- Use **Left and Rith arrow Keys** to control the paddle.
- Press **Space** to shoot the ball towards the bricks.
- **Break all the bricks** to win!
- **Enjoy the work of art** that's used as a background. 


## Game Features

### Level Progression and Ball Speed
- The game starts with the ball on top of a paddle. As you keep on destroying bricks, the ball and paddle speed will increase until you break 20 bricks.

### Score 
- **Score System**: Players will earn points based on how many bricks are destroyed.

### Main Menu and Music
- **Start Screen**: A main menu will be added, allowing players to start the game from a welcome screen.
- **Menu Music**: Background music will play on the gameplay screen to enhance the game atmosphere, with a button that'll allow them to stop the music if necessary.

## Code Structure

### Core Components
1. **`Game`**: Manages the overall gameplay. 
2. **`Index`**: Manages the spawn of the 
3. **`Ball`**: Handles the ball.
4. **`Paddle`**:Handles.
5. **`Background`**: Manages the background.
6. **`Constants`**: Holds constants like the number of bricks, its colors, the measures of the paddle and the ball.

### Files
- **HTML**: Defines the game layout and some modals.
- **CSS**: Provides basic styling for the game.
- **JavaScript Files**:
  - `game.js`: Contains core game mechanics, including level progression and collision detection.
  - `ball.js`: Manages the ball’s movement, speed, and collision detection.
  - `paddle.js`: Handles paddle movement and collision with the ball.
  - `background.js`: Manages the background and visual effects.
  - `index.js`: Initializes the game, sets up event listeners, and manages music controls.
  - `constants.js`: Stores key codes and configurations like paddle, ball, and brick settings.
