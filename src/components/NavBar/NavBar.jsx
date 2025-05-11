import { useState } from "react";

import { Link } from "react-router-dom";
import Moon from "../../img/moon.webp";
import Sun from "../../img/sun.webp";
import User from "../../img/prof_default.webp";
import "./nav_bar.css";
import { AuthForm } from "../AuthForm/AuthForm";
import { useTheme } from "../../hooks/useTheme";

export const NavBar = () => {
const [popUp, setPopUp] = useState(false);
const {theme,toggleTheme} = useTheme()


  return (
    <nav className="nav_content">
      <div className="nav_container">
        <div className="nav_left">
          <Link to="/">Главная</Link>
          <a href="">Новые игры</a>
          <a href="">2025</a>
          <a href="">По сети</a>
          <a className="vip" href="">
            VIP 👑
          </a>
          <div className="nav_links">
            <a href="https://t.me/joinchat/StHJgi6f75plYTIy">Телеграм</a>
            <a href="https://vk.com/torrent_igruha">ВК</a>
          </div>
        </div>

        <div className="nav_right">
          <img src={!theme ? Sun : Moon} onClick={()=> toggleTheme()} />
          <div className="auth_click" onClick={()=>setPopUp(!popUp)}>
            <p>Войти</p>
            <p>Регистрация</p>
          </div>
          
          <img src={User} alt="" />
        </div>
      </div>
      {popUp && <AuthForm />}
    </nav>
  );
};
