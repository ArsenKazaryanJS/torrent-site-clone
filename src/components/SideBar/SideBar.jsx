import "./sideBar.css"; 
import {categories} from '../../json/categories'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="side">
        <h3>Уже доступна!</h3>
        <img src="https://itorrents-igruha.org/uploads/posts/2024-06/1717847263_library_600x900_2x.jpg" alt="Black Myth Wukong" className="gameImage" />
      </div>
      <div className="buttons">
      {
        categories.slice(0,3).map((el,index)=> <button key={index}>{el}</button>)
      }
      </div>
      <h3>Категории</h3>
      <div className="categories">
        {
          categories.slice(3,categories.length).map((el,index)=> <button key={index}>{el}</button>)
        }
      </div>
      
    </div>
  );
};

export default SideBar;