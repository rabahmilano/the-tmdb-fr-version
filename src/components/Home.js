import React from "react";
import { v4 as uuidv4 } from "uuid";

import HomeImage from "./HomeImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";
import ShowMoreButton from "./ShowMoreButton";
import LoadingButton from "../static/LoadingButton";

import { useGlobalContext } from "../context";

const Home = () => {
  const {
    loading,
    error,
    data,
    page,
    totalPages,
    searchTerm,
    filter,
    category,
  } = useGlobalContext();

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      {!loading && !searchTerm ? <HomeImage /> : null}
      <SearchBar />
      <Grid
        header={
          searchTerm
            ? `${filter} ${category} for: ${searchTerm}`
            : `${filter} ${category}`
        }
      >
        {data.map((item) => {
          return <Thumb key={uuidv4()} {...item} />;
        })}
      </Grid>

      {loading ? (
        <LoadingButton />
      ) : page < totalPages ? (
        <ShowMoreButton />
      ) : null}
    </>
  );
};

export default Home;
