const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");
const container = document.querySelector(".products-container");

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = ' <p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const productsList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 10;

      return ` <a href="product.html" class="single-product">
            <img
              src="${img}"
              alt="${title}"
              class="single-product-img img"
            />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.innerHTML = `
    <div class="products-container">${productsList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
