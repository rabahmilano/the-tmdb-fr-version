import React from "react";

import { Wrapper } from "./CircleState.Styles";

const CircleState = ({ score }) => {
  return (
    <Wrapper>
      <div className={`c100 small p${score}`}>
        <span>{score}%</span>
        <div className="slice ">
          <div className="bar "></div>
          <div className="fill "></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CircleState;
