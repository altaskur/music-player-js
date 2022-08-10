function getCurrentSongInfo(song) {
    let currentSong = song;
    console.log(currentSong);
    currentSong = currentSong.name.split("-");
    let albumName = currentSong[0];
    let songName = currentSong[1].split(".")[0];

    let currentSongInfo = {
        albumName: albumName,
        songTitle: songName
    }
    return currentSongInfo;
}

function resetProgressData() {

    let currentProgressTime = document.querySelector(".current-progress-time");
    let totalProgressTime = document.querySelector(".total-progress-time");
    let currentProgressBar  = document.querySelector(".current-progress-bar");

    currentProgressBar.value = 0;
    currentProgressBar.disabled = true;
    currentProgressTime.textContent = "00:00";
    totalProgressTime.textContent = "00:00";
}

function changeUIInfo(info = false) {
    let albumImg = document.querySelector(".album-img");
    let albumName = document.querySelector(".album-title");
    let songTitle = document.querySelector(".song-title");

    if (info) {

        let currentSongInfo = getCurrentSongInfo(info); 
        console.log(currentSongInfo);
        albumName.textContent = currentSongInfo.albumName;
        songTitle.textContent = currentSongInfo.songTitle;

    } else {
        console.warn("No song is playing, waiting for a song to be played");
    
        albumImg.background = "url('../../assets/album-default.png')";
        albumName.textContent = "Ninguna canción seleccionada";
        songTitle.textContent = "";
    }   

    resetProgressData();
}

export { changeUIInfo };