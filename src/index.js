import { checkPlayList } from "./controller/playList/playList.js";
import { changeUIInfo } from "./controller/details/details.js";
import { changeAudioVolume } from "./controller/controlButtons/controlButtons.js";
import { } from "./controller/modal/modal.js";
import { } from "./controller/mediaButtons/mediaButtons.js";


var playList = [];
var currentPlaylist = [];
var shufflePlaylist = [];

var repeat = true;
var repeatOne = false;

var shuffle = false;
var currenSong = 0;
var pause = true;

var playOnLoad = false;

changeUIInfo(checkPlayList(playList));
changeAudioVolume();

function setPlayOnLoad(boolean) {
    playOnLoad = boolean;
}

function getPlayOnLoad() {
    return playOnLoad;
}

function setRepeatOne(element) {
    repeatOne = element;
}

function getRepeatOne() {
    return repeatOne;
}

function getSuffle() {
    return shuffle;
}

function setSuffle(element) {
    shuffle = element;
}

function setPause (boolean){
    pause = boolean;
}

function getPause (){
    return pause;
}

function setPlayList(element) {
    playList = element;
}

function getPlayList() {
    return playList;
}

function getCurrentPlaylist() {
    return currentPlaylist;
}

function setCurrentPlaylist(element) {
    currentPlaylist = element;
}

function getCurrentSong() {
    return currenSong;
}

function setCurrentSong(element) {
    currenSong = element;
}

function setSufflePlaylist(element) {
    shufflePlaylist = element;
}

function getSufflePlaylist() {
    return shufflePlaylist;
}

function setRepeat(element) {
    repeat = element;
}

function getRepeat() {
    return repeat;
}

export {
    setPlayList, 
    getPlayList, 
    getCurrentPlaylist, 
    setCurrentPlaylist,
    getCurrentSong,
    setCurrentSong,
    setPause,
    getPause,
    setSufflePlaylist,
    getSufflePlaylist,
    setRepeat,
    getRepeat,
    getSuffle,
    setSuffle,
    setRepeatOne,
    getRepeatOne,
    setPlayOnLoad,
    getPlayOnLoad
};

