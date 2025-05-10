import "../HomePage/home_page.css";
import imgEmpty from "../../img/empty.png";
import { selectGames } from "../../store/slices/games/gamesSlices";
import { useSelector } from "react-redux";
import { AboutSite } from "../../components/AboutSite/AboutSite";

export const HomePage = () => {
  const games = useSelector(selectGames);

  return (
    <div className="container" >
      <div className="header_card" >
        <div>
          <div className="main_info">
            <h1>Новое на сайте</h1>
            <span>
              Последние комментарии <i className="bi bi-arrow-right-circle"></i>
            </span>
          </div>

          <div className="game_box">
            {games.slice(0, 20).map((game) => (
              <div key={game.id} className="article-film">
                <img src={game.background_image || imgEmpty} alt={game.name} />
                <h2>{game.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>Скоро на сайте</h1>
          <div className="game_box">
            {games.slice(0, 20).map((game) => (
              <div key={game.id} className="article-film">
                <img src={game.background_image || imgEmpty} alt={game.name} />
                <h2>{game.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>Самые ожидаемые</h1>
          <div className="game_box">
            {games.slice(0, 20).map((game) => (
              <div key={game.id} className="article-film">
                <img src={game.background_image || imgEmpty} alt={game.name} />
                <h2>{game.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>Популярные игры</h1>
          <div className="game_box">
            {games.slice(0, 20).map((game) => (
              <div key={game.id} className="article-film">
                <img src={game.background_image || imgEmpty} alt={game.name} />
                <h2>{game.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <AboutSite />
      </div>
    </div>
  );
};