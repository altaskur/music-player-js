import { checkPlayList } from "./playList-controller.js";
import { addSongsToPlaylist } from "./file-controller.js";
import {
  changeUIInfo,
  playlistLiStyleReset,
  showCurrentPlaylist,
} from "./ui-controller.js";
import {
  getPlayList,
  getCurrentPlaylist,
  getCurrentSong,
  setCurrentSong,
  getPause,
  setPause,
  getRepeat,
  setRepeat,
  getRepeatOne,
  setRepeatOne,
  setPlayOnLoad,
  getLastSong,
  setLastSong,
} from "../index.js";

function changeAudioVolume(volume = 50) {
  volume = volume / 100;
  console.log("Volume set to: " + volume * 100 + "%");

  let audio = document.querySelector("audio");
  let audioBar = document.querySelector(".volume-bar");

  audio.volume = volume;
  audioBar.value = volume * 100;
}

function loadToSrc(file) {
  let audio = document.querySelector("audio");
  audio.src = URL.createObjectURL(file);
}

function nextSong() {
  let currentSong = getCurrentSong();
  let playList = getCurrentPlaylist();

  currentSong++;

  if (currentSong >= 0 && currentSong <= playList.length - 1) {
    setCurrentSong(currentSong);
  }

  if (currentSong >= playList.length) {
    currentSong = 0;
    setCurrentSong(currentSong);
  }

  setPause(true);
  playSong();
}

function previousSong() {
  let currentSong = getCurrentSong();
  let playList = getCurrentPlaylist();
  currentSong--;
  if (currentSong >= 0 && currentSong <= playList.length) {
    setCurrentSong(currentSong);
  }
  if (currentSong <= 0) {
    currentSong = playList.length - 1;
    setCurrentSong(currentSong);
  }

  setPause(true);
  playSong();
}

function pauseSong() {
  document.querySelector("audio").pause();
  console.log("⏸ Song is paused");

  let playIcon = document.querySelector(".play-button").querySelector("i");
  playIcon.classList.remove("bi-pause");
  playIcon.classList.add("bi-play");

  setPause(true);
}

function playSong() {
  console.log("Is paused: ", getPause());
  if (getPause()) {
    console.log(
      "🎶 Playing song: ",
      getCurrentPlaylist()[getCurrentSong()].name
    );

    let playIcon = document.querySelector(".play-button").querySelector("i");
    playIcon.classList.remove("bi-play");
    playIcon.classList.add("bi-pause");

    if (
      document.querySelector("audio").src.includes("blob") == false ||
      getCurrentSong() != getLastSong()
    ) {
      changeUIInfo(getPlayList()[getCurrentSong()]);
      playlistLiStyleReset();
      loadToSrc(getCurrentPlaylist()[getCurrentSong()]);
      setLastSong(getCurrentSong());
    }

    console.log(getCurrentSong());

    document.querySelector("audio").play();

    setPause(false);
  } else {
    pauseSong();
    setPause(true);
    console.log("Song is paused: ", getPause());
  }
}

let audio = document.querySelector("audio");

audio.addEventListener("ended", () => {
  console.warn("Song ended");
  getRepeatOne() ? playSong() : getRepeat() ? nextSong() : null;
});

audio.addEventListener("timeupdate", function (event) {
  let currentProgressBar = document.querySelector(".current-progress-bar");
  currentProgressBar.disabled = false;
  currentProgressBar.value = event.target.currentTime / event.target.duration;

  let timeSpan = document.querySelectorAll(".time");
  let currentTimeText = timeSpan[0];
  let durationTimeText = timeSpan[1];

  // pass current time in minutes
  let minutes = Math.floor(event.target.currentTime / 60);
  let seconds = Math.floor(event.target.currentTime - minutes * 60);

  let format =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  currentTimeText.textContent = format;

  // pass duration time in minutes
  minutes = Math.floor(event.target.duration / 60);
  seconds = Math.floor(event.target.duration - minutes * 60);
  format =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  if (format != "NaN:NaN") {
    durationTimeText.textContent = format;
  }
});

document
  .querySelector(".media-control")
  .querySelectorAll("i")[4]
  .addEventListener("click", (event) => {
    let repeatButton = event.target;

    if (getRepeat()) {
      console.log("🔂 Repeat current song");
      setRepeat(false);
      setRepeatOne(true);
      repeatButton.classList.remove("bi-repeat");
      repeatButton.classList.add("bi-repeat-1");
    } else if (getRepeatOne()) {
      console.log("🔃 No repeat");
      setRepeatOne(false);
      setRepeat(false);
      repeatButton.classList.remove("bi-repeat-1");
      repeatButton.classList.add("bi-repeat");
      repeatButton.classList.remove("ux-active");
      repeatButton.classList.add("ux-inactive");
    } else {
      console.log("🔁 Repeat all songs");
      setRepeat(true);
      repeatButton.classList.remove("ux-inactive");
      repeatButton.classList.add("ux-active");
    }
  });

document.querySelector(".play-button").addEventListener("click", () => {
  checkPlayList(getPlayList())
    ? playSong()
    : (addSongsToPlaylist(), setPlayOnLoad(true));
});

document
  .querySelector(".current-progress-bar")
  .addEventListener("input", (event) => {
    let audio = document.querySelector("audio");
    audio.currentTime = event.target.value * audio.duration;
  });

document.querySelector(".bi-skip-start").addEventListener("click", () => {
  checkPlayList(getPlayList()) ? previousSong() : null;
});

document.querySelector(".bi-skip-end").addEventListener("click", () => {
  checkPlayList(getPlayList()) ? nextSong() : null;
});

// Control buttons
let addSongBtn = document.querySelector(".bi-plus-circle");

addSongBtn.addEventListener("click", () => {
  addSongsToPlaylist();
});

// PlayList
let playListBtn = document.querySelector(".bi-soundwave");
playListBtn.addEventListener("click", () => {
  showCurrentPlaylist();
});

let volumeBtn = document.querySelector(".bi-volume-down");

volumeBtn.addEventListener("click", () => {
  let audio = document.querySelector("audio");
  let audioBar = document.querySelector(".volume-bar");

  if (audio.muted) {
    audio.muted = false;
    volumeBtn.classList.remove("bi-volume-mute");
    volumeBtn.classList.add("bi-volume-down");
    audioBar.disabled = false;
    console.log("Volume unmuted");
  } else {
    audio.muted = true;

    volumeBtn.classList.remove("bi-volume-down");
    volumeBtn.classList.add("bi-volume-mute");
    audioBar.disabled = true;
    console.log("Volume muted");
  }
});

document.querySelector(".bi-volume-up").addEventListener("click", () => {
  changeAudioVolume(100);
});

let volumeBar = document.querySelector(".volume-bar");
volumeBar.addEventListener("change", () => {
  changeAudioVolume(volumeBar.value);
});

export { playSong, pauseSong, previousSong, changeAudioVolume };
