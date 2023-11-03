import styles from "./products.module.css";

export default function Products({ product }) {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.productTitle}>
          <h3>${product.title}</h3>
        </div>
        <div className={styles.productImage}>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className={styles.productPrice}>
          <p>R$ ${product.price}</p>
        </div>
        <div className={styles.productDetails}>
          {/* colocar link para produto através do Router */}
          <a href="products.html?id=${product.id}">Detalhes</a>
        </div>
      </div>
    </>
  );
}
