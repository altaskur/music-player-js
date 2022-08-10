import { getPlayList, setCurrentPlaylist, setSufflePlaylist, getSuffle, setSuffle } from "../../index.js";

function checkPlayList(playList) {
    if (playList.length > 0) {
        return true;
    } else {
        return false;
    }
}

function shuffling() {

    let suffleButton = document.querySelector(".bi-shuffle");
    let playList = getPlayList();

    if (playList.length > 0) {
        if (getSuffle()) {
            setSuffle(false);
            suffleButton.classList.remove("ux-active");
            suffleButton.classList.add("ux-inactive");
            setCurrentPlaylist(playList);
        } else {

            // cambia el orden del array shufflePlaylist
            let playList = getPlayList();

            let shufflePlaylist = [...playList];

            shufflePlaylist.sort(() => Math.random() - 0.5);

            setCurrentPlaylist(shufflePlaylist);
            setSufflePlaylist(shufflePlaylist);
            setSuffle(true);
            suffleButton.classList.remove("ux-inactive");
            suffleButton.classList.add("ux-active");
        }
    }
};

function clearSrc() {
    let audio = document.querySelector("audio");
    audio.src = "";
}

export { checkPlayList, clearSrc, shuffling };