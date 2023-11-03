async function doGet(url) {
  const result = await fetch(url, { headers: { Accept: "application/json" } });
  return await result.json();
}

export { doGet };
