import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Loaders
import BookLoader from "../loaders/BookLoader";

const BookItemLink = ({ book }) => {
  const imgRef = useRef(null);
  const { image, id } = book;

  const [loading, setLoading] = useState(true);

  const handleLoading = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && <BookLoader />}
      <Link
        style={{ display: loading ? "none" : "block" }}
        to={`/details/${id}`}
      >
        <img
          ref={imgRef}
          className="thumbnail"
          src={image}
          alt=""
          onLoad={handleLoading}
        />
      </Link>
    </>
  );
};

export default BookItemLink;

BookItemLink.propTypes = {
  book: PropTypes.shape({ image: PropTypes.string, id: PropTypes.string })
    .isRequired,
};
