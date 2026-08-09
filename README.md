# 🎀 Interactive 7th Birthday Invitation

A mobile-friendly interactive birthday invitation made with HTML, CSS, and JavaScript.

## Features

- Animated envelope opening
- Confetti
- Floating balloons
- Countdown timer
- Event details
- Google Maps button
- Photo gallery placeholders
- RSVP form compatible with Netlify Forms
- Optional background music
- Responsive/mobile-friendly layout

## Files

- `index.html` — page content and structure
- `style.css` — design, colors, layout, animations
- `script.js` — interactions, confetti, countdown, music
- `.gitignore` — common files to ignore

## Edit the invitation

You can edit the files directly in GitHub:

- Open `index.html` for names, text, date, venue, photos, and links.
- Open `style.css` for colors, fonts, spacing, and visual design.
- Open `script.js` for the countdown date and interactive behavior.

For larger edits, use VS Code and push your changes to GitHub.

## GitHub Pages

To publish this directly from GitHub:

1. Create a new GitHub repository.
2. Upload all files in this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.

GitHub will provide a public `github.io` URL.

## Netlify + GitHub

For the RSVP form to work through Netlify Forms:

1. Create the GitHub repository and upload these files.
2. In Netlify, choose **Add new project/site → Import an existing project**.
3. Connect GitHub and select this repository.
4. Deploy the site.
5. Netlify will automatically redeploy whenever you push changes to GitHub.

## Music

Browsers normally block automatic audio playback. Add your own `music.mp3` file and uncomment the audio source in `index.html`. Guests can then tap the music button to start/pause it.

## Photos

Replace the photo placeholders in `index.html` with your own images, and upload the image files to the repository.

Example:

```html
<img src="photo1.jpg" alt="Birthday photo">
```
