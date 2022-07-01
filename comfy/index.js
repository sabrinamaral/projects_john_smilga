// global imports
import "./src/pages/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { allProductsUrl } from "./src/utils.js";
import { setupStore, store } from "./src/store.js";
import { getElement } from "./src/utils.js";
import display from "./src/displayProducts.js";

const init = async () => {
  const products = await fetchProducts(allProductsUrl);
  if (products) {
    // add products to the store
    setupStore(products);
  }
};

window.addEventListener("DOMContentLoaded", init);
