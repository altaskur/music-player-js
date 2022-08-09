import { setPlayList, getPlayList, setCurrentPlaylist, } from "../../index.js";
import { changeUIInfo } from "../details/details.js";


function addSongsToPlaylist(){
    let fileInput = document.querySelector("input[type='file']");
    fileInput.click();
}

let fileInput = document.querySelector("input[type='file']");
fileInput.addEventListener("change", () => {
    let files = fileInput.files;
    let fileArray = [];

    for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
    }

    setPlayList(fileArray);
    setCurrentPlaylist(fileArray);
    
    console.log(getPlayList());

    changeUIInfo(getPlayList()[0]);

});

export { addSongsToPlaylist };