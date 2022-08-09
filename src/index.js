import { checkPlayList } from "./controller/playList/playList.js";
import { changeUIInfo } from "./controller/details/details.js";
import { addSongsToPlaylist } from "./controller/controlButtons/controlButtons.js";


var playList = [];
var currentPlaylist = [];
var shufflePlaylist = [];

var repeat = false;
var shuffle = false;



changeUIInfo(checkPlayList(playList));

