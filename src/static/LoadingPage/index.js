import React from "react";

import { Wrapper } from "./Loading.Page.Styles";

import Spinner from "../LoadingButton";
const LoadingPage = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default LoadingPage;
