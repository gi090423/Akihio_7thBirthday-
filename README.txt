# Interactive 7th Birthday Invitation — Netlify

This is a ready-to-deploy static birthday invitation.

## Included
- Tap/click envelope opening animation
- Confetti celebration
- Responsive mobile layout
- Countdown timer
- Event details
- Google Maps button
- Photo placeholders
- RSVP form using Netlify Forms
- Optional background music

## Customize
Open `index.html` and replace:
- `[CHILD'S NAME]`
- `[VENUE NAME]`
- `[ADDRESS]`
- `[DRESS CODE]`
- Date/time text
- Google Maps link

Then open `script.js` and change the `eventDate` to the actual party date/time.

### Photos
Replace each `YOUR PHOTO` block in `index.html` with an image, for example:
`<img src="photo1.jpg" alt="Birthday photo">`

Put the image files in the same folder.

### Music
Add an MP3 file named `music.mp3` to this folder. In `index.html`, find the commented `<source>` line and uncomment it:
`<source src="music.mp3" type="audio/mpeg">`

Note: browsers usually block autoplay. The guest needs to tap the music button to start the song.

## Deploy to Netlify
1. Create/sign in to a Netlify account.
2. Choose **Add new project / site** and the option to deploy manually.
3. Drag the entire `birthday_invitation_netlify` folder into the upload area (or upload the ZIP after extracting it).
4. Netlify will publish the site and give you a shareable `netlify.app` link.
5. The RSVP form will appear in Netlify's Forms area after the site receives a submission.

No paid hosting is required for this basic static invitation.
