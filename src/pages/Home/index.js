import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { BsArrowRight } from "react-icons/bs";

// API
import api from "../../services/api";

// Styles
import "./styles.css";

// Assets
import { categories } from "../../assets/categories";
import BookItemLink from "../../components/BookItemLink";

const Home = () => {
  const [items, setItems] = useState([]);

  const getData = useCallback(async () => {
    let tempCategories = [];

    await Promise.all(
      categories.map(async (cat) => {
        const response = await api.get(
          `volumes?maxResults=10&q=subject:${cat}`
        );
        if (response?.data?.items?.length > 0) {
          tempCategories = [
            ...tempCategories,
            {
              items: response.data.items,
              cat,
            },
          ];
        }
      })
    );
    setItems(tempCategories);
  }, [categories]);

  useEffect(() => {
    getData();
  }, []);

  const renderBookItem = useCallback((item) => {
    const { volumeInfo, id } = item;
    return (
      <div className="renderItem" key={id}>
        <BookItemLink book={{ id, image: volumeInfo?.imageLinks?.thumbnail }} />
      </div>
    );
  }, []);

  const handleOnNextEnd = useCallback(() => {}, []);

  const carouselProps = useMemo(() => {
    return {
      enableAutoPlay: true,
      autoPlaySpeed: 5000,
      showArrows: false,
      onNextEnd: handleOnNextEnd,
      breakPoints: [
        { width: 1, itemsToShow: 3 },
        { width: 700, itemsToShow: 5 },
      ],
    };
  }, [handleOnNextEnd]);

  const renderItem = useCallback(
    ({ items, cat }) => {
      return (
        <div className="carrouselItemContainer" key={cat}>
          <div className="row">
            <p className="title">{cat}</p>
            <Link to={`/list/${cat}/true`}>
              <p className="title all">See all</p>
              <BsArrowRight size={50} color="black" />
            </Link>
          </div>
          <Carousel {...carouselProps}>
            {items && items.map(renderBookItem)}
          </Carousel>
        </div>
      );
    },
    [carouselProps, renderBookItem]
  );

  return <div className="homeContainer">{items.map(renderItem)}</div>;
};

export default Home;
