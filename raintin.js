const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal-overlay");
const closeBtn = modal.querySelector("button");
const functionBtn = document.querySelector(".function");

const openModal = () => {
    modal.classList.remove("hidden");
    functionBtn.classList.add("modal-overlay");
}
const closeModal = () => {
    modal.classList.add("hidden");
    functionBtn.classList.remove("modal-overlay");
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);

// const functionBtn = document.querySelector(".function");

// if( modal.className == "modal hidden" ) {
//     functionBtn.classList.remove("modal-overlay");
// } else {
//     functionBtn.classList.add("modal-overlay");
// }


