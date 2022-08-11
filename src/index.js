import { checkPlayList } from "./controllers/playList-controller.js";
import { changeUIInfo } from "./controllers/ui-controller.js";
import { changeAudioVolume } from "./controllers/buttons-controller.js";

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

function getShuffle() {
  return shuffle;
}

function setShuffle(element) {
  shuffle = element;
}

function setPause(boolean) {
  pause = boolean;
}

function getPause() {
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

function setShufflePlaylist(element) {
  shufflePlaylist = element;
}

function getShufflePlaylist() {
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
  setShufflePlaylist,
  getShufflePlaylist,
  setRepeat,
  getRepeat,
  getShuffle,
  setShuffle,
  setRepeatOne,
  getRepeatOne,
  setPlayOnLoad,
  getPlayOnLoad,
};
