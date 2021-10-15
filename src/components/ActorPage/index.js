import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";

import LoadingPage from "../../static/LoadingPage";
import Grid from "../Grid";
import Card from "../../static/Card";

import { useGlobalContext } from "../../context";

import {
  API_ENDPOINT,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../config";

import { Wrapper, Content, Aside, Main } from "./Actor.Styles";

import NoPoster from "../../images/no_image.jpg";

const Actor = () => {
  const { handleMovie, handleTv } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [biography, setBiography] = useState();
  let { id } = useParams();

  const fetchData = async (infoUrl, bioUrl) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const info = await (await fetch(infoUrl)).json();
      const bio = await (await fetch(bioUrl)).json();

      const movies = bio.cast.filter((item) => item.media_type === "movie");
      const series = bio.cast.filter((item) => item.media_type === "tv");
      const realisations = bio.crew;

      setBiography({ ...info, movies, series, realisations });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    let infoUrl = `${API_ENDPOINT}person/${id}?api_key=${API_KEY}&language=en-US`;
    let bioUrl = `${API_ENDPOINT}person/${id}/combined_credits?api_key=${API_KEY}&language=fr`;

    fetchData(infoUrl, bioUrl);
  }, [id]);

  if (isLoading) return <LoadingPage />;

  if (isError) return <div>Error...</div>;

  const age = moment().diff(biography.birthday, "years", false);
  // console.log(biography);

  return (
    <Wrapper>
      <Content>
        <article className="top">
          <Aside>
            <img
              src={
                biography.profile_path
                  ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${biography.profile_path}`
                  : NoPoster
              }
              alt={biography.name}
            />
            <div className="info">
              <h3>Date de Naissane</h3>
              <p>
                {biography.birthday ? biography.birthday : "Non définie"}

                {biography.deathday && biography.birthday ? null : (
                  <span className="left-margin">&#9900; {`(${age} ans)`}</span>
                )}
              </p>
              <h3>Lieu de Naissance</h3>
              <p>{biography.place_of_birth}</p>
              {biography.deathday && (
                <div>
                  <h3>Date de Décès</h3>
                  <p>
                    {`${biography.deathday} `}
                    <span>&#9900; </span>
                    {`(${Math.floor(
                      moment
                        .duration(
                          moment(biography.deathday, "YYYY-MM-DD").diff(
                            moment(biography.birthday, "YYYY-MM-DD")
                          )
                        )
                        .asYears()
                    )} ans)`}
                  </p>
                </div>
              )}
              <h4>
                Films : <span>{biography.movies.length}</span>
              </h4>
              <h4>
                Series : <span>{biography.series.length}</span>
              </h4>
              <h4>
                Realisations : <span>{biography.realisations.length}</span>
              </h4>

              {biography.also_known_as.length > 0 ? (
                <div>
                  <h3>Alias</h3>
                  {biography.also_known_as.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </div>
              ) : null}
            </div>
          </Aside>
        </article>
        <Main>
          <h1>{biography.name}</h1>
          <h3>Biographie</h3>
          <p>{biography.biography}</p>

          {biography.movies.length > 0 ? (
            <Grid header="Films" classprop="full">
              {biography.movies.map((item) => {
                const {
                  id,
                  poster_path: image,
                  original_title: title,
                  release_date: subtitle,
                } = item;
                return (
                  <Link
                    key={uuidv4()}
                    onClick={handleMovie}
                    to={`/${item.media_type}/${id}`}
                  >
                    <Card
                      imagePath={
                        image
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}`
                          : NoPoster
                      }
                      title={title}
                      subtitle={subtitle}
                      classprop="full"
                    />
                  </Link>
                );
              })}
            </Grid>
          ) : null}

          {biography.series.length > 0 ? (
            <Grid header="Series" classprop="full">
              {biography.series.map((item) => {
                const {
                  id,
                  poster_path: image,
                  original_name: title,
                  first_air_date: subtitle,
                } = item;
                return (
                  <Link
                    key={uuidv4()}
                    onClick={handleTv}
                    to={`/${item.media_type}/${id}`}
                  >
                    <Card
                      imagePath={
                        image
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}`
                          : NoPoster
                      }
                      title={title}
                      subtitle={subtitle}
                      classprop="full"
                    />
                  </Link>
                );
              })}
            </Grid>
          ) : null}

          {biography.realisations.length > 0 ? (
            <Grid header="Realisations" classprop="full">
              {biography.realisations.map((item) => {
                const { id, poster_path: image } = item;
                return (
                  <Link
                    key={uuidv4()}
                    onClick={item.media_type === "tv" ? handleTv : handleMovie}
                    to={`/${item.media_type}/${id}`}
                  >
                    <Card
                      imagePath={
                        image
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}`
                          : NoPoster
                      }
                      title={item.original_name || item.original_title}
                      subtitle={`${item.media_type} - ${item.job}`}
                      classprop="full"
                    />
                  </Link>
                );
              })}
            </Grid>
          ) : null}
        </Main>
      </Content>
    </Wrapper>
  );
};

export default Actor;
