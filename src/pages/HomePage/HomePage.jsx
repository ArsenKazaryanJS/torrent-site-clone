import "../HomePage/home_page.css";
import { selectGames } from "../../store/slices/games/gamesSlices";
import { useSelector } from "react-redux";
import { AboutSite } from "../../components/AboutSite/AboutSite";
import { GameCard } from "../../components/GameCard/GameCard";

export const HomePage = () => {
  const games = useSelector(selectGames);
  const newGames = games.toSorted(
    (a, b) => new Date(a.released) - new Date(b.released)
  );
  const soonGames = games.filter((el) => !el.isReleased);
  const ratingGames = games.toSorted((a, b) => b.rating - a.rating);

  return (
    <div className="container">
      <div className="header_card">
        <div>
          <div className="main_info">
            <h2>Скоро на сайте</h2>

            <span>
              Последние комментарии <i className="bi bi-arrow-right-circle"></i>
            </span>
          </div>

          <div className="game_box">
            {soonGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="main_info">
          <h2>Новое на сайте</h2>
        </div>

        <div className="game_box">
          {newGames.slice(0, 20).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div>
          <h2>Самые ожидаемые</h2>
          <div className="game_box">
            {ratingGames
              .filter((el) => !el.isReleased)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>
        </div>

        <div>
          <h2>Популярные игры</h2>
          <div className="game_box">
            {ratingGames
              .filter((el) => el.isReleased)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>
        </div>
        <AboutSite />
      </div>
    </div>
  );
};
