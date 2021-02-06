const writeUsModal = document.querySelector(".write-us");
const writeUsButton = document.querySelector("#write-us-button");
const writeUsClose = document.querySelector("#write-us-close");

const showModal = (event) => {
  event.preventDefault();
  writeUsModal.classList.add("write-us--show");
}

const closeModal = (event) => {
    event.preventDefault();
    writeUsModal.classList.remove("write-us--show");
}

writeUsButton.addEventListener("click", showModal);
writeUsClose.addEventListener("click", closeModal);

const sliders = document.querySelectorAll(".slider-block");
const sliderForm = document.querySelector(".slider-radio");

sliderForm.addEventListener("change", (event) => {

  sliders.forEach((slider) => {

    if(slider.classList.contains("slider-block--show")) {
      slider.classList.remove("slider-block--show");
    }
  });
  sliders[event.target.value].classList.add("slider-block--show");
});


const writeUsForm = document.querySelector("#write-us-form");
const writeUsInputs = document.querySelectorAll(".write-us-input");
const writeUsValidation = (event) => {
  event.preventDefault();
  const textErrors = document.querySelectorAll(".text--error");
  textErrors.forEach( (textError) => {
    textError.remove();
  })
  writeUsInputs.forEach( (input) => {
    if (!input.value) {
      input.classList.add("write-us--error");
      const textError = document.createElement("span");
      textError.classList.add("text--error");
      textError.textContent = "Введите что-нибудь!";
      input.parentElement.append(textError); 
    } else {
      input.classList.remove("write-us--error");
    }
  })
}


writeUsForm.addEventListener("submit", writeUsValidation);
