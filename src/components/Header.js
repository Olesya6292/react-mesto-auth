import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ email, onSignOut }) {
  return (
    <header className="header page__header">
      <img alt="Логотип" className="header__logo" src={logo} />
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          }
        ></Route>
        <Route
          path="/"
          element={
            <div className="header__info">
              <div className="header__email">{email}</div>
              <button
                onClick={onSignOut}
                className="header__exit"
                type="button"
              >
                Выйти
              </button>
            </div>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
