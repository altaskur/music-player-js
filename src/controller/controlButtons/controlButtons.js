function addSongsToPlaylist(){
    let fileInput = document.querySelector("input[type='file']");
    fileInput.click();
}

// Control buttons
let addSongBtn = document.querySelector(".bi-plus-circle");

addSongBtn.addEventListener("click", () => {
    addSongsToPlaylist();
});

// PlayList
let playListBtn = document.querySelector(".bi-soundwave");
playListBtn.addEventListener("click", () => {
    console.log("PlayList");
});

// volume Button
let volumeBtn = document.querySelector(".bi-volume-down");

volumeBtn.addEventListener("click", () => {
    let audio = document.querySelector("audio"); 
    let audioBar = document.querySelector(".volume-bar");

    if (audio.muted) {
        audio.muted = false;
        volumeBtn.classList.remove("bi-volume-mute");
        volumeBtn.classList.add("bi-volume-down");
        audioBar.disabled = false;
    } else {
        audio.muted = true;
        volumeBtn.classList.remove("bi-volume-down");
        volumeBtn.classList.add("bi-volume-mute");
        audioBar.disabled = true;
    }  
});

// volume bar
let volumeBar = document.querySelector(".volume-bar");
volumeBar.addEventListener("change", () => {
    let audio = document.querySelector("audio");
    audio.volume = volumeBar.value/100;
});

export { addSongsToPlaylist, playListBtn , addSongBtn };