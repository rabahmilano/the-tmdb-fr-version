import {
  SET_CATEGORY,
  SET_DATA,
  SET_LOADING,
  SET_ERROR,
  LOAD_MORE,
  SET_MOVIE,
  SET_TV,
  SET_SEARCH,
  SET_FILTER,
  BACK_HOME,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === SET_DATA) {
    const datas = action.payload;
    return {
      ...state,
      data: state.page > 1 ? [...state.data, ...datas.results] : datas.results,
      page: datas.page,
      totalPages: datas.total_pages,
      loading: false,
      error: false,
    };
  }
  if (action.type === SET_ERROR) {
    return { ...state, error: true };
  }
  if (action.type === SET_SEARCH) {
    return { ...state, page: 1, searchTerm: action.payload };
  }
  if (action.type === SET_FILTER) {
    return { ...state, page: 1, filter: action.payload };
  }
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      category: action.payload,
      page: 1,
      filter: state.filter,
    };
  }
  if (action.type === LOAD_MORE) {
    return {
      ...state,
      page: action.payload.page,
      searchTerm: action.payload.searchTerm,
    };
  }
  if (action.type === SET_MOVIE) {
    return { ...state, category: "movie" };
  }
  if (action.type === SET_TV) {
    return { ...state, category: "tv" };
  }
  if (action.type === BACK_HOME) {
    return { ...state, category: state.category, filter: "popular" };
  }
  throw new Error("no matching action type");
};

export default reducer;
