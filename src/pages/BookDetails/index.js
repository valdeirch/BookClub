import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import StarRatings from "react-star-ratings";

// Styles
import "./styles.css";

// API
import api from "../../services/api";

// Components
import BookItem from "../../components/BookItem";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState();
  const [favorite, setFavorite] = useState();

  const getBookInfo = useCallback(async () => {
    const response = await api.get(`volumes/${id}`);
    setBook(response.data);
  }, [id]);

  useEffect(() => {
    getBookInfo();
  }, []);

  const handleFavorite = useCallback(() => {
    setFavorite(!favorite);
  }, [favorite]);

  return (
    <div className="bookDetailsContent">
      <div className="head">
        <div className="bookImageContainer">
          <BookItem image={book?.volumeInfo?.imageLinks?.thumbnail} />
          <p>{book?.volumeInfo.pageCount} pages</p>
        </div>
        <div className="details">
          <div className="bookDetailsContainer">
            <div>
              <p className="title">{book?.volumeInfo.title}</p>
              <p className="author">
                by {book?.volumeInfo?.authors[0] || "Unknown"}
              </p>
            </div>
            <div className="priceContainer">
              {book?.saleInfo?.listPrice?.amount && (
                <p className="price">${book?.saleInfo?.listPrice?.amount}</p>
              )}
              <StarRatings
                rating={book?.volumeInfo?.ratingsCount}
                starRatedColor="black"
                starHoverColor="black"
                changeRating={() => {}}
                numberOfStars={5}
                name="rating"
                starDimension="12px"
                starSpacing="3px"
              />
            </div>
          </div>
          <div className="buttonsContainer">
            <a
              className="buyButton"
              href={book?.saleInfo?.buyLink}
              target="_BLANK"
              rel="noreferrer"
            >
              <span>BUY</span>
            </a>
            <button className="favoriteButton" onClick={() => handleFavorite()}>
              {favorite ? (
                <FaHeart color="white" size={18} />
              ) : (
                <FaRegHeart color="white" size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="description">
        <p>{book?.volumeInfo?.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
