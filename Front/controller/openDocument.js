let inputFile = document.querySelector("input[type='file']");
document.querySelector(".bi-plus-circle").addEventListener("click",  () =>{
    inputFile.click();
});

inputFile.addEventListener("change", () => {
    // add file to play audio
    let files = inputFile.files;
    console.log(files)
    for (file in files){
        // add file to playlist audio
        let url = URL.createObjectURL(files[file]);
        addToPlayList(url);
        playSong2();
    }
    
});