import {
  getCurrentPlaylist,
  setCurrentSong,
  getCurrentSong,
  setPause,
} from "../index.js";
import { playSong } from "./buttons-controller.js";

function showModal() {
  document.querySelector("#modal").classList.remove("ux-hidden");
}

function hideModal() {
  document.querySelector("#modal").classList.add("ux-hidden");
}

function playlistLiStyleReset() {
  let songList = document.querySelectorAll("li");

  for (
    let positionOfSong = 0;
    positionOfSong < songList.length;
    positionOfSong++
  ) {
    positionOfSong == getCurrentSong()
      ? songList[positionOfSong].classList.add("ux-modal-active")
      : songList[positionOfSong].classList.remove("ux-modal-active");
  }
}

function contentModal() {
  let modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = "";

  let ol = document.createElement("ol");
  let ul = document.createElement("ul");

  if (getCurrentPlaylist().length > 0) {
    for (let song in getCurrentPlaylist()) {
      let li = document.createElement("li");

      li.textContent = getCurrentPlaylist()[song].name;

      li.addEventListener("click", () => {
        setCurrentSong(song);
        setPause(true);
        playSong();
      });

      song == getCurrentSong()
        ? li.classList.add("ux-modal-active")
        : li.classList.remove("ux-modal-active");

      ol.appendChild(li);
    }
    modalContent.appendChild(ol);
  } else {
    let li = document.createElement("li");
    li.textContent = "No hay canciones en la lista";
    ul.appendChild(li);
    modalContent.appendChild(ul);
  }
}

function showCurrentPlaylist() {
  contentModal();
  showModal();
}

function getCurrentSongInfo(currentSong) {
  currentSong = currentSong.name.split("-");

  return {
    album: currentSong[0].trim(),
    title: currentSong[1].split(".")[0].trim(),
  };
}

function resetProgressData() {
  let currentProgressTime = document.querySelector(".current-progress-time");
  let totalProgressTime = document.querySelector(".total-progress-time");
  let currentProgressBar = document.querySelector(".current-progress-bar");

  currentProgressBar.value = 0;
  currentProgressBar.disabled = true;
  currentProgressTime.textContent = "00:00";
  totalProgressTime.textContent = "00:00";
}

function changeUIInfo(info = false) {
  let albumNameContainer = document.querySelector(".album-title");
  let songTitleContainer = document.querySelector(".song-title");
  let newInfo = {};

  if (info) {
    let currentSongInfo = getCurrentSongInfo(info);
    newInfo.album = currentSongInfo.album;
    newInfo.title = currentSongInfo.title;
  } else {
    newInfo.album = "Ninguna canción seleccionada";
    newInfo.title = "";
  }

  albumNameContainer.textContent = newInfo.album;
  songTitleContainer.textContent = newInfo.title;
  resetProgressData();
}

window.addEventListener("DOMContentLoaded", () => {
  var head = document.querySelector("head");
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./controller/ui/modal.css";
  head.appendChild(link);
});

let buttonCloseModal = document.querySelector("button[name='close-modal']");
buttonCloseModal.addEventListener("click", hideModal);

export {
  changeUIInfo,
  showCurrentPlaylist,
  showModal,
  hideModal,
  playlistLiStyleReset,
};
