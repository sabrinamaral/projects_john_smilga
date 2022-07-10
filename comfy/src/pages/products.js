// global imports
import "../pages/toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// filter imports
import setupCompanies from "../filters/companies.js";
import setupSearch from "../filters/search.js";
import setupPrice from "../filters/price.js";

// specific imports
import display from "../displayProducts.js";
import { store, setupStore } from "../store.js";
import { getElement } from "../utils.js";
import fetchProducts from "../fetchProducts.js";
import { allProductsUrl } from "../utils.js";

const init = async () => {
  const loading = getElement(".page-loading");
  if (store.length < 1) {
    const products = await fetchProducts(allProductsUrl);
    setupStore(products);
  }
  display(store, getElement(".products-container"));
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
  loading.style.display = "none";
};
init();
