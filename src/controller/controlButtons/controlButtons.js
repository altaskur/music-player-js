import { addSongsToPlaylist } from "../file/file.js";
import { showCurrentPlaylist } from "../modal/modal.js";

function changeAudioVolume(volume = 50) {
    volume = (volume / 100);
    console.log("Volume set to: " + volume * 100 + "%");

    let audio = document.querySelector("audio");
    let audioBar = document.querySelector(".volume-bar");

    audio.volume = volume;
    audioBar.value = volume * 100;
}


// Control buttons
let addSongBtn = document.querySelector(".bi-plus-circle");

addSongBtn.addEventListener("click", () => {
    addSongsToPlaylist();

});

// PlayList
let playListBtn = document.querySelector(".bi-soundwave");
playListBtn.addEventListener("click", () => {
    showCurrentPlaylist();
});

// volume Button
let volumeBtn = document.querySelector(".bi-volume-down");

volumeBtn.addEventListener("click", () => {
    let audio = document.querySelector("audio");
    let audioBar = document.querySelector(".volume-bar");

    if (audio.muted) {
        audio.muted = false;
        volumeBtn.classList.remove("bi-volume-mute");
        volumeBtn.classList.add("bi-volume-down");
        audioBar.disabled = false;
        console.log("Volume unmuted");
    } else {
        audio.muted = true;

        volumeBtn.classList.remove("bi-volume-down");
        volumeBtn.classList.add("bi-volume-mute");
        audioBar.disabled = true;
        console.log("Volume muted");
    }
});

// max volume button
document.querySelector(".bi-volume-up").addEventListener("click", () => {
    changeAudioVolume(100);
});

// volume bar
let volumeBar = document.querySelector(".volume-bar");
volumeBar.addEventListener("change", () => {
    changeAudioVolume(volumeBar.value);
});




export { changeAudioVolume, };