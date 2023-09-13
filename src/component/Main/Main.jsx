import { useEffect, useState } from "react";
import Cost from "../Cost/Cost";
import Products from "../Products/Products";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  // console.log(products)
  return (
    <div className="md:flex justify-around">
      <div className="max-w-3xl grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <div className="max-w-sm">
        <Cost />
      </div>
    </div>
  );
};

export default Main;
