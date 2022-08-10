import { checkPlayList, shuffling } from "../playList/playList.js";
import { changeUIInfo } from "../details/details.js";
import { loadToSrc } from "../controlButtons/controlButtons.js";

import { getPlayList, 
    getCurrentPlaylist, 
    getCurrentSong, 
    setCurrentSong, 
    getPause, 
    setPause, 
    getRepeat,
    setRepeat,
    getRepeatOne,
    setRepeatOne,
    setPlayOnLoad
} from "../../index.js";
import { playlistLiStyleReset } from "../modal/modal.js";
import { addSongsToPlaylist } from "../file/file.js";



function nextSong() {
    let currentSong = getCurrentSong();
    let playList = getCurrentPlaylist();
    currentSong++;

    if (currentSong >= 0 && currentSong <= playList.length - 1) {
        setCurrentSong(currentSong);
    } if (currentSong >= playList.length ) {
        currentSong = 0;
        setCurrentSong(currentSong);
    }

    console.log("nex song", currentSong);
    setPause(true);
    playSong();

}

function previousSong() {
    let currentSong = getCurrentSong();
    let playList = getCurrentPlaylist();
    currentSong--;
    if (currentSong >= 0 && currentSong <= playList.length ) {

        setCurrentSong(currentSong);

    } if (currentSong <= 0) {
        currentSong = playList.length - 1;
        setCurrentSong(currentSong);
    }

    console.log("previousSong", currentSong);
    setPause(true);
    playSong();
}

function pauseSong() {
    let audio = document.querySelector("audio");
    let playIcon = document.querySelector(".play-button").querySelector("i");
    playIcon.classList.remove("bi-pause");
    playIcon.classList.add("bi-play");
    setPause(true);
    audio.pause();
}

function playSong() {
    
    console.log("playSong");
    let audio = document.querySelector("audio");
    let playIcon = document.querySelector(".play-button").querySelector("i");

    console.log("is paused: " + getPause());

    if (getPause()) {
        console.log("Playing song: ", getCurrentPlaylist()[getCurrentSong()]);

        playIcon.classList.remove("bi-play");
        playIcon.classList.add("bi-pause");

        changeUIInfo(getPlayList()[getCurrentSong()]);

        playlistLiStyleReset();

        loadToSrc(getCurrentPlaylist()[getCurrentSong()]);
        audio.play();

        setPause(false);

    } else {
        console.log("Pausing song: ", getCurrentPlaylist()[getCurrentSong()]);
        pauseSong();
    }

}


let playButton = document.querySelector(".play-button");

playButton.addEventListener("click", () => {

    if (checkPlayList(getPlayList())) {
        playSong();
    } else {
        console.log("No hay canciones en la lista");
        addSongsToPlaylist();
        setPlayOnLoad(true);
    }

});

let nextButton = document.querySelector(".bi-skip-start");
nextButton.addEventListener("click", () => {
    if (checkPlayList(getPlayList())) {
        previousSong();
    }
});

let previousButton = document.querySelector(".bi-skip-end");
previousButton.addEventListener("click", () => {
    if (checkPlayList(getPlayList())) {
        nextSong();
    }
});

document.querySelector(".bi-shuffle").addEventListener("click" , () => {
    shuffling();
});


let audio = document.querySelector("audio");

audio.addEventListener("ended", () => {
    console.warn("Song ended");

    let repeat = getRepeat();
    let repeatOne = getRepeatOne();
 
    if (repeatOne) {
        console.log("repeatOne");
        playSong();
    } else if (repeat) {
        nextSong();
    }
});


audio.addEventListener("timeupdate", function (event) {

    let currentProgress = (event.target.currentTime / event.target.duration) ;


    let currentProgressBar  = document.querySelector(".current-progress-bar");
    currentProgressBar.disabled = false;
    currentProgressBar.value = currentProgress;

    let timeSpan = document.querySelectorAll(".time");
    let currentTimeText = timeSpan[0];
    let durationTimeText = timeSpan[1];

    // pass current time in minutes
    let minutes = Math.floor(event.target.currentTime / 60);
    let seconds = Math.floor(event.target.currentTime - minutes * 60);
    let format = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    currentTimeText.textContent = format;

    // pass duration time in minutes
    minutes = Math.floor(event.target.duration / 60);
    seconds = Math.floor(event.target.duration - minutes * 60);
    format = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    
    if (format != "NaN:NaN") {
        durationTimeText.textContent = format;
    }

});

document.querySelector(".media-control").querySelectorAll("i")[4].addEventListener("click", (event) => {

    let repeatButton = event.target;
    let repeat = getRepeat();
    let repeatOne = getRepeatOne();

    if (repeat) {
        setRepeat(false);
        setRepeatOne(true);
        repeatButton.classList.remove("bi-repeat");
        repeatButton.classList.add("bi-repeat-1");
    } else if (repeatOne) {
        setRepeatOne(false);
        setRepeat(false);
        repeatButton.classList.remove("bi-repeat-1");
        repeatButton.classList.add("bi-repeat");
        repeatButton.classList.remove("ux-active");
        repeatButton.classList.add("ux-inactive");
    }  else {
        setRepeat(true);
        repeatButton.classList.remove("ux-inactive");
        repeatButton.classList.add("ux-active");
    }

    console.log("repeat: " + getRepeat());
    console.log("repeatOne: " + getRepeatOne());

});


let currentProgressBar = document.querySelector(".current-progress-bar");
// cuando cambie el valor del input
currentProgressBar.addEventListener("input", (event) => {
    let audio = document.querySelector("audio");
    audio.currentTime = event.target.value * audio.duration;
});

export { playSong, pauseSong, };