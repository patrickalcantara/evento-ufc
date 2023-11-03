async function doGet(url) {
  const result = await fetch(url, { headers: { Accept: "application/json" } });
  return await result.json();
}

function createCustomElement(type, className = "", innerText = "") {
  const element = document.createElement(type);
  element.className = className;
  element.innerText = innerText;
  return element;
}

function createImageElement(url, description) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = description;
  return img;
}

export { doGet, createCustomElement, createImageElement };
