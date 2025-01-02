import { useEffect, useState, useRef } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const loading = useRef(false);

  useEffect(() => {
    if (loading.current) return;
    loading.current = true;
    const fetchProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts(data);
      loading.current = false;
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
