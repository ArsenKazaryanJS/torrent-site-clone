import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/slices/filter/filterSlices';
import { selectGames } from '../../store/slices/games/gamesSlices';

export const GameList = () => {
  const selectedFilter = useSelector(selectFilter);
  const games = useSelector(selectGames);


  const filteredGames = games.filter((game) => {
    switch (selectedFilter) {
      case 'TOP_ONLINE':
        return game.categories.includes('Игры с онлайном');
      case 'TOP_100':
        return game.rating >= 4.5; 
      case 'RUSSIAN_VOICE':
        return game.categories.includes('С русской озвучкой');
      case 'REPAKS':
        return game.name.includes('Repak') || game.categories.includes('Репаки');
      default:
        return true;
    }
  });

  console.log(filteredGames);
  

  return (
    <div>
      {/* {filteredGames.map((game) => (
        <div key={game.id}>
          <h3>{game?.name}</h3>
          <p>{game?.description}</p>
        </div>
      ))} */}
    </div>
  );
};