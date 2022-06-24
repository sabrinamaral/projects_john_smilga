import { people } from "./data.js";
import getElement from "./getElement.js";

const container = getElement(".slider-container");
const prevBtn = getElement(".prev-btn");
const nextBtn = getElement(".next-btn");

container.innerHTML = people
  .map(({ img, name, job, text }, slideIndex) => {
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    return `
        <article class="slide  ${position}">
            <img
            src="${img}"
            alt="${name}"
            class="img"
            />
            <h4>${name}</h4>
            <p class="title">${job}r</p>
            <p class="text">
            ${text}
            </p>
            <div class="quote-icon">
                <div class="fas fa-quote-right"></div>
            </div>
        </article>
            `;
  })
  .join("");

const startSlider = (type) => {
  const active = getElement(".active");
  const last = getElement(".last");

  let next = active.nextElementSibling;
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  active.classList.add(["last"]);
  last.classList.add(["next"]);
  next.classList.add(["active"]);
};

nextBtn.addEventListener("click", () => {
  startSlider("last");
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
