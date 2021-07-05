'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const openMadal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeMadal = function(){ 
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
for (let i=0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener("click", openMadal)};
    btnCloseModal.addEventListener("click", closeMadal);
    overlay.addEventListener("click", closeMadal);

document.addEventListener("keydown", function(e){
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")){
        closeMadal();
    }
})