function changeUIInfo(info = false) {
    let albumImg = document.querySelector(".album-img");
    let albumName = document.querySelector(".album-title");
    let songTitle = document.querySelector(".song-title");

    if (info) {
        // let currentSongInfo = getCurrentSongInfo();
        console.log(info);
    } else {

        console.warn("No song is playing, waiting for a song to be played");
        
        albumImg.background = "url('../../assets/album-default.png')";
        albumName.textContent = "Ninguna canción seleccionada";
        songTitle.textContent = "";
    }   
}

export { changeUIInfo };