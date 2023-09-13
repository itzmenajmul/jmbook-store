import PropTypes from "prop-types";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Products = ({ product, handleAddBook }) => {
  const { name, image, originalPrice, discountPrice, rating } = product;
  return (
    <div>
      <div>
        {/* cart starts here*/}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-[250px] mb-5" src={image} alt="" />
          </figure>
          <div className="pl-2 pb-1">
            <h2 className="card-title mb-2 text-gray-700">{name}</h2>
            <div className="text-gray-500 mb-5 font-sans">
              <span className="line-through ">{originalPrice}</span>
              <span className=" font-extrabold">৳</span>
              {"  "}
              <span className="font-bold">{discountPrice}</span>
              <span className=" font-extrabold">৳</span>
              <p>Rating - {rating}</p>
            </div>
            <div className="card-actions justify-start">
              <button
                onClick={() => handleAddBook(product)}
                className="btn font-semibold text-white bg-[#BC7AF9]"
              >
                <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* cart ends here */}
      </div>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.object,
  handleAddBook: PropTypes.func,
};

export default Products;
