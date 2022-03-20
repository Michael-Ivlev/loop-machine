# Loop machine

### Technical Details:
The application was developed as a **React** JS app.
Languages used javaScript, CSS.
The channels in the list are built based on the array that is passed to it, making it
future-proof for changes and allowing to add or delete channels easily.
All user interactions in the app via the toggle switches are using useState and change
dynamically. The `channel.js` was built with javascript class and used to manipulate
`HTMLAudioElements` based on user interaction. The range input slider moves based
on the channel's `currentTime` every 1 ms. The app UI is **responsive** for all screen sizes

### Application Details:
The client can interact with the loop machine.
In the app, you can see 8 channels, each channel has audio in it which it represents.
The vertical slider shows the current playing position.
The user can `mute/unmute` each channel.
At the bottom we have 3 buttons: `Play` - plays the music, `Stop` - stops the music and
returns slider to 0, `Loop` - which toggles the loop option.

🚀Deployed app website: https://michael-ivlev.github.io/loop-machine
