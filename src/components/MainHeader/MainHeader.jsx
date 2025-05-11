import "./mainHeader.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/slices/filter/filterSlices";
import { Link, useNavigate } from "react-router-dom";

export const MainHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
    navigate('/category')

  };

  return (
    <div className="header-container">
      <div className="title-section">
        <h1 className="main-title">
          Торрент <span className="highlight">Игруха</span>
        </h1>
        <p className="subtitle">Официальный сайт | Качай сколько влезет ;)</p>
      </div>
      <div className="buttons">
        <button
          className="btn green"
          onClick={() => handleFilterClick("TOP_ONLINE")}
        >
          Топ 10 Онлайн игр
        </button>
        <button
          className="btn green"
          onClick={() => handleFilterClick("TOP_100")}
        >
          Топ 100 игр
        </button>
        <button
          className="btn green"
          onClick={() => handleFilterClick("RUSSIAN_VOICE")}
        >
          С русской озвучкой
        </button>
        <button
          className="btn blue"
          onClick={() => handleFilterClick("REPAKS")}
        >
          Репаки от Игрухи
        </button>
      </div>
    </div>
  );
};
