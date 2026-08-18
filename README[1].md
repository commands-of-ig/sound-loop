# My Sound Loop — Free Version

This version does NOT use Firebase Storage, a database, or paid services.

Your uploaded sound is already included in:

    audio/my-sound.ogg

## Test it locally

Open a terminal in this folder and run:

    python -m http.server 8000

Then open:

    http://localhost:8000

## Put it online for free with GitHub Pages

1. Create a GitHub account if you do not have one.
2. Create a new public repository.
3. Upload:
   - index.html
   - style.css
   - script.js
   - the `audio` folder
4. In the repository, open Settings → Pages.
5. Under "Build and deployment", choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. Save.
7. GitHub will give you a URL ending in `github.io`.

Send that URL to other people.

## Important browser behavior

The audio is configured with `loop`, so after the visitor starts it,
it repeats continuously.

Modern browsers generally block audible autoplay without user interaction.
Therefore the visitor normally has to press "Start Sound" once.

## Changing the sound later

Replace:

    audio/my-sound.ogg

with another supported audio file and update the `src` in `index.html`
if you change its filename.
