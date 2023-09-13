import PropTypes from "prop-types";

const BookName = ({ bookName }) => {
  return (
    <div className=" m-2 p-2">
      <h2 className="text-3xl text-gray-600 font-semibold">{bookName.name}</h2>
    </div>
  );
};

BookName.propTypes = {
  bookName: PropTypes.object,
};

export default BookName;
