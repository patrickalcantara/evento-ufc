import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import { getAllProducts } from "../../services/service";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function featchData() {
    const products = await getAllProducts();
    setProducts(products);
  }

  useEffect(() => {
    featchData();
  }, []);

  return (
    <>
      <div className="products-list">
        {products.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
