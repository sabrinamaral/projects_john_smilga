import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const section = getElement(".single-drink");

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
  ];

  const img = getElement(".drink-img");
  const drinkName = getElement(".drink-name");
  const description = getElement(".drink-desc");
  const ingredients = getElement(".drink-ingredients");

  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li ><i class="fa-solid fa-martini-glass-citrus"></i> ${ingredient}</li>`;
    })
    .join("");
};

export default displayDrink;
