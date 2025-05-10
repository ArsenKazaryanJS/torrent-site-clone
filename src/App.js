import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { fetchGames } from "./services/gamesServices";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGames(dispatch);
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
