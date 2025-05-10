import "./searchMenu.css";
import NavImg from "../../img/navigate.jpg"

export const SearchMenu = () => {
  return (
    <div className="searchbar-container">
  <div className="navimg">
    <img src={NavImg} alt="nav" />
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
}
