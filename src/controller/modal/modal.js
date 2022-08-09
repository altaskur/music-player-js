import { getPlayList } from "../../index.js";

function showModal() {
    let modalDiv = document.querySelector("#modal");
    modalDiv.classList.remove("ux-hidden");
}

function hideModal() {
    let modalDiv = document.querySelector("#modal");
    modalDiv.classList.add("ux-hidden");
}
function contentModal(){
    let modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "";

    let ol = document.createElement("ol");
    if (getPlayList().length > 0) {
        for (let song in getPlayList()) {
            console.log(getPlayList()[song]);
            let li = document.createElement("li");
            li.textContent = getPlayList()[song].name;
            ol.appendChild(li);
        }
    } else {
        let li = document.createElement("li");
        li.textContent = "No hay canciones en la lista";
        ol.appendChild(li);
    }
    modalContent.appendChild(ol);
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

export { showCurrentPlaylist, showModal, hideModal };