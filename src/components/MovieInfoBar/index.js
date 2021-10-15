import React from "react";

import { calcTime, convertMoney } from "../../helpers";

import { Wrapper, Content, Column } from "./MovieInfoBar.Styles";

const MovieInfoBar = ({ runtime, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <Column>
          <p>Durée: {calcTime(runtime)}</p>
        </Column>
        <Column>
          <p>Budget: {convertMoney(budget)}</p>
        </Column>
        <Column>
          <p>Revenue: {convertMoney(revenue)}</p>
        </Column>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
