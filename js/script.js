const writeUsModal = document.querySelector(".write-us");
const writeUsButton = document.querySelector("#write-us-button");
const writeUsClose = document.querySelector("#write-us-close");
console.log('123');
const showModal = (event) => {
  event.preventDefault();
  writeUsModal.classList.add("write-us--show");
}

const closeModal = (event) => {
    event.preventDefault();
    writeUsModal.classList.remove("write-us--show");
}

console.log(writeUsButton);
writeUsButton.addEventListener("click", showModal);
writeUsClose.addEventListener("click", closeModal);
