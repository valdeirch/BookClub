import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

// Loaders
import BookLoader from "../loaders/BookLoader";

const BookItem = ({ image }) => {
  const [loading, setLoading] = useState(true);

  const handleLoading = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      {loading && <BookLoader />}
      <img
        style={{ display: loading ? "none" : "block" }}
        className="thumbnail"
        src={image}
        alt=""
        onLoad={handleLoading}
      />
    </>
  );
};

export default BookItem;

BookItem.propTypes = {
  image: PropTypes.string.isRequired,
};
