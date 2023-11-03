// let listaProdutos = "";
import { doGet } from "./doGet.js";

window.onload = () => {
  loadProducts();
};

function assembleProducts(products) {
  const productsList = document.getElementById("products-list");

  let html = "";

  products.forEach((product) => {
    html += `<div class="product">
    <div class="product-title">
      <h3>${product.title}</h3>
    </div>
    <div class="product-image">
      <img
        src="${product.thumbnail}"
        alt="${product.title}"
      />
    </div>
    <div class="product-price"><p>R$ ${product.price}</p></div>
    <div class="product-details"><a href="products.html?id=${product.id}">Detalhes</a></div>
  </div>`;
  });

  productsList.innerHTML = html;
}

async function loadProducts() {
  const products = await doGet(
    "https://api.mercadolibre.com/sites/MLB/search?q=celular"
  );
  assembleProducts(products.results);
}
