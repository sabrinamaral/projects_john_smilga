import fetchData from "./fetchData.js";
import getElement from "./getElement.js";
import renderResult from "./renderResults.js";

const results = getElement(".results");
const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const fetchPages = async (searchValue) => {
  results.innerHTML = "<div class='loading'></div>";
  try {
    const data = await fetchData(`${url}${searchValue}`);
    const results = data.query.search;
    if (results.length < 1) {
      throw new Error(`no mach for your search`);
    }
    renderResult(results);
  } catch (error) {
    results.innerHTML = `<div class='error'>${error.message}</div>`;
  }
};

export default fetchPages;
