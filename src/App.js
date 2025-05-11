import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { fetchGames } from "./services/gamesServices";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGames(dispatch);
  }, [dispatch]);

//   const YouTubeEmbed = () => {
//   return (
//     <div className="video-wrapper">
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/Ixi8-1mspQs"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };


  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}



export default App;
