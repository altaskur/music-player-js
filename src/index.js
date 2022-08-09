import { checkPlayList } from "./controller/playList/playList.js";
import { changeUIInfo } from "./controller/details/details.js";
import { changeAudioVolume } from "./controller/controlButtons/controlButtons.js";
import {  } from "./controller/modal/modal.js";


var playList = [];
var currentPlaylist = [];
var shufflePlaylist = [];

var repeat = false;
var shuffle = false;



changeUIInfo(checkPlayList(playList));
changeAudioVolume();

function setPlayList(element) {
    playList =  element;
}
function getPlayList() {
    return playList;
}

export { setPlayList , getPlayList,  };

