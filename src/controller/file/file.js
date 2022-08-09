import { setPlayList, getPlayList, setCurrentPlaylist, } from "../../index.js";
import { changeUIInfo } from "../details/details.js";
import { pauseSong } from "../mediaButtons/mediaButtons.js";
import { clearSrc } from "../playList/playList.js";


function addSongsToPlaylist() {
    let fileInput = document.querySelector("input[type='file']");
    fileInput.click();
}

let fileInput = document.querySelector("input[type='file']");
fileInput.addEventListener("change", () => {
    pauseSong();
    clearSrc();
    let files = fileInput.files;
    let fileArray = [];

    for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
    }

    setPlayList(fileArray);
    setCurrentPlaylist(fileArray);

    changeUIInfo(getPlayList()[0]);

});

export { addSongsToPlaylist };