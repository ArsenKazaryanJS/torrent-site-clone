import imgEmpty from "../../img/empty.png";
import expected from "../../img/download.webp";
import "./gameCard.css";

export const GameCard = ({ game }) => {
  return (
    <div className="article-film">
      {game.isReleased == false && <div className="new"></div>}
      <img src={game?.background_image || imgEmpty} alt={game?.name} />
      <h3>{game?.name}</h3>
    </div>
  );
};
