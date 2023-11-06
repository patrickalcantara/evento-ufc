import { useEffect, useState } from "react";
import { getOneProduct } from "../../services/service";
import { Link, useParams } from "react-router-dom";

import "./Product.css";

export default function Product() {
  const [product, setProduct] = useState({});
  const [productImage, setProductImage] = useState("");
  const { id } = useParams();

  async function featchData() {
    const product = await getOneProduct(id);

    setProductImage(product.pictures[0].url);
    setProduct(product);
  }

  useEffect(() => {
    featchData();
  }, []);

  return (
    <>
      <div className="return">
        <Link to="/">&#11013; Voltar</Link>
      </div>
      <div className="product-list">
        <div className="product-list-details">
          <div className="product-list-details-image">
            <img src={productImage} alt="" />
          </div>
          <div className="product-list-details-description">
            <h2>{product.title}</h2>
            <p>R$ {product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
