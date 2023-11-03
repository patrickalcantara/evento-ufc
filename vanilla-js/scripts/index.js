// let listaProdutos = "";
import { doGet, createCustomElement, createImageElement } from "./assets.js";

window.onload = () => {
  loadProducts();
};

function assembleProducts(products) {
  const productsList = document.getElementById("products-list");

  products.forEach((product) => {
    const productTitle = createCustomElement("div", "product-title");
    productTitle.appendChild(createCustomElement("h3", "", product.title));

    const productImage = createCustomElement("div", "product-image");
    productImage.appendChild(
      createImageElement(product.thumbnail, product.title)
    );

    const productPrice = createCustomElement("div", "product-price");
    productPrice.appendChild(
      createCustomElement("p", "", `R$ ${product.price}`)
    );

    const productDetails = createCustomElement("div", "product-details");
    const buttonDetails = createCustomElement("button", "", "Detalhes");
    buttonDetails.addEventListener("click", () =>
      loadDetailsProduct(product.id)
    );
    productDetails.appendChild(buttonDetails);

    const divProduct = createCustomElement("div", "product");
    divProduct.appendChild(productTitle);
    divProduct.appendChild(productImage);
    divProduct.appendChild(productPrice);
    divProduct.appendChild(productDetails);

    productsList.appendChild(divProduct);
  });
}

async function loadProducts() {
  const products = await doGet(
    "https://api.mercadolibre.com/sites/MLB/search?q=celular"
  );
  assembleProducts(products.results);
}

async function loadDetailsProduct(productId) {
  const product = await doGet(
    `https://api.mercadolibre.com/items/${productId}`
  );

  const modal = document.getElementById("modal");

  const modalClose = createCustomElement("div", "modal-close", "X");
  const modalProductImage = createCustomElement("div", "modal-product-image");
  modalProductImage.appendChild(
    createImageElement(product.pictures[0].url, product.title)
  );

  const modalProductDescription = createCustomElement(
    "div",
    "modal-product-description"
  );
  modalProductDescription.appendChild(
    createCustomElement("h2", "", product.title)
  );
  modalProductDescription.appendChild(
    createCustomElement("p", "", `R$ ${product.price}`)
  );

  const modalProduct = createCustomElement("div", "modal-product");
  modalProduct.appendChild(modalClose);
  modalProduct.appendChild(modalProductImage);
  modalProduct.appendChild(modalProductDescription);

  modal.style.display = "grid";
  modal.appendChild(modalProduct);

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.removeChild(modalProduct);
  });
}
