import { checkPlayList } from "../playList/playList.js";
import { changeUIInfo } from "../details/details.js";
import { getPlayList, getCurrentPlaylist, getCurrentSong, setCurrentSong } from "../../index.js";

function createBlob(file) {
    return URL.createObjectURL(file);
}

function checkAudioSrc() {
    let audio = document.querySelector("audio");
    if (audio.src == "") {
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

function playSong(){
    let audio = document.querySelector("audio");
    if (checkAudioSrc()) {
        if (isPaused()) {
            playIcon.classList.remove("bi-play");
            playIcon.classList.add("bi-pause");
            changeUIInfo(getPlayList()[0]);

            audio.src = createBlob( getCurrentPlaylist()[getCurrentSong()]);
            audio.play();

        } else {
            playIcon.classList.remove("bi-pause");
            playIcon.classList.add("bi-play");
            audio.pause();
        }
    } else {
        setCurrentSong(0);
        let playIcon = document.querySelector(".play-button").querySelector("i");
        if (isPaused()) {
            playIcon.classList.remove("bi-play");
            playIcon.classList.add("bi-pause");
            changeUIInfo(getPlayList()[0]);

            audio.src = createBlob( getCurrentPlaylist()[getCurrentSong()]);
            audio.play();

        } 
    }
    console.log(checkAudioSrc());
}


let playButton = document.querySelector(".play-button");
let playIcon = document.querySelector(".bi-play");

playButton.addEventListener("click", () => {

    if(checkPlayList(getPlayList()))
    {
        playSong();

    } else {

    }

});

export { playSong };