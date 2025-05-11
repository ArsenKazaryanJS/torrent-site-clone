import { SET_FILTER } from "./types";


export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

const initialState = {
  selectedFilter: "ALL",
  filters: {
    ALL: "Все игры",
    TOP_ONLINE: "Топ 10 Онлайн игр",
    TOP_100: "Топ 100 игр",
    RUSSIAN_VOICE: "С русской озвучкой",
    REPAKS: "Репаки от Игрухи",
  },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};

export const selectFilter = (state) => state.filter.selectedFilter;
export const selectFilters = (state) => state.filter.filters;
