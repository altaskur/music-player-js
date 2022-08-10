import { checkPlayList } from "../playList/playList.js";
import { changeUIInfo } from "../details/details.js";
import { getPlayList, getCurrentPlaylist, getCurrentSong, setCurrentSong, getPause, setPause } from "../../index.js";

function nextSong() {
    let currentSong = getCurrentSong();
    let playList = getCurrentPlaylist();

    if (currentSong >= 0 && currentSong < playList.length - 1) {
        currentSong++;
        setCurrentSong(currentSong);
        console.log("nex song", currentSong);
        playSong();
    } else {
        currentSong = 0;
        setCurrentSong(currentSong);
        console.log("nex song", currentSong);
        playSong();
    }
}

function previousSong() {
    let currentSong = getCurrentSong();
    let playList = getCurrentPlaylist();

    if (currentSong > 0 && currentSong < playList.length - 1) {
        currentSong--;
        setCurrentSong(currentSong);
        console.log("previousSong", currentSong);
        playSong();

    } else {
        currentSong = 0;
        setCurrentSong(currentSong);
        console.log("previousSong", currentSong);
        playSong();
    }
}

function pauseSong() {
    let audio = document.querySelector("audio");
    let playIcon = document.querySelector(".play-button").querySelector("i");
    playIcon.classList.remove("bi-pause");
    playIcon.classList.add("bi-play");
    setPause(true);
    audio.pause();
}

function createBlob(file) {
    return URL.createObjectURL(file);
}


function isPaused() {
    let audio = document.querySelector("audio");
    console.log("isPaused: " + audio.paused + " " + getPause());
    if (audio.paused || getPause()) {
        return true;
    } else {
        return false;
    }
}

function playSong() {
    console.log("playSong");
    let audio = document.querySelector("audio");
    let playIcon = document.querySelector(".play-button").querySelector("i");

    console.log("Loading song to src");

    console.log("is paused: " + isPaused());

    if (isPaused()) {
        console.log("Playing song: ", getCurrentPlaylist()[getCurrentSong()]);

        playIcon.classList.remove("bi-play");
        playIcon.classList.add("bi-pause");
        changeUIInfo(getPlayList()[0]);

        audio.src = createBlob(getCurrentPlaylist()[getCurrentSong()]);
        audio.play();
    } else {
        pauseSong();
    }

}


let playButton = document.querySelector(".play-button");
let playIcon = document.querySelector(".bi-play");

playButton.addEventListener("click", () => {

    if (checkPlayList(getPlayList())) {
        if (getPause()) {
            setPause(false);
        }
        playSong();
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


export { playSong, pauseSong, };