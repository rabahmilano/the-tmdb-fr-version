import React from "react";

import { Wrapper, Content, CardInfo } from "./Card.Styles";

const Card = ({ imagePath, title, subtitle, classprop }) => {
  return (
    <Wrapper image={imagePath} className={classprop}>
      <Content>
        <CardInfo>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </CardInfo>
      </Content>
    </Wrapper>
  );
};

export default Card;
