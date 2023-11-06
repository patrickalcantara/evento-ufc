const headers = { headers: { Accept: "application/json" } };

async function getAllProducts() {
  const result = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=celular",
    headers
  );
  const products = await result.json();

  return products.results;
}

async function getOneProduct(id) {
  const result = await fetch(
    `https://api.mercadolibre.com/items/${id}`,
    headers
  );
  const product = await result.json();

  return product;
}

export { getAllProducts, getOneProduct };
