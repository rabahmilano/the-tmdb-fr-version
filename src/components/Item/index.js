import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_ENDPOINT, API_KEY } from "../../config";

import BreadCrumb from "../BreadCrumb";
import ItemInfo from "../ItemInfo";
import MovieInfoBar from "../MovieInfoBar";
import LoadingPage from "../../static/LoadingPage";
import Grid from "../Grid";
import ActorCard from "../ActorCard";

import { useGlobalContext } from "../../context";

const Item = () => {
  const { category } = useGlobalContext();
  let { id } = useParams();
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchElement = async (url, creditUrl) => {
    setIsLoading(true);
    try {
      const data = await (await fetch(url)).json();
      const credits = await (await fetch(creditUrl)).json();

      const directors = credits.crew.filter((item) => item.job === "Director");

      setItem({ ...data, actors: credits.cast, directors });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    let url = `${API_ENDPOINT}${category}/${id}?api_key=${API_KEY}&language=fr`;
    let creditUrl = `${API_ENDPOINT}${category}/${id}/credits?api_key=${API_KEY}&language=fr`;

    fetchElement(url, creditUrl);
  }, [id, category]);

  if (isLoading) return <LoadingPage />;

  if (isError) return <div>Error ...</div>;

  // console.log(item);
  return (
    <>
      <BreadCrumb title={item.title || item.name} />
      <ItemInfo {...item} />
      {category === "movie" && <MovieInfoBar {...item} />}
      <Grid header="Acteurs">
        {item.actors.map((actor) => {
          return <ActorCard key={actor.id} {...actor} />;
        })}
      </Grid>
    </>
  );
};

export default Item;
