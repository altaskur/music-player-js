
document.querySelector(".bi-skip-end").addEventListener("click", () => {
    //next audio source
    console.log("next");
});
document.querySelector(".bi-skip-start").addEventListener("click", () => {
    //previous audio source
    console.log("previous");
});

document.querySelector(".bi-play").addEventListener("click", () => {
    //play audio source
    console.log("play");
    audio.play();
});


