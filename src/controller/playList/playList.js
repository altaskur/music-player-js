function checkPlayList( playList ){
    if( playList.length > 0 ){
        return true;
    }else{
        return false;
    }
}

function clearSrc(){
    let audio = document.querySelector("audio");
    audio.src = "";
}

export { checkPlayList, clearSrc };