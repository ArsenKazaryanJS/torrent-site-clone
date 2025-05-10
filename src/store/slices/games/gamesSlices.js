import { GET_GAMES } from "./types";

const initialState = {
  games_Data: []
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games_Data: action.payload };
    default:
      return state;
  }
};

export const selectGames = (state) => state.games.games_Data;
