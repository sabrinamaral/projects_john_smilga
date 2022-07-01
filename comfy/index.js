// global imports
import "./src/pages/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { allProductsUrl } from "./src/utils.js";
// import { getElement } from "./src/utils.js";
// import { setupStore, store } from "./src/store.js";
// import display from "./src/displayProducts.js";

const init = async () => {
  const products = await fetchProducts(allProductsUrl);
  console.log(products);
};

window.addEventListener("DOMContentLoaded", init);
