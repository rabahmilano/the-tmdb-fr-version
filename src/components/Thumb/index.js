import { Link } from "react-router-dom";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import { Wrapper, Content, CardInfo, CardRating } from "./Thumb.Styles";
import NoPoster from "../../images/no_image.jpg";

import { useGlobalContext } from "../../context";

const Thumb = (item, { Children }) => {
  const { category } = useGlobalContext();
  return (
    <Wrapper
      image={
        item.poster_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
          : NoPoster
      }
    >
      <Link to={`/${category}/${item.id}`}>
        <Content>
          <CardInfo>
            <h4>{item.title || item.name}</h4>
            <p>{item.release_date || item.first_air_date}</p>
          </CardInfo>
        </Content>
      </Link>
      <CardRating>{item.vote_average}</CardRating>
    </Wrapper>
  );
};

export default Thumb;
