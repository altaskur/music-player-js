import { checkPlayList } from "./controller/playList/playList.js";
import { changeUIInfo } from "./controller/details/details.js";
import { changeAudioVolume } from "./controller/controlButtons/controlButtons.js";
import { } from "./controller/modal/modal.js";
import {  } from "./controller/mediaButtons/mediaButtons.js";


var playList = [];
var currentPlaylist = [];
var shufflePlaylist = [];

var repeat = false;
var shuffle = false;
var currenSong = 0;

changeUIInfo(checkPlayList(playList));
changeAudioVolume();


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

export {
    setPlayList, 
    getPlayList, 
    getCurrentPlaylist, 
    setCurrentPlaylist,
    getCurrentSong,
    setCurrentSong
};

