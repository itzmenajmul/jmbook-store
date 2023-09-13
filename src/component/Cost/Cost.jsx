import PropTypes from "prop-types";
import BookName from "../BookName/BookName";

const Cost = ({ addCart, totalPrice, discountPrice }) => {
  return (
    <div className="space-y-4 mt-4 lg:mt-0">
      <h1 className="text-4xl font-semibold text-center">
        {" "}
        Your Books : {addCart.length}
      </h1>
      {/* book title */}
      {addCart.map((bookName, idx) => (
        <BookName key={idx} bookName={bookName} />
      ))}
      <h3 className="text-3xl text-center font-sans">
        Total Price : {totalPrice} <span className=" font-extrabold">৳</span>
      </h3>

      <p className="text-2xl mb-2 text-center font-sans">
        Save Money: <span className="text-red-600">-{discountPrice}</span>{" "}
        <span className=" font-extrabold">৳</span>
      </p>

      <p className="text-2xl border-t-2 text-center font-sans">
        Payment :{" "}
        <span className="font-semibold">{totalPrice - discountPrice}</span>{" "}
        <span className=" font-extrabold">৳</span>
      </p>
    </div>
  );
};

Cost.propTypes = {
  addCart: PropTypes.array,
  totalPrice: PropTypes.number,
  discountPrice: PropTypes.number,
};
export default Cost;
