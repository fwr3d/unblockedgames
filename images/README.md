# Images Folder

## How to add your football player image:

1. Save your pixel art football player image as `football-player.png`
2. Place it in this `images/` folder
3. The image should be approximately 80x80 pixels for best results
4. Supported formats: PNG, JPG, GIF, SVG

## Current setup:
- Retro Bowl game is configured to use `images/football-player.png`
- The image will be displayed at 80x80 pixels with proper scaling
- If the image doesn't exist, the game will fall back to the emoji icon

## Adding more image icons:
To use images for other games, simply:
1. Add the image file to this folder
2. Update the game's `icon` property in `script.js` to use the image path (e.g., `"images/your-image.png"`)
3. The system will automatically detect it's an image and display it properly
