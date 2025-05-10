import { Link } from "react-router-dom";
import './auth_form.css'
import { Key, UserRoundPlus } from "lucide-react";

export const AuthForm = () => {
  return (
    <div className="auth_form_box">
      <form>
        <label>Логин:</label>
        <input type="text" placeholder="Логин" />
        <label>Пароль:</label>
        <input type="text" placeholder="Пароль" />
        <div className="login_btn">
          <div className="checkbox">
            <input type="checkbox" />
            <label>Не запоминать</label>
          </div>
          <button>Войти</button>
        </div>
        <Link><Key/>Напомнить пароль? </Link>
        <Link><UserRoundPlus />Регистрация</Link>
      </form>
    </div>
  );
};
