import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

import { Wrapper, Content } from "./BreadCrumb.Styles";

const BreadCrumb = ({ title }) => {
  const { backHome } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <Link to="/" onClick={backHome}>
          Home
        </Link>
        <span> | </span>
        <span>{title}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
