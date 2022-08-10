import { setPlayList, getPlayList, setCurrentPlaylist, getPause, setCurrentSong, getPlayOnLoad } from "../../index.js";
import { changeUIInfo } from "../details/details.js";
import { playSong } from "../mediaButtons/mediaButtons.js";
import { clearSrc } from "../playList/playList.js";


function addSongsToPlaylist() {
    let fileInput = document.querySelector("input[type='file']");
    fileInput.click();
}

let fileInput = document.querySelector("input[type='file']");
fileInput.addEventListener("change", async () => {
    
    console.log("File is paused: " + getPause());
    clearSrc();

    let files = fileInput.files;
    let fileArray = [];

    for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
    }
    
    setPlayList(fileArray);
    setCurrentPlaylist(fileArray);
    setCurrentSong(0);

    changeUIInfo(getPlayList()[0]);

    if(getPlayOnLoad()) {
       playSong();
    }
});

export { addSongsToPlaylist };