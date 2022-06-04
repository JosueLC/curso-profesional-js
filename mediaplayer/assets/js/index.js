import MediaPlayer from "./mediaplayer.js";
import AutoPlay from "./plugins/autoplay.js";

const video = document.querySelector('.movie');
const play_btn = document.querySelector('#play');
const mute_btn = document.querySelector('#mute');


const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay(false)
]});

play_btn.onclick = () => player.togglePlay();
mute_btn.onclick = () => player.toggleMute();