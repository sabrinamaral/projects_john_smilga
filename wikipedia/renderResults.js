import getElement from "./getElement.js";
const results = getElement(".results");

const renderResult = (list) => {
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item;

      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
    <h4>${title}</h4>
    <p>${snippet}</p>
    </a>`;
    })
    .join("");

  results.innerHTML = `<div class="articles">${cardsList}</div>`;
};

export default renderResult;
