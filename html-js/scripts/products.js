import { doGet } from "./doGet.js";

window.onload = () => {
  loadProduct();
};

async function loadProduct() {
  const url = new URL(window.location.href);
  const productId = url.searchParams.get("id");

  const product = await doGet(
    `https://api.mercadolibre.com/items/${productId}`
  );
  assembleProduct(product);
}

async function assembleProduct(product) {
  const productItem = document.getElementById("product-list");

  productItem.innerHTML = `<div class="product">
    <div class="product-details">
      <div class="product-details-image">
        <img
          src="${product.pictures[0].url}"
          alt=""
        />
      </div>
      <div class="product-details-description">
        <h2>${product.title}</h2>
        <p>R$ ${product.price}</p>
      </div>
    </div>
  </div>`;
}
