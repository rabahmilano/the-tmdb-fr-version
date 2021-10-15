import React from "react";
import { Link } from "react-router-dom";

import Card from "../static/Card";

import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";

import NoPoster from "../images/no_image.jpg";

const ActorCard = ({ character, id, profile_path: image, name }) => {
  return (
    <Link to={`/actor/${id}`}>
      <Card
        imagePath={image ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image}` : NoPoster}
        title={name}
        subtitle={character}
      />
    </Link>
  );
};

export default ActorCard;
