import { setPlayList, getPlayList } from "../../index.js";

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
    console.log(getPlayList());
});

export { addSongsToPlaylist };