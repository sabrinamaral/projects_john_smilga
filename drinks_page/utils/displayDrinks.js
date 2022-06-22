import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = getElement(".section-center");
  const title = getElement(".title");

  if (!drinks) {
    hideLoading();
    title.textContent = "sorry, no drinks matched yoour search";
    section.innerHTML = null;
    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id } = drink;
      const { strDrinkThumb: src } = drink;
      const { strDrink: name } = drink;

      return `<a href="drink.html ">
          <article class="cocktail" data-set=${id}>
            <img src=${src} alt=${name} />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");

  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
