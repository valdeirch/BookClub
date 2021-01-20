import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../lotties/book-with-bookmark";

const BookLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height="auto" width="auto" />;
};

export default BookLoader;
