/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products({ product }) {
  return (
    <>
      <div className="product">
        <div className="product-title">
          <h3>{product.title}</h3>
        </div>
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-price">
          <p>R$ {product.price}</p>
        </div>
        <div className="product-details">
          <Link to={`/product/${product.id}`}>Detalhes</Link>
        </div>
      </div>
    </>
  );
}
