import React from "react";

import { useGlobalContext } from "../../context";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";

import NoPoster from "../../images/no_image.jpg";
import NoBackdrop from "../../images/no_backdrop.jpg";

import { Wrapper, Content, Poster, Text } from "./ItemInfo.Styles";
import CircleState from "../../static/CircleState";

const ItemInfo = (props) => {
  const { category } = useGlobalContext();

  const score = props.vote_average * 10;
  let overview = props.overview;

  return (
    <Wrapper
      image={
        props.backdrop_path
          ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop_path}`
          : NoBackdrop
      }
    >
      <Content>
        <Poster
          image={
            props.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.poster_path}`
              : NoPoster
          }
        />
        {category === "movie" && (
          <Text>
            <h2>{props.original_title}</h2>
            {props.genres.map((e, index) => (
              <span key={index} className="info">
                {e.name}
              </span>
            ))}
            <span className="left-margin">&#9900; </span>
            <span className="info">
              {props.release_date ? props.release_date : null}
            </span>
            <h3>Synopsis</h3>
            <p>
              {overview.length > 240
                ? `${overview.slice(0, 240)} ...`
                : overview}
            </p>
            <CircleState score={score} />
            <p>{`Director : ${props.directors.map((item) => item.name)}`}</p>
          </Text>
        )}

        {category === "tv" && (
          <Text>
            <h2>{props.original_name}</h2>
            <p>
              {props.genres.map((e, index) => (
                <span key={index} className="info">
                  {e.name}
                </span>
              ))}
            </p>
            <p>
              <span className="info">{props.first_air_date}</span>
              <span className="score">&#9900;</span>
              <span className="info">{props.last_air_date}</span>
            </p>
            <h4>
              Nombre de Saisons :
              <span className="info left-margin">{props.seasons.length}</span>
            </h4>
            <h4>
              Nombre d'Episodes :
              <span className="info left-margin">
                {props.number_of_episodes}
              </span>
            </h4>
            <h3>Synopsis</h3>
            <p>
              {overview.length > 240
                ? `${overview.slice(0, 240)} ...`
                : overview}
            </p>
            <CircleState score={score} />
            <p>Director : {props.created_by.map((item) => item.name)}</p>
            <p>
              Créer Par :{" "}
              {props.production_companies.map((item) => {
                return (
                  <span className="info" key={item.id}>
                    {item.name}
                  </span>
                );
              })}
            </p>
            <p>
              Diffusé sur :
              {props.networks.map((item) => {
                return (
                  <span className="info left-margin" key={item.id}>
                    {item.name}
                  </span>
                );
              })}
            </p>
          </Text>
        )}
      </Content>
    </Wrapper>
  );
};

export default ItemInfo;
