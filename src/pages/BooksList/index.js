import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

// API
import api from "../../services/api";

// CSS
import "./styles.css";

// Actions
import { setTitle } from "../../store/modules/navBar/actions";
import { setLoading } from "../../store/modules/others/actions";

// Components
import BookItemLink from "../../components/BookItemLink";

const BooksList = () => {
  const dispatch = useDispatch();
  const { category, subject } = useParams();

  const [books, setBooks] = useState([]);
  const [paginate, setPaginate] = useState(10);

  const getVolumes = useCallback(async () => {
    dispatch(setLoading(true));
    const response = await api.get(
      `volumes?startIndex=1&maxResults=${paginate}&q=${
        subject === "true" ? `subject:${category}` : category
      }`
    );

    setBooks(response.data.items);
    dispatch(setLoading(false));
  }, [category, dispatch, paginate, subject]);

  useEffect(() => {
    dispatch(setTitle(category));
    getVolumes();
  }, [category, paginate]);

  const renderBookItem = useCallback((item) => {
    const { volumeInfo, id } = item;
    return (
      <li key={id}>
        <BookItemLink
          book={{ id: id, image: volumeInfo?.imageLinks?.thumbnail }}
        />
      </li>
    );
  }, []);

  const handlePaginate = useCallback(() => {
    setPaginate((old) => old + 5);
  }, []);

  return (
    <div className="container">
      <ul>{books.map(renderBookItem)}</ul>
      {paginate < 40 && (
        <button onClick={() => handlePaginate()}>Load More!</button>
      )}
    </div>
  );
};

export default BooksList;
