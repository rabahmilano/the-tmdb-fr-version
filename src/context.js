import React, { useContext, useReducer, useEffect, useState } from "react";

import {
  SET_LOADING,
  SET_ERROR,
  SET_DATA,
  SET_CATEGORY,
  LOAD_MORE,
  SET_MOVIE,
  SET_TV,
  SET_SEARCH,
  SET_FILTER,
  BACK_HOME,
} from "./actions";
import reducer from "./reducer";

import { API_ENDPOINT, API_KEY } from "./config";

const initialState = {
  loading: true,
  error: false,
  category: "movie",
  filter: "popular",
  data: [],
  searchTerm: "",
  page: 1,
  totalPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isFilterShow, setIsFilterShow] = useState(false);

  const homeFetch = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      dispatch({ type: SET_DATA, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR });
    }
  };

  const handleSearch = (e) => {
    dispatch({ type: SET_SEARCH, payload: e.target.value });
  };

  const handleCategory = (e) => {
    setIsMenuShow(false);
    dispatch({ type: SET_CATEGORY, payload: e.target.value });
  };

  const handleFilter = (e) => {
    setIsFilterShow(false);
    dispatch({ type: SET_FILTER, payload: e.target.value });
  };

  const loadMore = () => {
    dispatch({
      type: LOAD_MORE,
      payload: { page: state.page + 1, searchTerm: state.searchTerm },
    });
  };

  const handleMovie = () => {
    dispatch({ type: SET_MOVIE });
  };

  const handleTv = () => {
    dispatch({ type: SET_TV });
  };

  const backHome = () => {
    dispatch({ type: BACK_HOME });
  };

  useEffect(() => {
    let url = `${API_ENDPOINT}${state.category}/${state.filter}?api_key=${API_KEY}&language=fr&page=${state.page}`;

    if (state.searchTerm) {
      url = `${API_ENDPOINT}search/${state.category}?api_key=${API_KEY}&language=fr&query=${state.searchTerm}&page=${state.page}`;

      const timer = setTimeout(() => {
        homeFetch(url);
        return () => clearTimeout(timer);
      }, 500);
    } else {
      homeFetch(url);
    }
    // homeFetch(url);
  }, [state.category, state.page, state.searchTerm, state.filter]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        homeFetch,
        handleSearch,
        handleFilter,
        handleCategory,
        loadMore,
        handleMovie,
        handleTv,
        isMenuShow,
        setIsMenuShow,
        isFilterShow,
        setIsFilterShow,
        backHome,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
