import getElement from "./getElement.js";
import fetchPages from "./fetchPages.js";

const form = getElement(".form");
const input = getElement(".form-imput");
const results = getElement(".results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    results.innerHTML =
      "<div class='error'>Please enter a value for your research.</div>";
    return;
  }
  fetchPages(value);
  input.value = "";
});
