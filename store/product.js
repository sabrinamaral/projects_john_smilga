const url = "https://course-api.com/javascript-store-single-product";
const productDOM = document.querySelector(".product");

const fetchSingleProduct = async () => {
  try {
    // loading
    productDOM.innerHTML = '<div class="loading"></div>';

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      ' <p class="error">there was a problem loading the product.</p>';
    console.log(error);
  }
};

const displayProduct = (product) => {
  const { company, description, name, price, colors } = product.fields;
  const { url } = product.fields.image[0];
  const formatPrice = price / 10;
  document.title = name.toUpperCase();
  const colorList = colors
    .map((color) => {
      return `
        <span class="product-color" style="background: ${color}"></span>
    `;
    })
    .join("");
  productDOM.innerHTML = `
  <div class="product-wrapper">
    <img src="${url}" alt="${name}" class="img" />
        <div class="product-info">
          <h3>${name}</h3>
          <h5>${company}y</h5>
          <span>$${formatPrice}</span>
          <div class="colors">
            ${colorList}
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
    </div>`;
};

const start = async () => {
  const data = await fetchSingleProduct();
  displayProduct(data);
};

start();
