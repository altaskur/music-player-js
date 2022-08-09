import { checkPlayList } from "../playList/playList.js";
import { changeUIInfo } from "../details/details.js";
import { getPlayList, getCurrentPlaylist, getCurrentSong, setCurrentSong } from "../../index.js";

function pauseSong(){
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
    console.log(audio.src)
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

function playSong(){

    let audio = document.querySelector("audio");
    let playIcon = document.querySelector(".play-button").querySelector("i");

    if (checkAudioSrc()) {

    
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
    
        if (isPaused()) {
            playIcon.classList.remove("bi-play");
            playIcon.classList.add("bi-pause");
            changeUIInfo(getPlayList()[0]);
    
            audio.src = createBlob( getCurrentPlaylist()[getCurrentSong()] );
            audio.play();
    
        } else {
            playIcon.classList.remove("bi-pause");
            playIcon.classList.add("bi-play");
            audio.pause();
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

    }

});

export { playSong, pauseSong, };