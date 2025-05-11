import "./searchMenu.css";
import NavImg from "../../img/navigate.jpg";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const SearchMenu = () => {
  const location = useLocation();

  return (
    <div className="searchbar-container">
      <div className="navimg">
        <img src={NavImg} alt="nav" />
        {location.pathname !== "/" && (
          <Link to={"/"}>
            <ChevronRight />
            Главная страница
          </Link>
        )}
      </div>
      <div className="searchbar-box">
        <div className="searchInp">
          <input
            type="text"
            placeholder="Поиск по сайту..."
            className="search-input"
          />
          <i className="bi bi-search"></i>
        </div>
      </div>
    </div>
  );
};
