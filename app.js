"use strict";

const iconBtn = document.querySelectorAll(".icons");

for (let i = 0; i < iconBtn.length; i++) {
  iconBtn[i].addEventListener("click", () => {
    let plusBtn = iconBtn[i].querySelector(".plus");
    let minusBtn = iconBtn[i].querySelector(".minus");
    let question = iconBtn[i].parentElement.nextElementSibling;
    question.classList.toggle("hide");
    plusBtn.classList.toggle("hide");
    minusBtn.classList.toggle("hide");
  });
}
