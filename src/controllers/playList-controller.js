import {
  getPlayList,
  setCurrentPlaylist,
  setShufflePlaylist,
  getShuffle,
  setShuffle,
} from "../index.js";

function checkPlayList(playList) {
  return playList.length > 0 ? true : false;
}

function shuffling() {
  let shuffleButton = document.querySelector(".bi-shuffle");
  let playList = getPlayList();

  if (getShuffle()) {
    setShuffle(false);
    shuffleButton.classList.remove("ux-active");
    shuffleButton.classList.add("ux-inactive");
    setCurrentPlaylist(playList);
  } else {
    let shufflePlaylist = [...getPlayList()];

    shufflePlaylist.sort(() => Math.random() - 0.5);

    setCurrentPlaylist(shufflePlaylist);
    setShufflePlaylist(shufflePlaylist);
    setShuffle(true);

    shuffleButton.classList.remove("ux-inactive");
    shuffleButton.classList.add("ux-active");
  }
}

document.querySelector(".bi-shuffle").addEventListener("click", () => {
  shuffling();
});

export { checkPlayList, getPlayList };
