import { useEffect, useState } from "react";
import Cost from "../Cost/Cost";
import Products from "../Products/Products";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const handleAddBook = (product) => {
    setTotalPrice(totalPrice + product.originalPrice);
    const discountSum = product.originalPrice - product.discountPrice;
    setDiscountPrice(discountPrice + discountSum);

    const newCart = [...addCart, product];
    setAddCart(newCart);
  };

  console.log(totalPrice);

  return (
    <div className="lg:flex justify-around">
      <div className="max-w-3xl grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleAddBook={handleAddBook}
          />
        ))}
      </div>
      <div className="max-w-sm">
        <Cost
          addCart={addCart}
          totalPrice={totalPrice}
          discountPrice={discountPrice}
        />
      </div>
    </div>
  );
};

export default Main;
