
document.querySelector(".bi-skip-end").addEventListener("click", () => {
    //next audio source
    console.log("next");
    nextSong();
});


document.querySelector(".bi-skip-start").addEventListener("click", () => {
    //previous audio source
    console.log("previous");
    previousSong();

});


document.querySelector(".bi-play").addEventListener("click", (event) => {
    //play audio source
    console.log("play");
    playSong();

});


audio.addEventListener("durationchange", function () {
    //you can display the duration now
    console.log(audio.duration);
});

audio.addEventListener("timeupdate", function (event) {
    // you could let the user know the media is downloading

    // console.log("Time Stamp",event.timeStamp);
    // console.log("Current Time",event.target.currentTime);
    // console.log("Duration",event.target.duration);

    // percentage of the media that has been downloaded
    var percent = (event.target.currentTime / event.target.duration) * 100;
    console.log("Percent", percent);
    currentProgressBar.style.width = percent + "%";

    if (percent == 100) {
        // next song
        nextSong();

    }

    // pass current time in minutes
    let minutes = Math.floor(event.target.currentTime / 60);
    let seconds = Math.floor(event.target.currentTime - minutes * 60);
    let format = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    currentTime.textContent = format;

    // pass duration time in minutes
    minutes = Math.floor(event.target.duration / 60);
    seconds = Math.floor(event.target.duration - minutes * 60);
    format = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    if (format != "NaN:NaN") {
        durationTime.textContent = format;
    }


});