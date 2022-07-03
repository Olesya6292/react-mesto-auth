import React from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    onLogin(email, password);
  }
  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <div className="page__content">
      <h2 className="page__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
