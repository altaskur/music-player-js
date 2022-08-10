import { getCurrentPlaylist, setCurrentSong,getCurrentSong, setPause } from "../../index.js";
import { playSong } from "../mediaButtons/mediaButtons.js";

function showModal() {
    let modalDiv = document.querySelector("#modal");
    modalDiv.classList.remove("ux-hidden");
}

function hideModal() {
    let modalDiv = document.querySelector("#modal");
    modalDiv.classList.add("ux-hidden");
}

function playlistLiStyleReset(){
    let allLi = document.querySelectorAll("li");
 
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].classList.remove("ux-modal-active");
        if (i == getCurrentSong()) {
            allLi[i].classList.add("ux-modal-active");
        }
    }
}

function contentModal(){
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
            if(song == getCurrentSong()){
                li.classList.add("ux-modal-active");
            } else {
                li.classList.remove("ux-modal-active");
            }
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


window.addEventListener("DOMContentLoaded", () => {
    var head = document.querySelector("head")
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./controller/modal/modal.css";
    head.appendChild(link);
});

let buttonModalClose = document.querySelector("button[name='close-modal']");
buttonModalClose.addEventListener("click", () => {
    hideModal();
});

export { showCurrentPlaylist, showModal, hideModal, playlistLiStyleReset };