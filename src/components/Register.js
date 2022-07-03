import React from "react";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    onRegister(email, password);
  }
  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <div className="page__content">
      <h2 className="page__title">Регистрация</h2>
      <form className="page__form" onSubmit={handleSubmit}>
        <input
          className={`page__input ${errors.email && "popup__input_type_error"}`}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email ?? ""}
          onChange={handleChange}
          required
        ></input>
        <span
          className={`popup__input-error ${
            errors.email && "popup__input-error_active"
          }`}
        >
          {errors.email ?? ""}
        </span>
        <input
          className={`page__input ${
            errors.password && "popup__input_type_error"
          }`}
          id="password"
          type="password"
          name="password"
          placeholder="Пароль"
          value={values.password ?? ""}
          onChange={handleChange}
          required
        ></input>
        <span
          className={`popup__input-error ${
            errors.password && "popup__input-error_active"
          }`}
        >
          {errors.password ?? ""}
        </span>
        <button disabled={!isValid} className="page__button" type="submit">
          Зарегистрироваться
        </button>
        <p className="page__subtitle">
          Уже зарегистрированы?{" "}
          <Link to="/sign-in" className="page__link">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
