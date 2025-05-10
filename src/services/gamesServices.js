import { getAllGames } from "../store/slices/games/actioms";


export const fetchGames = async (dispatch) => {
    try {
        const res = await fetch("http://localhost:3001/games");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        dispatch(getAllGames(data));
      } catch (error) {
        console.error('Fetch error:', error);
      }
      
};
