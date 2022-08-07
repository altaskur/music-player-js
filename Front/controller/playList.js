currentPlaylist = [];
shufflePlaylist = [];

current = 0;

shuffle = false;
repeat = false;

function addToPlayList(songId) {
    playList.push(songId);
    addToAudioPlayer();
    console.log(playList);
}

function addToAudioPlayer() {
    if (playList.length == 1) {
        currentPlaylist = playList;
    }
}

function isShuffle() {
    if (shuffle) {
        shufflePlaylist = playlist;
        shufflePlaylist.sort(() => Math.random() - 0.5);
        currentPlaylist = shufflePlaylist;
    }
}

function playSong() {
    if (audio.src == "") {
        inputFile.click();

    } else {
        playSong2();
    }
}

function playSong2() {

    if (isPlaying()) {
        audio.pause();
    } else {
        if (audio.src == "") {
            audio.src = currentPlaylist[0];
        }
        isShuffle();
        audio.play();
    }
}

function isPlaying() {
    let playButton = document.querySelector(".play-button").querySelector("i");

    if (audio.paused) {
        playButton.classList.remove("bi-play");
        playButton.classList.add("bi-pause");
        return false;
    } else {
        playButton.classList.remove("bi-pause");
        playButton.classList.add("bi-play");
        return true;
    }
}

function nextSong() {

    currentPlaylist.length > 0 ? current++ : current = 0;
    
    if (current >= currentPlaylist.length) {
        current =  currentPlaylist.length;
    } else if (current < 0) {
        current = currentPlaylist.length - 1;
    }
    console.log(currentPlaylist)
    console.log(currentPlaylist[current]);
    audio.src = currentPlaylist[current];

    audio.play();

}

function previousSong() {
    currentPlaylist.length > 0 ? current-- : current = 0;
    audio.src = currentPlaylist[current];
    audio.play();
}