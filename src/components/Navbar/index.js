import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

// styles
import {
  Wrapper,
  Content,
  LogoImg,
  Menu,
  Icon,
  ButtonList,
  ButtonContent,
  Button,
} from "./Navbar.Styles";

import Logo from "../../images/react-movie-logo.svg";
import MenuIcon from "../../images/menu_icon.svg";

const Navbar = () => {
  const { backHome, category, handleCategory, isMenuShow, setIsMenuShow } =
    useGlobalContext();

  const refContainerLinks = useRef(null);
  const refLinks = useRef(null);

  const handleClick = () => {
    setIsMenuShow((oldValue) => {
      return !oldValue;
    });
  };

  useEffect(() => {
    const menuHeight = refLinks.current.clientHeight;
    if (isMenuShow) {
      refContainerLinks.current.style.height = `${menuHeight}px`;
    } else {
      refContainerLinks.current.style.height = "0";
      refContainerLinks.current.style.overflow = "hidden";
    }
  }, [isMenuShow]);

  return (
    <Wrapper id="navbar">
      <Content>
        <Link to="/" onClick={backHome}>
          <LogoImg src={Logo} />
        </Link>

        <ButtonList ref={refContainerLinks}>
          <ButtonContent ref={refLinks}>
            <div>
              <Link to="/" className="max">
                <Button
                  value="movie"
                  onClick={(e) => handleCategory(e)}
                  className={category === "movie" ? "first active" : "first"}
                >
                  Movies
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/">
                <Button
                  value="tv"
                  onClick={handleCategory}
                  className={category === "tv" ? "second active" : "second"}
                >
                  TV Shows
                </Button>
              </Link>
            </div>
          </ButtonContent>
        </ButtonList>

        <Menu>
          <Icon src={MenuIcon} onClick={handleClick} />
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
