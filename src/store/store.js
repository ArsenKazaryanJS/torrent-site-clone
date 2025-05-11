import { filterReducer } from "./slices/filter/filterSlices";
import { combineReducers, createStore } from "redux";
import { gamesReducer } from "./slices/games/gamesSlices";

export const store = createStore(
  combineReducers({
    games: gamesReducer,
    filter: filterReducer,
  })
);
