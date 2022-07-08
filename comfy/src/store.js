import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { company, colors, price, name, featured, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, company, colors, price, name, featured, image };
  });

  setStorageItem("store", store);
};
const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};
export { setupStore, findProduct, store };
