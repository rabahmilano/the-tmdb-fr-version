import React, { useRef, useEffect } from "react";

import {
  Wrapper,
  Content,
  Search,
  Filter,
  Menu,
  Icon,
  ListContainer,
  List,
} from "./SearchBar.Styles";

import { useGlobalContext } from "../../context";

import SearchIcon from "../../images/search-icon.svg";
import MenuIcon from "../../images/menu_icon.svg";

const SearchBar = () => {
  const {
    searchTerm,
    handleSearch,
    handleFilter,
    isFilterShow,
    setIsFilterShow,
  } = useGlobalContext();

  const refListContainer = useRef(null);
  const refList = useRef(null);

  const handleClick = () => {
    setIsFilterShow((oldValue) => {
      return !oldValue;
    });
  };

  useEffect(() => {
    const menuHeight = refList.current.clientHeight;
    if (isFilterShow) {
      refListContainer.current.style.height = `${menuHeight}px`;
    } else {
      refListContainer.current.style.height = "0";
      refListContainer.current.style.overflow = "hidden";
    }
  }, [isFilterShow]);

  return (
    <Wrapper>
      <Content>
        <Search>
          <img src={SearchIcon} alt="search" />
          <input type="text" value={searchTerm} onChange={handleSearch} />
        </Search>

        <Filter>
          <ListContainer ref={refListContainer}>
            <List ref={refList}>
              <form
                onSubmit={(e) => e.preventDefault()}
                onChange={handleFilter}
              >
                <label htmlFor="popular">
                  <span>populaire</span>
                  <input
                    name="filter"
                    type="radio"
                    id="popular"
                    value="popular"
                    defaultChecked
                  />
                </label>
                <label htmlFor="top_rated">
                  <span>top</span>
                  <input
                    name="filter"
                    type="radio"
                    id="top_rated"
                    value="top_rated"
                  />
                </label>
              </form>
            </List>
          </ListContainer>
          <Menu onClick={handleClick}>
            <Icon src={MenuIcon} />
          </Menu>
        </Filter>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
