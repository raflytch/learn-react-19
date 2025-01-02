const Product = ({ product }) => {
  return (
    <div>
      <h2>
        {product.id} - {product.name}
      </h2>
      <p>Harga {product.price}</p>
      <p>Stok {product.stock}</p>
    </div>
  );
};

export default Product;
