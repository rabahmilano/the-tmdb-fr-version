import React from "react";

import { Wrapper } from "./ShowMore.Styles";

import { useGlobalContext } from "../../context";

const ShowMoreButton = () => {
  const { loadMore } = useGlobalContext();
  return <Wrapper onClick={loadMore}>Show More</Wrapper>;
};

export default ShowMoreButton;
