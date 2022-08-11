import {
  setPlayList,
  getPlayList,
  setCurrentPlaylist,
  setCurrentSong,
  getPlayOnLoad,
} from "../index.js";
import { changeUIInfo } from "./ui-controller.js";
import { playSong } from "./buttons-controller.js";

function clearSrc() {
  document.querySelector("audio").src = "";
}
function addSongsToPlaylist() {
  document.querySelector("input[type='file']").click();
}

let fileInput = document.querySelector("input[type='file']");
fileInput.addEventListener("change", () => {
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

  getPlayOnLoad() ? playSong() : null;
});

export { addSongsToPlaylist };
