import { checkPlayList } from "../playList/playList.js";
import { changeUIInfo } from "../details/details.js";
import { getPlayList, getCurrentPlaylist, getCurrentSong, setCurrentSong } from "../../index.js";

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
    audio.pause();
}

function createBlob(file) {
    return URL.createObjectURL(file);
}

function checkAudioSrc() {

    let audio = document.querySelector("audio");
    //console.log(audio.src)
    if (audio.src) {
        return false;
    } else {
        return true;
    }
}

function isPaused() {
    let audio = document.querySelector("audio");
    if (audio.paused) {
        return true;
    } else {
        return false;
    }
}

function playSong() {
    console.log("playSong");
    let audio = document.querySelector("audio");
    let playIcon = document.querySelector(".play-button").querySelector("i");
    console.log("are song in src: " + checkAudioSrc());
    if (checkAudioSrc()) {

        console.log("is paused: " + isPaused());
        if (isPaused()) {
            playIcon.classList.remove("bi-play");
            playIcon.classList.add("bi-pause");
            audio.play();

        } else {
            playIcon.classList.remove("bi-pause");
            playIcon.classList.add("bi-play");
            audio.pause();
        }

    } else {
        console.log("Loading song to src");

        console.log("is paused: " + isPaused());

        console.log("Playing song: ", getCurrentPlaylist()[getCurrentSong()]);

        playIcon.classList.remove("bi-play");
        playIcon.classList.add("bi-pause");
        changeUIInfo(getPlayList()[0]);

        audio.src = createBlob(getCurrentPlaylist()[getCurrentSong()]);
        audio.play();


    }

    console.log(checkAudioSrc());
}


let playButton = document.querySelector(".play-button");
let playIcon = document.querySelector(".bi-play");

playButton.addEventListener("click", () => {

    if (checkPlayList(getPlayList())) {
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